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
    templete = data.map((name, index) => (
      <React.Fragment key={index}>is with {name}.</React.Fragment>
    ))
    return templete
  }

  if (length >= length - (length - 2) && length <= length - (length - 3)) {
    const _name = friends.at(length - 1)
    const filteredFriends = friends
      .filter((name, index) => length !== index + 1)
      .map((name, index) => {
        return (
          <React.Fragment key={index}>
            {name}
            {index + 2 !== length && <React.Fragment>&#44;</React.Fragment>}
            &nbsp;
          </React.Fragment>
        )
      })
    templete = (
      <React.Fragment>
        is with&nbsp;{filteredFriends}&nbsp;and&nbsp;{_name}.
      </React.Fragment>
    )

    return templete
  }

  const slicedFriends = friends.slice(0, 3).map((name, index) => {
    return (
      <React.Fragment key={index}>
        {name}
        {!(index >= 2) && <React.Fragment>&#44;</React.Fragment>}&nbsp;
      </React.Fragment>
    )
  })
  const _others = friends.filter((name, index) => index > 2)
  templete = friends.length !== 0 && (
    <React.Fragment>
      is with&nbsp;{slicedFriends}&nbsp;and&nbsp;{_others.length}&nbsp;others.
    </React.Fragment>
  ) 
  
  return templete
}

// SoftTag.propTypes = {}

export default SoftTag
