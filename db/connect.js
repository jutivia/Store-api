const mongoose = require('mongoose')
const connectDB = async (url) => {
 return await mongoose.connect(url).then(()=> console.log("connected to db"))
}

module.exports = connectDB