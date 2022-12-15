export const allPostsQuery = () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _createdAt,
    _id,
     topic,
       video{
        asset->{
          _id,
          url
        }
      },
      image,
      userId,
      postedBy->{
        _id,
        userName,
        profileImage,
        coverImage        
      },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      profile,
    },
    }
  }`

  return query
}

export const postDetailQuery = (postId) => {
  const query = `*[_type == "post" && _id == '${postId}']{
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      profile,
      banner
    },
     likes,
    comments[]{
      comment,
      _key,
      postedBy->{
        _ref,
      _id,
      profile,
      banner
    },
    }
  }`
  return query
}

export const searchPostsQuery = (searchTerm) => {
  const query = `*[_type == "post" && caption match '${searchTerm}*' || topic match '${searchTerm}*'] {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      profile,
    },
likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      profile,
    },
    }
  }`
  return query
}
export const signInUser = (email) => {
  const query = `*[_type =="user" && email=='${email}' ]`

  return query
}
export const singleUserQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`

  return query
}

export const allUsersQuery = () => {
  const query = `*[_type == "user"]`

  return query
}

export const userCreatedPostsQuery = (userId) => {
  const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      profile,
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      profile,
      banner
    },
    }
  }`

  return query
}

export const userLikedPostsQuery = (userId) => {
  const query = `*[_type == 'post' && '${userId}' in likes[]._ref ] | order(_createdAt desc) {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      profile,
      banners
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      profile,
    },
    }
  }`

  return query
}

export const topicPostsQuery = (topic) => {
  const query = `*[_type == "post" && topic match '${topic}*'] {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      profile,
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      profile,
    },
    }
  }`

  return query
}
