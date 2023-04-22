import * as React from 'react'
// import PropTypes from 'prop-types'

const SoftTag = ({ data }) => {
  const length = data.length
  const [friends, setFriends] = React.useState([])

  React.useEffect(() => {
    setFriends(data)
  }, [data])

  let templete
  if (length === length - (length - 1)) {
    templete = data.map((name, index) => <p className=''> is with {name}.</p>)
    return templete
  }

  if (length >= length - (length - 2) && length <= length - (length - 3)) {
    const _name = friends.at(length - 1)
    const filteredFriends = friends
      .filter((name, index) => length !== index + 1)
      .map((name, index) => {
        return (
          <React.Fragment>
            {name}
            {index + 2 !== length && ','}{' '}
          </React.Fragment>
        )
      })
    templete = (
      <React.Fragment>
        is with {filteredFriends} and {_name}.
      </React.Fragment>
    )

    return templete
  }

  const slicedFriends = friends.slice(0, 3).map((name, index) => {
    return (
      <React.Fragment>
        {name}
        {!(index >= 2) && ','}{' '}
      </React.Fragment>
    )
  })
  const _others = friends.filter((name, index) => index > 2)
  templete = (
    <React.Fragment>
      is with {slicedFriends} and {_others.length} others.
    </React.Fragment>
  )
  return templete
}

// SoftTag.propTypes = {}

export default SoftTag
