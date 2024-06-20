import { Box, Button, Center, FormControl, FormLabel, Input, FormErrorMessage, VStack, HStack, Select, Image } from '@chakra-ui/react'
import { FaImage } from 'react-icons/fa'
import useCategoryStore from '../../store/categoryStore'
import { useRef, useState } from 'react'

const RestaurantForm = ({ register, errors, isPostingImage, handleImageChange, imageURL, restaurant }) => {
  const categories = useCategoryStore(state => state.categories)

  const fileRef = useRef(null)

  console.log({ restaurant })

  const [inputs, setInputs] = useState({
    name: restaurant?.name || '',
    categoryId: restaurant?.categoryId || '',
    address: restaurant?.address || '',
    addressUrl: restaurant?.addressUrl || '',
    tel: restaurant?.tel || '',
    introduction: restaurant?.introduction || '',
    image: restaurant?.image || ''
  })

  console.log({
    inputs
  })

  const isHasImage = imageURL || inputs.image

  return (
    <>
      <FormControl id="name" isInvalid={errors.name} display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳名字</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="text" fontSize={{ base: 'md', md: 'lg' }} {...register('name')} value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="categoryId" display={'flex'} alignItems={'center'} isInvalid={errors.categoryId}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳圖片</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Select placeholder='餐廳種類' fontSize={{ base: 'md', md: 'lg' }} {...register('categoryId')} defaultValue={inputs.categoryId} onChange={e => setInputs({ ...inputs, categoryId: e.target.value })} >
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
            <Input type="tel" fontSize={{ base: 'md', md: 'lg' }} {...register('tel')} value={inputs.tel} onChange={(e) => setInputs({ ...inputs, tel: e.target.value })} />
            <FormErrorMessage>{errors.tel && errors.tel.message}</FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="address" isInvalid={errors.address} display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳地址</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="text" fontSize={{ base: 'md', md: 'lg' }} {...register('address')} value={inputs.address} onChange={(e) => setInputs({ ...inputs, address: e.target.value })} />
            <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="addressUrl" display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>Google Map 位置</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="text" fontSize={{ base: 'md', md: 'lg' }} {...register('addressUrl')} value={inputs.addressUrl} onChange={(e) => setInputs({ ...inputs, addressUrl: e.target.value })} />
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="introduction" isInvalid={errors.introduction} display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳介紹</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="text" fontSize={{ base: 'md', md: 'lg' }} {...register('introduction')} value={inputs.introduction} onChange={(e) => setInputs({ ...inputs, introduction: e.target.value })} />
            <FormErrorMessage>{errors.introduction && errors.introduction.message}</FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>

      <FormControl id="email" display={'flex'} alignItems={'center'}>
        <HStack w={'100%'}>
          <FormLabel flex={1} m={0} fontSize={{ base: 'md', md: 'lg' }}>餐廳圖片</FormLabel>
          <VStack flex={2} p={0} spacing={0} w={'100%'} align={'flex-start'}>
            <Input type="file" display={'none'} ref={fileRef} onChange={handleImageChange} />
            <Button w={'100%'} justifySelf={'flex-start'} onClick={() => fileRef.current.click()} isLoading={isPostingImage}>上傳圖片</Button>
          </VStack>
        </HStack>
      </FormControl>

      <Box w={'100%'} h={'300px'}>
        {
          !isPostingImage && isHasImage
            ? (<Image src={imageURL || inputs.image } w={'100%'} h={'100%'} objectFit={'cover'} objectPosition={'center'}/>)
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
