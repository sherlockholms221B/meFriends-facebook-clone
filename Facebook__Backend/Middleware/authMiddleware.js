const jwt = require('jsonwebtoken');
//
const asyncHandler = require('express-async-handler');
//
const { log } = require('console');
// const  { signInUser } from '../Queris/querries'

const protect = asyncHandler(async (req, res, next) => {
  let token;
  log(req.headers.authorization);
  if (
    req.headers.authorization
    // req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      log('passed authorization');
      token = req.headers.authorization.split(' ')[1];
      log(token);
      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // const query = signInUser(decoded.id)

      const user = await client.fetch(query);

      req.user = user[0];

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

module.exports = protect;
