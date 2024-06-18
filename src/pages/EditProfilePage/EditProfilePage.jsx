import { Avatar, Button, FormControl, FormLabel, Heading, HStack, Input, Stack, Textarea, VStack } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import useAuthTokenStore from '../../store/authTokenStore'
import usePostUserProfileAvatar from '../../hooks/usePostUserProfileAvatar'

const EditProfilePage = () => {
  const authUser = useAuthTokenStore(state => state.authUser)
  const [inputs, setInputs] = useState({
    name: authUser.name,
    introduction: authUser.introduction || ''
  })
  const fileRef = useRef(null)

  const { isLoading: isAvatarLoading, handleAvatarChange, avatarURL, setAvatarURL } = usePostUserProfileAvatar()

  return (
    <Stack maxW={'500px'} marginX={'auto'} w={'100%'} px={3} >
      <VStack spacing={{ base: 5, md: 10 }} my={2} >
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>修改個人資料</Heading>
        <HStack spacing={5}>
          {
            !isAvatarLoading && (<Avatar src={avatarURL || authUser.avatar } size={{ base: 'lg', md: 'xl' }} name='user' />)
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
          <Button w={{ base: '20%', md: '30%' }}>Back</Button>
          <Button w={{ base: '20%', md: '30%' }} colorScheme='blue'>修改</Button>
        </HStack>
      </VStack>
    </Stack>
  )
}

export default EditProfilePage
