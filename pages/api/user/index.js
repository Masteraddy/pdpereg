import dbConnect from "../../../libs/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const users = await User.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        let newUser = req.body;
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(req.body.password, salt);
        newUser.usertype = "agent";
        const user = await User.create(newUser); /* create a new model in the database */
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
