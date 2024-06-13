import { Avatar, Button, Flex, Heading, Stack, Text, VStack, HStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ProfileHeader = () => {
  const userId = Number(useParams().userId)
  const authId = 1
  return (
    <Stack>
      <Flex alignItems={{ base: 'center' }} direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'none', md: 'center' }} gap={{ base: 3, md: 10 }}>
        <Avatar name='user' size={{ base: 'xl', md: '2xl' }} />
        <VStack align={{ base: 'center', md: 'flex-start' }}>
          <Heading fontSize={'2xl'}>Username</Heading>
          {
            userId === authId
              ? (
              <Button colorScheme='blue'>Edit Profile</Button>
                )
              : (
              <Button colorScheme='blue'>Follow</Button>
                )
          }
          <HStack spacing={5}>
            <Text>3 posts</Text>
            <Text>4 followers</Text>
            <Text>3 followings</Text>
          </HStack>
          <Text>
            yoiejpof;pjdgjsg[hhhwhgwuhapwoh]
          </Text>
        </VStack>
      </Flex>
    </Stack>
  )
}

export default ProfileHeader
