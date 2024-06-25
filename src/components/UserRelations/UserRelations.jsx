import { VStack } from '@chakra-ui/react'
import UserList from './UserList'

const UserRelations = ({ users }) => {
  console.log({ users })
  return (
    <VStack spacing={5}>
      {
        users.map(user => (
          <UserList key={user.id} user={user} />
        ))
      }
    </VStack>

  )
}

export default UserRelations
