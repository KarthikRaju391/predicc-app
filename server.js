const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database

connectDB();

app.get('/', (req, res) => res.send('API running'));

// Define Routes

app.use('/api/users', require('./routes/api/Users'));
app.use('/api/auth', require('./routes/api/Auth'));
app.use('/api/profiles', require('./routes/api/Profiles'));
app.use('/api/create', require('./routes/api/CreateRoom'));
app.use('/api/join', require('./routes/api/JoinRoom'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));