import { Text, VStack } from '@chakra-ui/react'
import UserList from './UserList'

const UserRelations = ({ users }) => {
  console.log({ users })
  return (
    <VStack spacing={5} maxH={'300px'} minHeight={'300px'} overflowY={'auto'} px={3}>
      {
        users.length > 0 && users.map(userId => (
          <UserList key={userId} userId={userId} />
        ))
      }
      {
        users.length === 0 && (
          <VStack w={'100%'} h={'100%'} my={'auto'}>
            <Text fontWeight={'bold'} color={'gray.400'}>沒有任何使用者</Text>
          </VStack>
        )

      }
    </VStack>

  )
}

export default UserRelations
