import mongoose from "mongoose";

/* Schema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  usertype: {
    type: String,
    enum: ["agent", "callcenter", "superadmin"],
    default: "agent",
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
  },
  surname: {
    type: String,
  },
  middlename: {
    type: String,
  },
  state: {
    type: String,
  },
  localgovt: {
    type: String,
  },
  ward: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
