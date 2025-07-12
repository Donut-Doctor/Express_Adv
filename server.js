const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;
 
mongoose.connect('mongodb://127.0.0.1:27017/vagabond_blog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

 
app.use(express.json());
app.use(logger);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
app.use('/', require('./routes/basicRoutes'));
app.use('/upload', require('./routes/uploadRoutes'));
app.use('/quote', require('./routes/quoteRoutes'));
app.use('/posts', require('./routes/postRoutes'));
 
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});
 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!', error: err.message });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
