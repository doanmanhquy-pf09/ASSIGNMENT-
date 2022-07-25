var mongoose = require("mongoose");

module.exports = {
  async connect() {
    try {
      await mongoose.connect(
        "mongodb+srv://123456:quy24112001@mern-learnit.ui1mq.mongodb.net/test"
      );
      console.log("Kết nối thành công!");
    } catch (error) {
      console.log("Kết nối không thành công!");
      process.exit();
    }
  },
};
