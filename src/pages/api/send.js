const handler = (req, res) => {
  let msg = {};

  const sgMail = require("@sendgrid/mail");

  sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー

  msg = {
    to: req.body.to,
    from: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  };

  (async () => {
    try {
      await sgMail.send(msg);
      res.status(200).json(msg);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();

  res.status(200);
};

// eslint-disable-next-line import/no-default-export
export default handler;
