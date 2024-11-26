const express = require('express');
const multer = require('multer');
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  deleteBlogPermanently,
  toggleBlogStatus,
} = require('../controllers/blogController');

const upload = multer({ dest: 'uploads/' }); // Middleware for file handling

const router = express.Router();

router.get('/get-blog', getAllBlogs);
router.get('/get-blog/:id', getBlogById);
router.post('/create-blog', upload.single('image'), createBlog);
router.put('/update-blog/:id', upload.single('image'), updateBlog);
router.delete('/delete-blog/:id', deleteBlog);
router.delete('/delete-blog/:id/permanent', deleteBlogPermanently);
router.patch('/update-blog/:id/toggle-status', toggleBlogStatus);

module.exports = router;
