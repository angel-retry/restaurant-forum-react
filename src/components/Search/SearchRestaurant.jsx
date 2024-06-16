import { HStack, Input, Button } from '@chakra-ui/react'

const SearchRestaurant = () => {
  return (
    <HStack justify={'center'}>
        <Input placeholder='medium size' size='md' maxW={'600px'} />
        <Button size={'md'} colorScheme='blue'>Search</Button>
      </HStack>
  )
}

export default SearchRestaurant
