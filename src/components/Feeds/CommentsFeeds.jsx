import { ArrowRightIcon } from '@chakra-ui/icons'
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, HStack, Image, Link, Stack, StackDivider, Tag, Text, VStack } from '@chakra-ui/react'
import useGetFeedsComments from '../../hooks/useGetFeedsComments'
import { timeAgo } from '../../utils/timeAgo'

const CommentsFeeds = () => {
  const { isLoading, feedsComments } = useGetFeedsComments()
  return (
    <Card w={'100%'} variant={'outline'}>
      <CardHeader pb={0}>
        <Heading size='md'>最新餐廳評論</Heading>
      </CardHeader>

      <CardBody>
        {
          !isLoading && (
            <Stack spacing='4' divider={<StackDivider />}>
              {
                feedsComments.map(comment => (
                  <Flex flexDir={{ base: 'column', lg: 'row' }} gap={3} key={comment.id} py={4} >
                    <Box w={'100%'} h={{ base: '200px', lg: 'auto' }} flex={{ base: 'none', lg: 1 }}>
                      <Image src={comment.Restaurant.image} h={'100%'} w={'100%'} objectFit={'cover'} alt={`${comment.Restaurant.name} image`} />
                    </Box>
                    <VStack align={'flex-start'} p={3} spacing={5} flex={1}>
                      <Heading fontSize={'2xl'}>
                          {comment.Restaurant.name}
                      </Heading>
                      <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>{comment.Restaurant.Category.name}</Tag>
                      <HStack>
                        <Avatar src={comment.User.avatar} name={comment.User.name} alt={`${comment.User.name} avatar`} />
                        <Flex direction={{ base: 'row', lg: 'column' }} gap={{ base: 3, lg: 0 }}>
                          <Text>
                            {comment.User.name}
                          </Text>
                          <Text>
                            — {timeAgo(comment.createdAt)}評論
                          </Text>
                        </Flex>
                      </HStack>
                      <Text>
                        {comment.text}
                      </Text>
                      <Link
                        display={'flex'}
                        alignItems={'center'}
                        gap={2}
                        color='blue.500'
                        fontWeight={'bold'}
                        _hover={{ textDecoration: 'none' }}
                      >
                        查看此餐廳詳細資料
                        <ArrowRightIcon boxSize={3} />
                      </Link>
                    </VStack>
                  </Flex>
                ))
              }
            </Stack>
          )
        }

      </CardBody>
    </Card>
  )
}

export default CommentsFeeds
