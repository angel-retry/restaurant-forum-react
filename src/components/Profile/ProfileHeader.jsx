import { Avatar, Button, Flex, Heading, Stack, Text, VStack, HStack, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Tabs, TabList, Tab, TabPanels, TabPanel, TabIndicator } from '@chakra-ui/react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import useAuthTokenStore from '../../store/authTokenStore'
import useFollowUser from '../../hooks/useFollowUser'
import { useState } from 'react'
import UserRelations from '../UserRelations/UserRelations'
import useUserProfileStore from '../../store/userProfileStore'

const ProfileHeader = () => {
  const userId = Number(useParams().userId)
  const authUser = useAuthTokenStore(state => state.authUser)
  const isAuthUser = userId === authUser.id
  const userProfile = useUserProfileStore(state => state.userProfile)

  const { isFollowed, handleFollowUser, isLoading: isFollowing } = useFollowUser(userProfile)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [defaultIndex, setDefaultIndex] = useState(0)

  return (
    <>
      <Stack>
        <Flex alignItems={{ base: 'center' }} direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'none', md: 'center' }} gap={{ base: 3, md: 10 }}>
          <Avatar src={userProfile.avatar} name='user' size={{ base: 'xl', md: '2xl' }} />
          <VStack align={{ base: 'center', md: 'flex-start' }}>
            <Heading fontSize={'2xl'}>{userProfile.name}</Heading>
            {
              isAuthUser
                ? (
                  <Link as={RouterLink} to={`/users/${userProfile.id}/edit`}>
                    <Button colorScheme='blue'>Edit Profile</Button>
                  </Link>
                  )
                : (
                <Button colorScheme='blue' isLoading={isFollowing} onClick={handleFollowUser}>
                  {
                    isFollowed ? '取消追蹤' : '追蹤'
                  }
                </Button>
                  )
            }
            <HStack spacing={5}>
              <Text>{userProfile.CreatedRestaurants.length} 篇貼文</Text>
              <Text
                onClick={
                  () => {
                    onOpen()
                    setDefaultIndex(0)
                  }
                }
                cursor={'pointer'}
              >
                {userProfile.Followers.length} 位粉絲
              </Text>
              <Text
                onClick={
                  () => {
                    onOpen()
                    setDefaultIndex(1)
                  }
                }
                cursor={'pointer'}
              >
                {userProfile.Followings.length} 位追蹤中
              </Text>
            </HStack>
            <Text>
              {userProfile.introduction}
            </Text>
          </VStack>
        </Flex>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pt={10} px={3}>
            <Tabs align='center' variant='unstyled' defaultIndex={defaultIndex} position='relative'>
              <TabList>
                <Tab flex={1} >{userProfile.Followers.length} 位粉絲</Tab>
                <Tab flex={1} >{userProfile.Followings.length} 位追蹤中</Tab>
              </TabList>
              <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
              <TabPanels>
                <TabPanel>
                  <UserRelations users={userProfile.Followers} />
                </TabPanel>
                <TabPanel>
                  <UserRelations users={userProfile.Followings} />
                </TabPanel>
              </TabPanels>
              </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileHeader
