const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const frontendDirectory = path.join(__dirname, "../../frontend");

app.get("/api/profile", (request, response) => {
  response.json({
    name: "lee helonx",
    bio: "IT 技术支持人员，也在学习软件开发。"
  });
});

app.use(express.static(frontendDirectory));

app.listen(port, () => {
  console.log(`网站已启动：http://localhost:${port}`);
});
