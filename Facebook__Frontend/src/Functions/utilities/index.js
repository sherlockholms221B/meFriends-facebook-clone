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
    file: { postfile },
    _creatorId,
    taged,
    dispatchCall,
  } = data
  const template = postfile.map((postfile) => {
    console.log(postfile)
    let template
    template = {
      _key: postfile.assetId.concat(postfile.sha1hash),
      extension: postfile.extension,
      filename: postfile.filename,
      file: {
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref: postfile?._id,
          _key: postfile.assetId.concat(postfile.sha1hash),
        },
      },
    }
    return { ...template }
  })

  const document = {
    _type: 'post',
    audience,
    topic,
    postfile: template,
    creatorId: _creatorId,
    postedBy: {
      _type: 'postedBy',
      _ref: _creatorId,
    },
  }
  console.log(document)
  client.create(document).then((response) => {
    dispatchCall({ type: GET_SINGLE_POST, payload: response })
  })
}
