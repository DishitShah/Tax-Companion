import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { uploadDocument } from '../../redux/actions/documentActions';
import Button from '../common/Button';

const DocumentUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const dispatch = useDispatch();

  const onDrop = useCallback(acceptedFiles => {
    const newFiles = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'application/msword': ['.doc', '.docx']
    },
    maxSize: 5 * 1024 * 1024 // 5MB
  });

  const removeFile = (file) => {
    setFiles(prevFiles => prevFiles.filter(f => f !== file));
  };

  const uploadFiles = () => {
    files.forEach(file => {
      const formData = new FormData();
      formData.append('document', file);

      dispatch(uploadDocument(formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(prev => ({
            ...prev,
            [file.name]: percentCompleted
          }));
        }
      }));
    });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div 
        {...getRootProps()}
        className={`
          border-2 border-dashed p-8 text-center 
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
        `}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive 
            ? 'Drop the files here...' 
            : 'Drag \'n\' drop documents here, or click to select files'}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          (PDF, JPEG, PNG, DOC - Max 5MB)
        </p>
      </div>

      <div className="mt-4">
        {files.map(file => (
          <div key={file.name} className="flex items-center justify-between p-2 bg-gray-100 mb-2 rounded">
            <div>
              <p>{file.name}</p>
              {uploadProgress[file.name] && (
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{width: `${uploadProgress[file.name]}%`}}
                  ></div>
                </div>
              )}
            </div>
            <button 
              onClick={() => removeFile(file)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {files.length > 0 && (
        <Button 
          onClick={uploadFiles}
          className="mt-4 w-full"
        >
          Upload Documents
        </Button>
      )}
    </div>
  );
};

export default DocumentUpload;