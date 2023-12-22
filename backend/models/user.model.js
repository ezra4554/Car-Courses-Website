import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tgl_lahir: {
      type: Date,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Customer", "Mentor"],
      default: "Customer",
    },
    credit: {
      type: Number,
      default: "0",
    },
    keterangan: {
      type: String,
      default: "Aktif",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
