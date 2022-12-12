const Schemas = require("../models/Schemas");

const saveDetails = (app) => {

  app.post("/save_details", async (req, res) => {

    let {   FirstName, firstname, date, Leader, members } =
      req.body;

    try {

      let post = new Schemas({

         FirstName,firstname, date, Leader, members
      });
      const postSaved = await post.save();

      res.send({ message: "succesfully saved", postSaved });

    } catch (error) {

      console.error("post error", error);

      res.send({ message: "post error" }).status(405);
    }
  });

  app.get("/getDetails", async (req, res) => {
    try {
      const findDetails = await Schemas.find();

      res.send(findDetails);

    } catch (error) {

      console.log("error", error);
    }
  });
};

module.exports = { saveDetails};