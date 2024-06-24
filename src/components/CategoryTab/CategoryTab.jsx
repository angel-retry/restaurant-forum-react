import { Button, HStack, Select, Skeleton, Spinner } from '@chakra-ui/react'
import useCategoryStore from '../../store/categoryStore'
import useSearchKeyword from '../../store/searchKeyword'
import useGetCategories from '../../hooks/useGetCategories'
const CategoryTab = () => {
  const { categories, isLoading: isCategoryLoading } = useGetCategories()

  const { currentCategory, setCurrentCategory } = useCategoryStore()
  const setKeyword = useSearchKeyword(state => state.setKeyword)

  const handleClick = (categoryId) => {
    console.log(categoryId)
    setKeyword(null)
    setCurrentCategory(categoryId)
  }

  const handleChange = (e) => {
    const categoryId = e.target.value
    console.log(categoryId)
    setKeyword(null)
    setCurrentCategory(categoryId === 'all' ? null : categoryId)
  }

  return (
    <>
      <HStack justify={'center'} w={'100%'} display={{ base: 'none', md: 'flex' }}>
        {
          isCategoryLoading
            ? (
                Array.from({ length: 6 }, (_, i) => (
                  <Skeleton key={i} height='40px' width='100px' mr={'1rem'} />
                ))
              )
            : (
            <>
              <Button
              bg={'transparent'}
              _active={{ bg: 'teal', color: 'white' }}
              borderRadius={'full'}
              isActive={!currentCategory}
              onClick={() => {
                setKeyword(null)
                setCurrentCategory(null)
              } }
              >全部</Button>

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
            </>
              )
        }

      </HStack>

      {

        isCategoryLoading
          ? (
              <Skeleton display={{ base: 'flex', md: 'none' }}>
                <div>contents wrapped</div>
                <div>contents wrapped</div>
              </Skeleton>
            )
          : (
              <Select
                placeholder='餐廳種類'
                display={{ base: 'flex', md: 'none' }}
                onChange={handleChange}
                value={currentCategory || 'all'}
              >
                <option value='all' >全部</option>
                {
                  categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </Select>
            )
      }
    </>
  )
}

export default CategoryTab
