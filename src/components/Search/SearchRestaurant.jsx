import { HStack, Input, Button } from '@chakra-ui/react'
import { useRef } from 'react'

const SearchRestaurant = () => {
  const searchRef = useRef(null)

  return (
  <form action="" style={{ width: '100%' }}>
    <HStack justify={'center'} >
    <Input placeholder='medium size' size='md' maxW={'600px'} ref={searchRef} />
    <Button size={'md'} colorScheme='blue'>Search</Button>
    </HStack>
  </form>

  )
}

export default SearchRestaurant
