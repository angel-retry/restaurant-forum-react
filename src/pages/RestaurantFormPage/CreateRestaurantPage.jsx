import * as yup from 'yup'
import { Button, Flex, Heading, Stack, VStack } from '@chakra-ui/react'
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useShowToast from '../../hooks/useShowToast'
import usePostRestaurantImage from '../../hooks/usePostRestaurantImage'
import usePostRestaurant from '../../hooks/usePostRestaurant'
import useAuthTokenStore from '../../store/authTokenStore'

const schema = yup.object({
  name: yup.string().required('請填入餐廳名字'),
  tel: yup.string().required('請填入電話'),
  address: yup.string().required('請填入餐廳地址'),
  introduction: yup.string().required('請填入餐廳介紹'),
  categoryId: yup.string().required('請選擇餐廳種類')
}).required()

const RestaurantFormPage = () => {
  const showToast = useShowToast()
  const authUser = useAuthTokenStore(state => state.authUser)

  const { register, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema)
  })

  const { isLoading, handleImageChange, imageURL } = usePostRestaurantImage()

  const { isLoading: isPosting, postRestaurant } = usePostRestaurant()

  const onSubmit = async (data) => {
    const restaurantData = {
      ...data,
      createdBy: authUser.id,
      image: imageURL
    }
    try {
      await postRestaurant(restaurantData)
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }

  const onError = (error) => {
    if (!error) return
    showToast('Error', '請填好欄位喔!', 'error')
  }

  return (
    <Stack px={3} maxWidth={'500px'} marginX={'auto'} w={'100%'}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <VStack spacing={5} >
          <Heading fontSize={{ base: '2xl', md: '3xl' }}>
            建立餐廳
          </Heading>

          <RestaurantForm register={register} errors={errors} isLoading={isLoading} handleImageChange={handleImageChange} imageURL={imageURL} />

          <Flex w={'100%'} display={'flex'} flexDir={{ base: 'column', md: 'row-reverse' }} gap={3}>
            <Button type="submit" colorScheme='green' w={{ base: '100%', md: '30%' }} isLoading={isPosting}>
              送出
            </Button>
            <Button colorScheme='blackAlpha' w={{ base: '100%', md: '30%' }}>Back</Button>
          </Flex>
        </VStack>
      </form>
    </Stack>
  )
}

export default RestaurantFormPage
