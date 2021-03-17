const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Port and host info found at:
// https://developers.google.com/gmail/imap/imap-smtp#:~:text=Incoming%20connections%20to%20the%20IMAP,before%20issuing%20the%20STARTTLS%20command.
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'pacementormatch@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Adapted from https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
function getRegularCase(camelCaseString) {
  return camelCaseString.replace(/([A-Z])/g, ' $1');
}

function getSkillsList(skills) {
  return skills.map((skill) => getRegularCase(skill).toLowerCase()).join(' ');
}

module.exports = {
  inviteMentor(mentorEmailAddress, organization) {
    transporter.sendMail({
      from: '"MentorMatch Team" <pacementormatch@gmail.com>', // sender address
      to: mentorEmailAddress, // list of receivers
      subject: "You're invited to become a mentor", // Subject line
      text: `Hi, we would like to invite you to become a mentor on our platform, MentorMatch.com.\n\nYou can do so by filling this form: ${encodeURI(
        'http://localhost:3000/mentor-form?organization=' + organization,
      )}.\n\nSincerely,\n\nThe MentorMatch team`, // plain text body
      html: `<p>Hi, we would like to invite you to become a mentor on our platform, MentorMatch.com.<p/><p>You can do so by filling this form: ${encodeURI(
        'http://localhost:3000/mentor-form?organization=' + organization,
      )}.<p/><p>Sincerely,<p/><p>The MentorMatch team<p/>`, // plain text body
    });
  },

  acceptMentee(menteeEmailAddress, parameters) {
    transporter.sendMail({
      from: '"MentorMatch Team" <pacementormatch@gmail.com>',
      to: menteeEmailAddress,
      subject: 'A mentor accepted your mentorship request!',
      text: `Hi ${
        parameters.menteeName
      }, \n\nWe would like to let you know that ${
        parameters.mentorName
      } has accepted your mentorship request.\n\nHere is some more information about ${
        parameters.mentorName
      }:\n\nHe or she left the following description about themselves for you to read:\n\n${
        parameters.mentorDescription
      }\n\nTheir email address is ${
        parameters.mentorEmail
      }. You can view this mentor's availability on the following calendar: ${
        parameters.mentorAvailability
      }. Contact them to get help with the following skills: ${getSkillsList(
        parameters.skills,
      )}.\n\nSincerely,\n\nthe MentorMatch team`,

      html: `Hi ${
        parameters.menteeName
      }, <br/><br/>We would like to let you know that ${
        parameters.mentorName
      } has accepted your mentorship request.<br/><br/>Here is some more information about ${
        parameters.mentorName
      }:<br/><br/>He or she left the following description about themselves for you to read:<br/><br/>${
        parameters.mentorDescription
      }<br/><br/>Their email address is ${
        parameters.mentorEmail
      }. You can view this mentor's availability on the following calendar: ${
        parameters.mentorAvailability
      }. Contact them to get help with the following skills: ${getSkillsList(
        parameters.skills,
      )}.<br/><br/>Sincerely,<br/><br/>the MentorMatch team`,
    });
  },

  welcomeMentee(menteeEmailAddress, menteeName) {
    transporter.sendMail({
      from: '"MentorMatch Team" <pacementormatch@gmail.com>',
      to: menteeEmailAddress,
      subject: 'Welcome to MentorMatch!',
      text: `Hi ${menteeName}, \n\nThanks for signing up on MentorMatch! We are matching you with mentors who can teach you the skills you want to learn, and you'll receive an email as soon as one of them confirms they want to mentor you!\n\nSincerely,\n\nThe MentorMatch team`,
      html: `Hi ${menteeName}, <br/><br/>Thanks for signing up on MentorMatch! We are matching you with mentors who can teach you the skills you want to learn, and you'll receive an email as soon as one of them confirms they want to mentor you!<br/><br/>Sincerely,<br/><br/>The MentorMatch team`,
    });
  },
};
