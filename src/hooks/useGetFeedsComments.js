import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import useAuthTokenStore from '../store/authTokenStore'
import axios from 'axios'

const useGetFeedsComments = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedsComments, setFeedsComments] = useState(false)
  const authToken = useAuthTokenStore(state => state.authToken)

  const URL = `${baseURL}/comments/feeds`

  useEffect(() => {
    const getFeedsComments = () => {
      setIsLoading(true)
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { feedsComments } = res.data
          setFeedsComments(feedsComments)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken) getFeedsComments()
  }, [authToken])

  return { isLoading, feedsComments }
}

export default useGetFeedsComments
