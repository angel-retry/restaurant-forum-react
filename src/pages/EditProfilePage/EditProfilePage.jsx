import { Avatar, Button, FormControl, FormLabel, Heading, HStack, Input, SkeletonCircle, Stack, Textarea, VStack } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import useAuthTokenStore from '../../store/authTokenStore'
import usePostUserProfileAvatar from '../../hooks/usePostUserProfileAvatar'
import useShowToast from '../../hooks/useShowToast'
import usePutUserProfile from '../../hooks/usePutUserProfile'
import { useNavigate } from 'react-router-dom'

const EditProfilePage = () => {
  const authUser = useAuthTokenStore(state => state.authUser)

  const [inputs, setInputs] = useState({
    name: authUser.name,
    introduction: authUser.introduction || ''
  })
  const fileRef = useRef(null)

  const { isLoading: isAvatarLoading, handleAvatarChange, avatarURL } = usePostUserProfileAvatar()

  const { putAuthUser, isLoading } = usePutUserProfile(authUser.id)

  const showToast = useShowToast()
  const navigate = useNavigate()

  const handleEditProfile = async () => {
    const { name, introduction } = inputs
    if (!name) {
      return showToast('Error', '請輸入名字!', 'error')
    }
    const data = {
      name,
      introduction,
      avatar: avatarURL || authUser.avatar
    }

    try {
      await putAuthUser(data)
      showToast('Success', '修改成功!', 'success')
      navigate(`/users/${authUser.id}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Stack maxW={'500px'} marginX={'auto'} w={'100%'} px={3} >
      <VStack spacing={{ base: 5, md: 10 }} my={2} >
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>修改個人資料</Heading>
        <HStack spacing={5}>
          {
            isAvatarLoading ? <SkeletonCircle size={{ base: '70px', md: '100px' }} /> : <Avatar src={avatarURL || authUser.avatar } size={{ base: 'lg', md: 'xl' }} name={authUser.name} />
          }

          <Input type='file' hidden ref={fileRef} onChange={handleAvatarChange} />
          <Button size={{ base: 'sm', md: 'md' }} onClick={() => fileRef.current.click()}>修改個人大頭貼</Button>
        </HStack>
        <FormControl id="name" display={'flex'} alignItems={'center'}>
          <FormLabel w={{ base: '40%', md: '30%' }} m={0} fontSize={{ base: 'md', md: 'lg' }} >Name</FormLabel>
          <Input
            type="email"
            fontSize={{ base: 'md', md: 'lg' }}
            value={inputs.name}
            onChange={e => setInputs({
              ...inputs,
              name: e.target.value
            })}
          />
        </FormControl>

        <FormControl id="introduction" display={'flex'} alignItems={'center'}>
          <FormLabel w={{ base: '40%', md: '30%' }} m={0} fontWeight={'bold'} alignSelf={'flex-start'} fontSize={{ base: 'md', md: 'lg' }} >自我介紹</FormLabel>
          <Textarea
            fontSize={{ base: 'md', md: 'lg' }}
            value={inputs.introduction}
            onChange={(e) => setInputs({
              ...inputs,
              introduction: e.target.value
            })}
          />
        </FormControl>

        <HStack w={'full'}justifyContent={'flex-end'}>
          <Button w={{ base: '20%', md: '30%' }} onClick={() => navigate(-1)}>Back</Button>
          <Button w={{ base: '20%', md: '30%' }} colorScheme='blue' onClick={handleEditProfile} isLoading={isLoading}>修改</Button>
        </HStack>
      </VStack>
    </Stack>
  )
}

export default EditProfilePage
