import { ArrowRightIcon } from '@chakra-ui/icons'
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, HStack, Image, Link, Stack, StackDivider, Tag, Text, VStack } from '@chakra-ui/react'

const CommentsFeeds = () => {
  return (
    <Card w={'100%'} variant={'outline'}>
      <CardHeader pb={0}>
        <Heading size='md'>最新餐廳評論</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Flex flexDir={{ base: 'column', lg: 'row' }} gap={3}>
            <Box w={'100%'} h={{ base: '200px', lg: 'auto' }} flex={{ base: 'none', lg: 1 }}>
              <Image src='/cover.jpg' h={'100%'} w={'100%'} objectFit={'cover'} />
            </Box>
            <VStack align={'flex-start'} p={3} spacing={5} flex={1}>
              <Heading fontSize={'2xl'}>
                Restaurant Name
              </Heading>
              <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>Sample Tag</Tag>
              <HStack>
                <Avatar />
                <Flex direction={{ base: 'row', lg: 'column' }} gap={{ base: 3, lg: 0 }}>
                  <Text>
                    user1
                  </Text>
                  <Text>
                    —15小時前評論
                  </Text>
                </Flex>
              </HStack>
              <Text>
                這間真的滿好吃的!
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
        </Stack>
      </CardBody>
    </Card>
  )
}

export default CommentsFeeds
