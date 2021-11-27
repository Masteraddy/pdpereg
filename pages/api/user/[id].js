import dbConnect from "../../../libs/dbConnect";
import User from "../../../models/User";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();
  // console.log(req.body, id);
  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT" /* Edit a model by its ID */:
      console.log(req.body, id);
      try {
        const user = await User.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedUser = await User.deleteOne({ _id: id });
        if (!deletedUser) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      // const user = users.find((val) => val.id === req.query.id);
      res.status(404).json({ success: false });
      break;
  }
};

export default handler;
