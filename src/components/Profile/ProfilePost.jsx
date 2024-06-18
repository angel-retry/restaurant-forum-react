import { Box, Card, Heading, Image, Tag, VStack } from '@chakra-ui/react'

const ProfilePost = ({ restaurant }) => {
  return (
    <Card >
      <Box h={{ sm: '250px', md: '350px' }}>
        <Image src={restaurant.image} w={'100%'} h={'100%'} objectFit={'cover'} />
      </Box>
      <VStack align={'flex-start'} p={3}>
        <Heading fontSize={'2xl'}>{restaurant.name}</Heading>
        <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>{restaurant.Category.name}</Tag>
      </VStack>
    </Card>
  )
}

export default ProfilePost
