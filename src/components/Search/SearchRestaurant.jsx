import { HStack, Input, Button } from '@chakra-ui/react'
import { useRef } from 'react'
import useSearchKeyword from '../../store/searchKeyword'
import useCategoryStore from '../../store/categoryStore'

const SearchRestaurant = () => {
  const setKeyword = useSearchKeyword(state => state.setKeyword)
  const setCurrentCategory = useCategoryStore(state => state.setCurrentCategory)
  const searchRef = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setCurrentCategory(null)
    setKeyword(searchRef.current.value)
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
