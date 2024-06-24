import { Avatar, Box, Button, Card, Heading, HStack, Text, VStack } from '@chakra-ui/react'

const TopUser = ({ user }) => {
  return (
    <Card maxW={'300px'} w={'100%'} boxShadow={'lg'} variant={'outline'} >
      <VStack p={10} spacing={5}>
        <Avatar src={user.avatar} name='user' size={'lg'} />
        <Heading fontSize={'2xl'}>{user.name}</Heading>
        <HStack spacing={'20px'} justify={'center'} w={'100%'} fontWeight={'bold'}>
          <VStack flex={1} >
            <Text>{user.UserFollowersCount}</Text>
            <Text>Followers</Text>
          </VStack>
          <Box w={'2px'} h={'40px'} bg={'gray.300'}></Box>
          <VStack flex={1}>
            <Text>{user.CreatedRestaurants.length}</Text>
            <Text>Posts</Text>
          </VStack>
        </HStack>
        <Button colorScheme='blue'>Follow</Button>
      </VStack>
    </Card>
  )
}

export default TopUser
