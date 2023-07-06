//Don't edit this file if you dont know what you are doing.
//import sanity client.
const  client = require( '../Clients/client')
// const  protect = require( '../Middleware/authMiddleware')
const  bcrypt = require( 'bcryptjs')

//FETCH ALL USER.
const allUsers = (req, res) => {
  const { USER_DATA } = req.body;
  try {
    if (USER_DATA) {
      const allUsers = client.fetch(`*[_type=="user"]`);

      //
      res.status(200).json({
        data: allUsers,
      });
    }
  } catch (err) {
    const message = new Error(`serrver error:${err.message}`);
    res.status(404).json({
      data: message,
    });
  }
};

//LOGIN USER.
const loginUser = (req, res) => {
  //
  const { USER_DATA } = req.body;

  try {
    const createdUser = client.fetch(
      `*[_type =="user" && email=="${USER_DATA.EMAIL}" && password =="${USER_DATA.PASSWORD}"}]`
    );

    //FIRST CHECK
    if (createdUser[0] || createdUser.length === typeof Boolean(0)) {
      res.status(402).json({
        message: `Invalid credentails.No user with id:${USER_DATA.EMAIL} found!`,
      });
      return;
    }
    if (createdUser[0] || createdUser.length === typeof Boolean(1)) {
      const foundUser = client.fetch(
        `*[_type =="user" && email=="${USER_DATA.EMAIL}" && password =="${USER_DATA.PASSWORD}"}]`
      );

      res.status(200).json({
        message: 'User created sucessfully',
        data: newUser,
      });
    }
  } catch (err) {
    const message = new Error(`Server error: ${err.message}`);
    console.log(message);
    res.status(404).json({
      data: message,
    });
  }
};

//CREATE NEW USER ACCOUNT
const registerUser = (req, res) => {
  const { USER_DATA } = req.body;
  console.log(USER_DATA);

  try {
    //FETCH USER DATA
    const userAlreadyExist = client.fetch(
      `*[_type=="user" && email=="${USER_DATA.EMAIL}" || _id =="${USER_DATA._ID}" ]{
        ...
      }`
    );

    //FIRST CHECK
    if (userAlreadyExist[0] || userAlreadyExist.length) {
      res.status(402).json({
        message: 'User already exists. Try creating a new account or login',
      });
      return;
    }
    //SECOND CHECK
    if (!userAlreadyExist.length || !userAlreadyExist[0]) {
      //create new account
      const userPassword = bcrypt.hashSync('token', USER_DATA._PASSWORD); //hasing the password

      const newUser = client.createIfNotExists({
        _type: 'user',
        _id: USER_DATA._ID,
        name: USER_DATA.NAME,
        email: USER_DATA.EMAIL,
        password: USER_DATA.PASSWORD,
      });

      res.status(200).json({
        message: 'User created sucessfully',
        data: newUser,
      });
    }
  } catch (err) {
    const message = new Error(`user encounterd ${err.message}`);
    console.log(message);
    res.status(404).json({ data: message });
  }
};

export { allUsers, loginUser, registerUser };
