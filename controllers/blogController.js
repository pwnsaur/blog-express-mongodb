import Blog from '../models/blog.js';

const getAllBlogs = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then(result =>
      res.render('blogs/index', { title: 'All Blogs', blogs: result })
    )
    .catch(err => console.log(err));
};

const getBlogCreate = (req, res) => {
  res.render('blogs/create', { title: 'create blog' });
};

const createBlog = (req, res) => {
  Blog(req.body)
    .save()
    .then(() => res.redirect('/blogs'))
    .catch(err => console.log(err));
};

const getBlog = (req, res) => {
  Blog.findById(req.params.id)
    .then(result =>
      res.render('blogs/details', { title: 'Blog Details', blog: result })
    )
    .catch(() => res.status(404).render('404', { title: 'blog not found' }));
};

const deleteBlog = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json({ redirect: '/blogs' }))
    .catch(err => console.log(err));
};

export default { getAllBlogs, getBlogCreate, createBlog, getBlog, deleteBlog };
