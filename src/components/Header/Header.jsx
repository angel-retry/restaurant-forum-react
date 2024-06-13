import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Link, Text, useDisclosure, VStack } from '@chakra-ui/react'
import DrawerNavLink from './DrawerNavLink'
import { Link as RouterLink } from 'react-router-dom'
import { BiCrown, BiHomeAlt, BiLike } from 'react-icons/bi'
import { PiNewspaperBold } from 'react-icons/pi'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const Links = [
    {
      id: 1,
      label: '首頁',
      to: '/restaurants',
      icon: <BiHomeAlt />

    },
    {
      id: 2,
      label: '美食達人',
      to: '/users/top',
      icon: <BiLike />
    },
    {
      id: 3,
      label: 'Top10餐廳',
      to: '/restaurants/top',
      icon: <BiCrown />
    },
    {
      id: 4,
      label: '最新動態',
      to: '/restaurants/feeds',
      icon: <PiNewspaperBold />
    }
  ]
  return (
    <Box bg={'gray.100'} px={4} position={'fixed'} w={'full'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box fontSize={'lg'} fontWeight={'bold'}>餐廳論壇</Box>
          <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <Link as={RouterLink} key={link.id} to={link.to}>{link.label}</Link>
            ))}
          </HStack>
        </HStack>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={5} display={{ base: 'none', md: 'flex' }}>
          <HStack spacing={3}>
            <Avatar name='user' src='/cover.jpg' size={'sm'} />
            <Text>user1</Text>
          </HStack>
          <Button colorScheme='red' variant='outline'>Logout</Button>
        </HStack>
      </Flex>

      {isOpen && (
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>餐廳論壇</DrawerHeader>

            <DrawerBody>
              <VStack alignItems={'self-start'} spacing={15}>
                <Link
                  as={RouterLink}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'flex-start'}
                  gap={5}
                  py={15}
                  px={5}
                  _hover={{ bgColor: 'gray.100' }}
                  w={'full'}
                >
                  <Box flex={0.5} display={'flex'} justifyContent={'center'}>
                    <Avatar name='user' src='/cover.jpg' size={'sm'} />
                  </Box>
                  <Text flex={2}
                    fontWeight={'bold'}
                  >
                  user
                  </Text>
                </Link>
                {Links.map((link) => (
                <DrawerNavLink key={link.id} link={link} onClose={onClose} />
                ))}
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <Button colorScheme='red' variant='outline' w={'full'}>
                Logout
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  )
}

export default Header
