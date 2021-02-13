const nodemailer = require('nodemailer');

module.exports = {
  inviteMentor(mentorEmailAddress) {
    // Port and host info found at:
    // https://developers.google.com/gmail/imap/imap-smtp#:~:text=Incoming%20connections%20to%20the%20IMAP,before%20issuing%20the%20STARTTLS%20command.
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'pacementormatch@gmail.com',
        pass: 'thisispacec',
      },
    });

    transporter.sendMail({
      from: '"MentorMatch Team" <pacementormatch@gmail.com>', // sender address
      to: mentorEmailAddress, // list of receivers
      subject: "You're invited to become a mentor", // Subject line
      text:
        'Hi, we would like to invite you to become a mentor on our platform, MentorMatch.com.\n\nYou can do so by filling this form:http://localhost:3000/mentor-form-embed.\n\nSincerely,\n\nThe MentorMatch team', // plain text body
      html:
        '<p>Hi, we would like to invite you to become a mentor on our platform, MentorMatch.com.<p/><p>You can do so by filling this form:http://localhost:3000/mentor-form-embed.<p/><p>Sincerely,<p/><p>The MentorMatch team<p/>', // plain text body
    });
  },
};
