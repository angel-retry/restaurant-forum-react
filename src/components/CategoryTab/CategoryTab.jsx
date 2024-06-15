import { Select, Tab, TabList, Tabs } from '@chakra-ui/react'
import { wrap } from 'framer-motion'

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
          <Tab fontSize={{ md: 'xs', lg: 'md' }}>其他</Tab>
        </TabList>
      </Tabs>

      <Select placeholder='餐廳種類' display={{ base: 'flex', md: 'none' }}>
        <option >全部</option>
        {
          categories.map(category => (
              <option key={category.id} >{category.name}</option>
          ))
        }
        <option >其他</option>
      </Select>

    </>
  )
}

export default CategoryTab
