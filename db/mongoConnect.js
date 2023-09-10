const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://nGil:1029384756@cluster0.koq5qha.mongodb.net/idf9"
  );
  // await mongoose.connect('mongodb+srv://koko9:MONKE@cluster0.jfgkq.mongodb.net/idf9');
  console.log("mongo connect idf9 atlas");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
