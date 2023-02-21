const { formModel } = require("../../model");

const formController = async (req, res) => {
  console.log("posted");
  if (!req.body.name)
    return res.status(400).json({
      messeage: "name is required ",
    });
    if (!req.body.emailAddress)
    return res.status(400).json({
      messeage: "email is required",
    });
  if (!req?.body)
    return res.status(400).json({ messeage: "where is your email" });
  const form = new formModel({
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress,
    location: req.body.location,
    webSite: req.body.webSite,
    colorTheme: req.body.colorTheme,
  });
  form.save().then(() => console.log("form saved "));
  res.status(201).json({ messeage: "user created succesfully" });
};

module.exports = { formController };
