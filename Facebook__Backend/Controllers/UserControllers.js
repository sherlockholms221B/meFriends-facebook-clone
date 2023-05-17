const allUsers = (req, res) => {
  res.send('allUsers')
}

const authUser = (req, res) => {
  res.send('authUser')
}
const registerUser = (req, res) => {
  res.send('registerUser')
}

export { allUsers, authUser, registerUser }
