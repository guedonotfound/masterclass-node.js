const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@guedo.pcvepjv.mongodb.net/database?retryWrites=true&w=majority&appName=Guedo`
    );
    console.log("Conexão ao BD realizada com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar no BD: ", error);
  }
};

module.exports = connectToDatabase;
