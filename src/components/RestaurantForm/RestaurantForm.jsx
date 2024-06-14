import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { FaImage } from 'react-icons/fa'

const RestaurantForm = ({ restaurantId }) => {
  return (
    <>
      <Heading fontSize={{ base: '2xl', md: '3xl' }}>
       { restaurantId ? '編輯餐廳' : '建立餐廳'}
      </Heading>
      <FormControl id="email" display={'flex'} alignItems={'center'}>
        <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }} >餐廳名字</FormLabel>
        <Input flex={2} type="text" fontSize={{ base: 'md', md: 'lg' }} />
      </FormControl>

      <FormControl id="email" display={'flex'} alignItems={'center'}>
        <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }} >餐廳電話</FormLabel>
        <Input flex={2} type="tel" fontSize={{ base: 'md', md: 'lg' }} />
      </FormControl>

      <FormControl id="email" display={'flex'} alignItems={'center'}>
        <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }} >餐廳地址</FormLabel>
        <Input flex={2} type="text" fontSize={{ base: 'md', md: 'lg' }} />
      </FormControl>

      <FormControl id="email" display={'flex'} alignItems={'center'}>
        <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }} >Google Map 位置</FormLabel>
        <Input flex={2} type="text" fontSize={{ base: 'md', md: 'lg' }} />
      </FormControl>

      <FormControl id="email" display={'flex'} alignItems={'center'}>
        <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }} >餐廳介紹</FormLabel>
        <Input flex={2} type="text" fontSize={{ base: 'md', md: 'lg' }} />
      </FormControl>

      <FormControl id="email" display={'flex'} alignItems={'center'}>
        <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }} >餐廳圖片</FormLabel>
        <Input type="text" fontSize={{ base: 'md', md: 'lg' }} display={'none'} />
        <Button flex={2} justifySelf={'flex-start'}>上傳圖片</Button>
      </FormControl>
      <Box w={'100%'} h={'300px'}>
        {/* <Image src='/cover.jpg' w={'100%'} h={'100%'} objectFit={'cover'}></Image> */}
        <Center w={'100%'} h={'100%'} bg={'gray.100'} border={'3px solid'} borderRadius={5} borderColor={'gray.200'}>
          <FaImage fontSize={'50px'} color='gray' />
        </Center>
      </Box>
      <Flex w={'100%'} display={'flex'} flexDir={{ base: 'column', md: 'row-reverse' }} gap={3}>
        <Button colorScheme='green' w={{ base: '100%', md: '30%' }}>
          { restaurantId ? '編輯' : '送出'}
        </Button>
        <Button colorScheme='blackAlpha' w={{ base: '100%', md: '30%' }}>Back</Button>
      </Flex>
    </>
  )
}

export default RestaurantForm
