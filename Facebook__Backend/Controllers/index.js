/* route configuration for mefriend client end. You can add more action controller here. 
 Edit this file if you know what you are doing */

export const getPostRoute = async (req, res) => {
  try {
    const { _id } = req.query
    console.log(_id)

    res.status(200).json('post')
  } catch (error) {
    console.log(error)
  }
}

export const makePostRoute = async (req, res) => {
  try {
    res.send('MakePostRoute')
  } catch (error) {
    console.log(error)
  }
}

export const likePostRoute = async (req, res) => {
  try {
    res.send('LikePostRoute')
  } catch (error) {
    console.log(error)
  }
}

export const makeComentRoute = async (req, res) => {
  try {
    res.send('MakeComentRoute')
  } catch (error) {
    console.log(error)
  }
}

export const deletePostRoute = async (req, res) => {
  try {
    res.send('DeletePostRoute')
  } catch (error) {
    console.log(error)
  }
}

//shoping route controllers
export const getProduct = async (req, res) => {
  try {
    res.send('get product ')
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (req, res) => {
  try {
    console.log(req.body)
    res.status(200).send({ data })
  } catch (error) {
    console.log(error)
  }
}
