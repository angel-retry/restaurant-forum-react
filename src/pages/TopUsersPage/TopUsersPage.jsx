import { Grid, Heading, Spinner, Stack, VStack } from '@chakra-ui/react'
import useGetTopUsers from '../../hooks/useGetTopUsers'
import TopUser from '../../components/TopUser/TopUser'

const TopUsersPage = () => {
  const { isLoading, topUsers } = useGetTopUsers()

  return (
    <Stack maxW={1440} mx={'auto'} w={'100%'} px={3}>
      <Heading>Top Users</Heading>
      {
        isLoading
          ? (
            <VStack w={'100%'} h={'100%'} alignItems={'center'}>
              <Spinner />
            </VStack>
            )
          : (
          <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" justifyItems={'center'} gap={10} >
          {
            topUsers.map(user => (
              <TopUser key={user.id} user={user} isLoading={isLoading}/>

            ))
          }
        </Grid>
            )
      }

    </Stack>
  )
}

export default TopUsersPage
