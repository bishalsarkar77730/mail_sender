const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "bishalsarkar.ml@gmail.com",
    pass: "jfwj amrk hsgm nuyq",
  },
});

async function sendMail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: "Bishal Sarkar",
      to,
      subject,
      html,
      attachments: [
        {
          filename: "BishalSarkar.pdf",
          path: __dirname + "/BishalSarkar.pdf",
        },
      ],
    });

    console.log("Email sent: ", info.response);
    return info.response;
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
}

function resume_mail(mails) {
  let counter = 0;
  const intervalId = setInterval(() => {
    sendMail(
      mails[counter],
      "Looking for job opportunity for the Full Developer",
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Application for Full Stack Developer Position</title>
      <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
        }

        p {
            margin-bottom: 10px;
        }

        .details {
            margin-bottom: 20px;
        }

        .details p {
            margin: 5px 0;
        }

        .signature {
            font-weight: bold;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 0;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
        }

        .image-container {
            text-align: center;
            margin-bottom: 20px;
        }

      </style>
      </head>
      <body>
        <div class="container">
            <h1>Application for Full-Stack Developer Position</h1>
            <p>Dear Sir/Ma'am,</p>
            <p>Warm greetings!</p>
            <p>I am eager to apply for the Full Stack Developer position in your company I have Total <b>2 years of experience as a MERN stack developer</b>. Please find my resume attached for your review. If you require any further information or have any questions, please feel free to reach out to me.</p>
            <h3>My key skills are :- </h3>
            <p><b>Language :- Javascript, python</b></p>
            <p><b>framework :- Reactjs, Nextjs, Nodejs, expressjs</b></p>
            <p><b>Css framework :- Bootstrap, Tailwind, ANTD</b></p>
            <p><b>Database :- MongoDB, MySql, MsSql</b></p>
            <p><b>Softwares :- Zoho, Github, jira</b></p>
            <div class="details">
                <h3><strong>Personal Details:</strong></h3>
                <p>Name: Bishal Sarkar</p>
                <p>Email: bishalsarkar.ml@gmail.com</p>
                <p>Phone: +91-7773015690</p>
            </div>
            <p>Thank you sincerely for considering my application. I am looking forward to the opportunity to contribute to your team.</p>
            <p class="signature">Best regards,<br>Bishal Sarkar</p>
            
            <!-- Image and Button Section -->
            <a href="mailto:bishalsarkar.ml@gmail.com" class="button" style="color: white; text-decoration: none; background-color: blue; padding: 10px; border-radius: 5px;">Email Me</a>
<a href="https://bishalsarkar.co.in/" target="_blank" class="button" style="color: white; text-decoration: none; background-color: blue; padding: 10px; border-radius: 5px;">Portfolio</a>
        </div>
      </body>
      </html>
      `
    ).then((val) => {
      console.log(val, "val");
    });
    counter++;

    if (counter >= mails.length) {
      clearInterval(intervalId);
      console.log("Interval cleared due to condition fulfillment.");
    }
  }, 1000);
}
module.exports = { sendMail, resume_mail };
