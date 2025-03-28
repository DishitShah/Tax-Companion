const Document = require('../models/Document');

const uploadDocument = async (req, res) => {
  const { user, name, url } = req.body;

  const document = new Document({
    user,
    name,
    url,
  });

  const createdDocument = await document.save();
  res.status(201).json(createdDocument);
};

const getDocuments = async (req, res) => {
  const documents = await Document.find({ user: req.user._id });
  res.json(documents);
};

const getDocumentById = async (req, res) => {
  const document = await Document.findById(req.params.id);

  if (document) {
    res.json(document);
  } else {
    res.status(404).json({ message: 'Document not found' });
  }
};

module.exports = { uploadDocument, getDocuments, getDocumentById };