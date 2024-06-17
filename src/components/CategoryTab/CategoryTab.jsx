import { Button, HStack, Select } from '@chakra-ui/react'
import useCategoryStore from '../../store/categoryStore'
import useSearchKeyword from '../../store/searchKeyword'
const CategoryTab = ({ categories }) => {
  const { currentCategory, setCurrentCategory } = useCategoryStore()
  const setKeyword = useSearchKeyword(state => state.setKeyword)

  const handleClick = (categoryId) => {
    console.log(categoryId)
    setKeyword(null)
    setCurrentCategory(categoryId)
  }

  const handleChange = (categoryId) => {
    console.log(categoryId)
    setKeyword(null)
    setCurrentCategory(categoryId)
  }

  return (
    <>
      <HStack justify={'center'} w={'100%'} display={{ base: 'none', md: 'flex' }}>
        <Button bg={'transparent'} _active={{ bg: 'teal', color: 'white' }} borderRadius={'full'} isActive={!currentCategory} onClick={() => setCurrentCategory(null) }>全部</Button>
        {
          categories.map(category => (
            <Button
              key={category.id}
              bg={'transparent'}
              _active={{ bg: 'teal', color: 'white' }} borderRadius={'full'}
              onClick={() => handleClick(category.id) }
              isActive={currentCategory === category.id}
            >{category.name}</Button>
          ))
        }
      </HStack>

      <Select
        placeholder='餐廳種類'
        display={{ base: 'flex', md: 'none' }}
        onChange={e => handleChange(e.target.value)}
        value={currentCategory || null}
      >
        <option value={null} >全部</option>
        {
          categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
          ))
        }
      </Select>

    </>
  )
}

export default CategoryTab
