const express = require("express");
const { resume_mail } = require(".");

const app = express();

resume_mail(["hr@trickywebsolutions.com"]);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
