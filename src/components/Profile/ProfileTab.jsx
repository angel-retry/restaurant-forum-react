import { Tabs, TabList, Tab, TabIndicator, HStack, Text, Box } from '@chakra-ui/react'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { FiGrid } from 'react-icons/fi'
import { GoBookmark } from 'react-icons/go'

const ProfileTab = () => {
  return (
    <Tabs position='relative' variant='unstyled' borderBottom={'1px solid'} borderColor={'gray.300'} align='center' mt={10} >
      <TabList color={'gray.400'} >
        <Tab _selected={{ color: 'blue.500' }}>
          <HStack>
            <Box display={{ base: 'flex', md: 'none' }}>
              <FiGrid size={25}/>
            </Box>
            <Text display={{ base: 'none', md: 'flex' }}>分享的餐廳</Text>
          </HStack>
        </Tab>
        <Tab _selected={{ color: 'blue.500' }}>
          <HStack>
            <Box display={{ base: 'flex', md: 'none' }}>
              <FaRegHeart size={25} />
            </Box>
            <Text display={{ base: 'none', md: 'flex' }}>喜歡的餐廳</Text>
          </HStack>
        </Tab>
        <Tab _selected={{ color: 'blue.500' }}>
          <HStack>
            <Box display={{ base: 'flex', md: 'none' }}>
              <GoBookmark size={25} />
            </Box>
            <Text display={{ base: 'none', md: 'flex' }}>收藏的餐廳</Text>
          </HStack>
        </Tab>
        <Tab _selected={{ color: 'blue.500' }}>
          <HStack>
            <Box display={{ base: 'flex', md: 'none' }}>
              <FaRegCommentDots size={25}/>
            </Box>
            <Text display={{ base: 'none', md: 'flex' }}>留言過的餐廳</Text>
          </HStack>
        </Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
      </Tabs>
  )
}

export default ProfileTab
