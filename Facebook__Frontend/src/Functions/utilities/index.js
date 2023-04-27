import { client } from '../../utils/client'
import { GET_SINGLE_POST } from '../type'

export function share() {
  if (navigator.onLine) {
    console.log(navigator.onLine)
  }
}

export function post(data) {
  const {
    topic,
    audience,
    file: { image },
    _creatorId,
    taged,
    dispatchCall,
  } = data
  const template = image.map((image) => {
    let template = {
      _type: 'image',
      _key: image.assetId.concat(image.sha1hash),
      asset: {
        _type: 'reference',
        _ref: image?._id,
      },
    }
    return { ...template }
  })

  const document = {
    _type: 'post',
    audience,
    topic,
    image: template,
    userId: _creatorId,
    postedBy: {
      _type: 'postedBy',
      _ref: _creatorId,
    },
  }
  client.create(document).then((response) => {
    dispatchCall({ type: GET_SINGLE_POST, payload: response })
  })
}
