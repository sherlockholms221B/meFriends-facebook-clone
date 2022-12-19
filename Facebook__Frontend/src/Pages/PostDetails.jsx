import React from 'react'
import { useGlobalContext } from '../Context/UseContext'

const PostDetails = () => {
  const { isLoading, setIsLoading, location } = useGlobalContext()

  return (
    <div
      style={{ paddingTop: `${location.height}px` }}
      className=' dark:bg-darkPrimary relative overflow-hidden h-[100vh] w-[100vw] black bg-primary'
    >
      {' '}
      PostDetails
    </div>
  )
}

export default PostDetails
