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

export const kMeans = (data, k = 1) => {
  const centroids = data.slice(0, k)
  const distances = Array.from({ length: data.length }, () =>
    Array.from({ length: k }, () => 0)
  )
  const classes = Array.from({ length: data.length }, () => -1)
  let itr = true

  while (itr) {
    itr = false

    for (let d in data) {
      for (let c = 0; c < k; c++) {
        distances[d][c] = Math.hypot(
          ...Object.keys(data[0]).map((key) => data[d][key] - centroids[c][key])
        )
      }
      const m = distances[d].indexOf(Math.min(...distances[d]))
      if (classes[d] !== m) itr = true
      classes[d] = m
    }

    for (let c = 0; c < k; c++) {
      centroids[c] = Array.from({ length: data[0].length }, () => 0)
      const size = data.reduce((acc, _, d) => {
        if (classes[d] === c) {
          acc++
          for (let i in data[0]) centroids[c][i] += data[d][i]
        }
        return acc
      }, 0)
      for (let i in data[0]) {
        centroids[c][i] = parseFloat(Number(centroids[c][i] / size).toFixed(2))
      }
    }
  }

  return classes
}