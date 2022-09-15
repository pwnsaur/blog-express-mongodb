import express from 'express';
import blogController from '../controllers/blogController.js';

const { getAllBlogs, getBlogCreate, createBlog, getBlog, deleteBlog } =
  blogController;
const router = express.Router();

router.get('/', getAllBlogs);
router.get('/create', getBlogCreate);
router.post('/', createBlog);
router.get('/:id', getBlog);
router.delete('/:id', deleteBlog);

export default router;
