import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

const useShowToast = () => {
  const toast = useToast()

  const showToast = useCallback((title, message, status) => {
    toast({
      title,
      description: message,
      status,
      duration: 3000,
      isClosable: true
    })
  }, [toast])

  return showToast
}

export default useShowToast
