import { Avatar, Box, Button, Card, Grid, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import useGetTopUsers from '../../hooks/useGetTopUsers'

const TopUsersPage = () => {
  const { isLoading, topUsers } = useGetTopUsers()

  return (
    <Stack maxW={1440} mx={'auto'} w={'100%'} px={3}>
      <Heading>Top Users</Heading>
      {
        !isLoading && (
          <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" justifyItems={'center'} gap={10} >
            {
              topUsers.map(user => (
                <Card key={user.id} maxW={'300px'} w={'100%'} boxShadow={'lg'} >
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
              ))
            }
          </Grid>
        )
      }

    </Stack>
  )
}

export default TopUsersPage
