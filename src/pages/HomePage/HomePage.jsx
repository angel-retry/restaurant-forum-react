import { Button, HStack, Input, Stack } from '@chakra-ui/react'
import Restaurants from '../../components/Restaurants/Restaurants'
import CategoryTab from '../../components/CategoryTab/CategoryTab'
import Pagination from '../../components/Pagination/Pagination'

const HomePage = () => {
  return (
    <Stack px={3} spacing={5}>
      <HStack justify={'center'}>
        <Input placeholder='medium size' size='md' maxW={'600px'} />
        <Button size={'md'} colorScheme='blue'>Search</Button>
      </HStack>

      <CategoryTab />
      <Restaurants />
      <Pagination />
    </Stack>

  )
}

export default HomePage
