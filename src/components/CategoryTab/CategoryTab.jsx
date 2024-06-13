import { Select, Tab, TabList, Tabs } from '@chakra-ui/react'

const CategoryTab = () => {
  return (
    <>
      <Tabs variant='solid-rounded' alignSelf={'center'} colorScheme={'teal'} display={{ base: 'none', md: 'flex' }}>
        <TabList gap={5}>
          <Tab >Tab 1</Tab>
          <Tab >Tab 2</Tab>
          <Tab >Tab 1</Tab>
          <Tab >Tab 2</Tab>
          <Tab >Tab 1</Tab>
          <Tab >Tab 2</Tab>
        </TabList>
      </Tabs>

      <Select placeholder='餐廳種類' display={{ base: 'flex', md: 'none' }}>
        <option >Option 1</option>
        <option >Option 2</option>
        <option >Option 3</option>
      </Select>

    </>
  )
}

export default CategoryTab
