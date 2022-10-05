const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  //   require: true,
  // },
  // cloudinaryId: {
  //   type: String,
  //   require: true,
  // },
  // caption: {
  //   type: String,
  //   // required: true,
  // },
  // likes: {
  //   type: Number,
  //   // required: true,
  // },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  companySchool:{
    type: String,
    default: ""
  },
  desc:{
    type: String,
    default: "",
  },
  location:{
    type: String,
    default: ""
  },
  facebook:{
    type: String,
    default: ""
  },
  instagram:{
    type: String,
    default: ""
  },
  twitter:{
    type: String,
    default: ""
  },
  linkedIn:{
    type: String,
    default: ""
  },
  favorites: {
    type: Array,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
