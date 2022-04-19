'use strict';
const fs = require('fs');
const { promisify } = require('util');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');

const readFile = promisify(fs.readFile);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

const sendMailTemplate = async (from, to, subject, type, data) => {
    let html = type;
    if (type.endsWith('.html')) html = await readFile(`${__dirname}/${type}`, 'utf8');

    if (data) {
        const template = handlebars.compile(html);
        html = template(data);
    }

    return transporter.sendMail({ from, to, subject, html }).catch(err => {
        console.error(err);
        return false;
    });
};

module.exports = { sendMailTemplate };
