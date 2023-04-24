import { client } from '../../utils/client'

export function share() {
  if (navigator.onLine) {
    console.log(navigator.onLine)
  }
}

export function post(data) {
  const {
    topic,
    audience,
    // file: { image },
    _creatorId,
    taged,
  } = data
  let image = [1, 2, 3, 4, 5]
  const document = {
    _type: 'post',
    audience,
    topic,
    image: [
      image.map((image) => {
        return {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: image._id,
          },
        }
      }),
    ],
    userId: _creatorId,
    postedBy: {
      _type: 'postedBy',
      _ref: _creatorId,
    },
  }
  console.log(document)
  // client.create(document).then((response) => {
  //   console.log(response)
  // })
}
