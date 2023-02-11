const { formModel } = require("../../model");

const formController = async (req, res) => {
  console.log(req.body);
  console.log("posted");
  console.log(res.body);
  if (!req?.body)
    return res.status(400).json({ messeage: "where is your email" });
  const form = new formModel({
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress,
    location: req.body.location,
    webSite: req.body.webSite,
  });
  form.save().then(() => console.log("form saved "));
  res.status(201).json({ messeage: "user created succesfully" });
};

module.exports = { formController };
