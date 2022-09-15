import express from 'express';
import morgan from 'morgan';
import connectionToMongo from './utils/connection.js';
import blogRoutes from './routes/blogRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/blogs', blogRoutes);
app.use('/about', aboutRoutes);
app.use('/', (_req, res) => res.redirect('/blogs'));
app.use((req, res) => res.status(404).render('404', { title: '404' }));

app.listen(port, () => {
  connectionToMongo();
  console.log(`listening for requests on port ${port}`);
});
