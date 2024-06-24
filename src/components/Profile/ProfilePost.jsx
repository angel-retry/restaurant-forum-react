import { Box, Card, Heading, Image, Tag, VStack, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const ProfilePost = ({ restaurant }) => {
  return (
    <Card >
      <Box h={{ sm: '250px', md: '350px' }}>
        <Link as={RouterLink} to={`/restaurants/${restaurant.id}`}>
          <Image src={restaurant.image} w={'100%'} h={'100%'} objectFit={'cover'} />
        </Link>
      </Box>
      <VStack align={'flex-start'} p={3}>
        <Link as={RouterLink} to={`/restaurants/${restaurant.id}`}>
          <Heading fontSize={'2xl'}>{restaurant.name}</Heading>
        </Link>
        <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>{restaurant.Category.name}</Tag>
      </VStack>
    </Card>
  )
}

export default ProfilePost
