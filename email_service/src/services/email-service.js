const transporter = require("../config/emailconfig");

class emailService {
  async sendMail(from, to, subject, text) {
    const info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
    });
    return info;
  }
}

module.exports = emailService;
