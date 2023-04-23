// Routes configuration controllers
//import data from data.json
import data from "../data.js";

//import sanity client from sanityclient
// import client from "../Clients/index.js";

//socials controllers
const getPostRoute = (req, res) => {
  res.send("get post ");
  const user = {};
};

const makePostRoute = (req, res) => {
  res.send("MakePostRoute");
};

const likePostRoute = (req, res) => {
  res.send("LikePostRoute");
};

const makeComentRoute = (req, res) => {
  res.send("MakeComentRoute");
};

const deletePostRoute = (req, res) => {
  res.send("DeletePostRoute");
};

//shoping route controllers
const getProduct = (req, res) => {
  res.send("get product ");
};

const createProduct = (req, res) => {
  console.log(req.body);
  res.status(200).send({ data });
};

export {
  getPostRoute,
  makeComentRoute,
  likePostRoute,
  deletePostRoute,
  makePostRoute,
  getProduct,
  createProduct,
};
