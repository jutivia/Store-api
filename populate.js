require('dotenv').config();
const connectDB = require('./db/connect')
const Product = require('./models/product')
const products = require('./products.json')


connectDB(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.create(products);
    process.exit(0);
  })
  .catch((err) => process.exit(1));