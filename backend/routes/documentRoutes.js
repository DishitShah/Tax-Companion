const express = require('express');
const { uploadDocument, getDocuments, getDocumentById } = require('../controllers/documentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, uploadDocument)
  .get(protect, getDocuments);

router.route('/:id').get(protect, getDocumentById);

module.exports = router;