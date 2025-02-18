// server.js

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const FormDataModel = require('./models/FormData');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/collegedirectory', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// Registration Endpoint
app.post('/register', async (req, res) => {
    console.log(req.body); // Log the incoming request body
    const { name, username, role, email, password, image } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await FormDataModel.create({
            name,
            username,
            role,
            email,
            password: hashedPassword,
            image,
        });
        res.status(201).json({ message: "User registered successfully", newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user", error });
    }
});

// Login Endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await FormDataModel.findOne({ email: email });

        if (user) {
            const match = await bcrypt.compare(password, user.password); // Compare hashed passwords
            if (match) {
                res.json({ success: true, message: "Login successful", user: { email: user.email, role: user.role } });
            } else {
                res.json({ success: false, message: "Wrong password" });
            }
        } else {
            res.json({ success: false, message: "No records found!" });
        }
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});

// Start Server
app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});
