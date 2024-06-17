import { HStack, Input, Button } from '@chakra-ui/react'
import { useRef } from 'react'
import useShowToast from '../../hooks/useShowToast'

const SearchRestaurant = ({ setSearchRestaurants, setKeyword }) => {
  const searchRef = useRef(null)
  const showToast = useShowToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setSearchRestaurants(null)
    try {
      const keyword = searchRef.current.value

      if (!keyword) {
        showToast('Error', '請填入關鍵字!', 'error')
      } else {
        setKeyword(keyword)
      }
      console.log(keyword)
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <form action="" style={{ width: '100%' }} onSubmit={handleSubmit}>
    <HStack justify={'center'} >
    <Input placeholder='medium size' size='md' maxW={'600px'} ref={searchRef} />
    <Button size={'md'} colorScheme='blue' type='submit'>Search</Button>
    </HStack>
  </form>

  )
}

export default SearchRestaurant
