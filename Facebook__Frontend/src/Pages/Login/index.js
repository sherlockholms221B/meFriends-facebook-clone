import { v4 as uuidv4 } from 'uuid'
import { signInUser } from '../../utils/querries'
import { client } from '../../utils/client'

export const createUser = async (
  { information },
  profile,
  backgroundImage,
  addUser,
  navigate
) => {
  const {
    firstName,
    lastName,
    email,
    password,
    newPassword,
    country,
    state,
    city,
    age,
    birthDate,
    zip,
    gender,
  } = information
  const user = {
    _id: uuidv4(),
    _type: 'user',
    userName: `${firstName} ${lastName}`,
    email: email,
    password: password,
    country: country,
    state: state,
    city: city,
    zipCode: zip,
    age: Number(age),
    birthDate: birthDate,
    gender: gender,

    profileImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: profile?._id,
      },
    },
    coverImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: backgroundImage?._id,
      },
    },
  }

  if (password !== newPassword) {
    return {
      data: [],
      msg: 'Your password mismatched! Please try again',
    }
  }

  if (!firstName || !email || !password || !lastName) {
    return {
      data: [],
      msg: 'Invalid details. Please try again.',
    }
  }

  const query = signInUser(email)
  const userAlreadyExist = await client.fetch(query)

  if (userAlreadyExist.length) {
    return {
      data: [],
      msg: 'user already exists',
    }
  }

  const data = await client.createIfNotExists(user)
  addUser(data)
  localStorage.setItem('user', data)
  navigate('/')
  return { data: data, msg: 'user created' }
}

export const GetUser = async ({ email, password }, addUser, navigate) => {
  if (!email || !password) {
    return {
      data: [],
      msg: ' Invalid email or password',
    }
  }
  const query = signInUser(email, password)

  const data = await client.fetch(query)

  if (data.length === 0) {
    return {
      data: [],
      msg: 'user not found',
    }
  }

  addUser(data[0])
  navigate('/')
  return { data: data, msg: 'user successfully found' }
}

export const upload = async (
  selectedFile,
  setImageAsset,
  setIsloading,
  setWrongeFileType
) => {
  const fileTypes = [
    'image/png',
    'image/jpeg',
    'image/svg',
    'image/gif',
    'image/tiff',
  ]
  if (!fileTypes.includes(selectedFile.type)) {
    // setIsloading(false)
    return {
      mag: 'upload failed',
    }
  }

  // setIsloading(true)
  const data = await client.assets.upload('image', selectedFile, {
    contentType: selectedFile.type,
    filename: selectedFile.name,
  })

  // setImageAsset(data)
  // setIsloading(false)
  return {
    data: data,
    msg: 'upload successful',
  }
}
