import { Box, Button, Center, FormControl, FormLabel, Input, FormErrorMessage, VStack, HStack, Select, Image } from '@chakra-ui/react'
import { FaImage } from 'react-icons/fa'
import useCategoryStore from '../../store/categoryStore'
import { useRef } from 'react'
import usePostRestaurantImage from '../../hooks/usePostRestaurantImage'

const RestaurantForm = ({ register, errors }) => {
  const categories = useCategoryStore(state => state.categories)
  const { isLoading, handleImageChange, imageURL } = usePostRestaurantImage()

  const fileRef = useRef(null)

  return (
    <>
      <FormControl id="name" isInvalid={errors.name} display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳名字</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="text" fontSize={{ base: 'md', md: 'lg' }} {...register('name')} />
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="categoryId" display={'flex'} alignItems={'center'} isInvalid={errors.categoryId}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳圖片</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Select placeholder='餐廳種類' fontSize={{ base: 'md', md: 'lg' }} {...register('categoryId')} defaultValue="" >
              {
                categories.map(category => (
                  <option key={category.id} value={category.id}>
                  {category.name}
                  </option>
                ))
              }
            </Select>
            <FormErrorMessage>{errors.categoryId && errors.categoryId.message}</FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="tel" isInvalid={errors.tel} display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳電話</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="tel" fontSize={{ base: 'md', md: 'lg' }} {...register('tel')} />
            <FormErrorMessage>{errors.tel && errors.tel.message}</FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="address" isInvalid={errors.address} display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳地址</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="text" fontSize={{ base: 'md', md: 'lg' }} {...register('address')} />
            <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="addressUrl" display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>Google Map 位置</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="text" fontSize={{ base: 'md', md: 'lg' }} {...register('addressUrl')} />
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="introduction" isInvalid={errors.introduction} display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳介紹</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="text" fontSize={{ base: 'md', md: 'lg' }} {...register('introduction')} />
            <FormErrorMessage>{errors.introduction && errors.introduction.message}</FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="email" display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳圖片</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="file" display={'none'} ref={fileRef} onChange={handleImageChange} />
            <Button w={'100%'} justifySelf={'flex-start'} onClick={() => fileRef.current.click()} isLoading={isLoading}>上傳圖片</Button>
          </VStack>
        </HStack>
      </FormControl>

      <Box w={'100%'} h={'300px'}>
        {
          !isLoading && imageURL
            ? (<Image src={imageURL} w={'100%'} h={'100%'} objectFit={'cover'} objectPosition={'center'}/>)
            : (
            <Center w={'100%'} h={'100%'} bg={'gray.100'} border={'3px solid'} borderRadius={5} borderColor={'gray.200'}>
          <FaImage fontSize={'50px'} color='gray' />
        </Center>
              )
        }

      </Box>
    </>
  )
}

export default RestaurantForm
