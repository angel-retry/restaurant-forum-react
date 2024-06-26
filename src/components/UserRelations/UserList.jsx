import { HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import useGetUser from '../../hooks/useGetUser'
import User from './User'

const UserList = ({ userId }) => {
  const { isLoading, user } = useGetUser(userId)
  return (
    <>
      {
        isLoading
          ? (
          <HStack w={'100%'} spacing={5}>
            <SkeletonCircle size={'60px'} />
            <Skeleton w={'100px'} h={'20px'} />
            <Skeleton w={'80px'} h={'40px'} ml={'auto'} />
          </HStack>
            )
          : (
            <User user={user} />
            )
      }
    </>

  )
}

export default UserList
