var mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://quy123:quy123@dbmanager.jheap.mongodb.net/test"
    );
    console.log("Kết nối thành công!");
  } catch (error) {
    console.log("Kết nối không thành công!");
  }
}
connect();