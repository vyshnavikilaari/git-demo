const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://vyshu16:vishnu23@in-aws.8kl2j.mongodb.net/Maxstore?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')