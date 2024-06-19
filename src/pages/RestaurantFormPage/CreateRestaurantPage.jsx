import * as yup from 'yup'
import { Button, Flex, Heading, Stack, VStack } from '@chakra-ui/react'
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useShowToast from '../../hooks/useShowToast'

const schema = yup.object({
  name: yup.string().required('請填入餐廳名字'),
  tel: yup.string().required('請填入電話'),
  address: yup.string().required('請填入餐廳地址'),
  introduction: yup.string().required('請填入餐廳介紹'),
  categoryId: yup.string().required('請選擇餐廳種類')
}).required()

const RestaurantFormPage = () => {
  const showToast = useShowToast()

  const { register, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    try {
      console.log(data)
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

          <RestaurantForm register={register} errors={errors} />

          <Flex w={'100%'} display={'flex'} flexDir={{ base: 'column', md: 'row-reverse' }} gap={3}>
            <Button type="submit" colorScheme='green' w={{ base: '100%', md: '30%' }}>
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
