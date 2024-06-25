import { Avatar, Button, HStack, Text } from '@chakra-ui/react'

const UserList = ({ user }) => {
  return (
    <HStack w={'100%'} spacing={5}>
      <Avatar src={user.avatar} />
      <Text>{user.name}</Text>
      <Button colorScheme='blue' ml={'auto'}>Follow</Button>
    </HStack>
  )
}

export default UserList
