import { Select, Tab, TabList, Tabs } from '@chakra-ui/react'
const CategoryTab = ({ categories }) => {
  return (
    <>
      <Tabs variant='solid-rounded' alignSelf={'center'} colorScheme={'teal'} display={{ base: 'none', md: 'flex' }}>
        <TabList >
          <Tab fontSize={{ md: 'xs', lg: 'md' }}>全部</Tab>
          {
            categories.map(category => (
              <Tab key={category.id} fontSize={{ md: 'xs', lg: 'md' }} >{category.name}</Tab>
            ))
          }
        </TabList>
      </Tabs>

      <Select placeholder='餐廳種類' display={{ base: 'flex', md: 'none' }}>
        <option >全部</option>
        {
          categories.map(category => (
              <option key={category.id} >{category.name}</option>
          ))
        }
      </Select>

    </>
  )
}

export default CategoryTab
