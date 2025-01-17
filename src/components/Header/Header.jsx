import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Link, Text, useColorMode, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import DrawerNavLink from './DrawerNavLink'
import { Link as RouterLink } from 'react-router-dom'
import { BiCrown, BiHomeAlt, BiLike } from 'react-icons/bi'
import { PiNewspaperBold } from 'react-icons/pi'
import { FaPen } from 'react-icons/fa'
import { LuPencil } from 'react-icons/lu'
import useLogout from '../../hooks/useLogout'
import useAuthTokenStore from '../../store/authTokenStore'
import usePaginationStore from '../../store/paginationStore'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logout, isLogouting } = useLogout()
  const authUser = useAuthTokenStore(state => state.authUser)
  const setCurrentPage = usePaginationStore(state => state.setCurrentPage)
  const { colorMode, toggleColorMode } = useColorMode()

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
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} zIndex={2} w={'full'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Link as={RouterLink} to={'/restaurants'} fontSize={'lg'} fontWeight={'bold'} _hover={{ textDecoration: 'none' }}>餐廳論壇</Link>
          <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <Link as={RouterLink} key={link.id} to={link.to} onClick={() => setCurrentPage(1)} _hover={{ textDecoration: 'none', color: useColorModeValue('black', 'white') }} color={'gray.500'}>{link.label}</Link>
            ))}
          </HStack>
        </HStack>
        <HStack display={{ md: 'none' }}>
          <Button onClick={toggleColorMode} mr={3}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            onClick={isOpen ? onClose : onOpen}
          />
        </HStack>
        <HStack spacing={5} display={{ base: 'none', md: 'flex' }}>
          <Link
            as={RouterLink}
            to='/restaurants/create'
          >
            <Button colorScheme='green' variant={'outline'} gap={'3'} _hover={{ bg: 'green.400', color: 'white' }}>
              <FaPen size={'16px'} />
              <Box display={{ md: 'none', lg: 'flex' }}>
              建立餐廳
              </Box>
            </Button>
          </Link>
          <Link
            _hover={{ textDecoration: 'none' }}
            as={RouterLink}
            to={`/users/${authUser.id}`}
          >
            <HStack spacing={3}>
              <Avatar name='user' src={authUser.avatar} size={'sm'} alt={`${authUser.name} avatar`} />
              <Text>{authUser.name}</Text>
            </HStack>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button
            colorScheme='red'
            variant='outline'
            _hover={{ bg: 'red', color: 'white' }}
            isLoading={isLogouting}
            onClick={() => logout()}
          >Logout</Button>
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
                  _hover={{ bgColor: useColorModeValue('gray.100', 'gray.900') }}
                  w={'full'}
                  to={`/users/${authUser.id}`}
                  onClick={() => onClose()}
                >
                  <Box flex={0.5} display={'flex'} justifyContent={'center'}>
                    <Avatar name='user' src={authUser.avatar} size={'sm'} />
                  </Box>
                  <Text flex={2}
                    fontWeight={'bold'}
                  >
                  {authUser.name}
                  </Text>
                </Link>
                <Link
                  as={RouterLink}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'flex-start'}
                  gap={5}
                  py={15}
                  px={5}
                  _hover={{ bgColor: useColorModeValue('gray.100', 'gray.900') }}
                  w={'full'}
                  to='/restaurants/create'
                  onClick={() => onClose()}
                >
                  <Box flex={0.5} display={'flex'} justifyContent={'center'}>
                    <LuPencil fontSize={20} />
                  </Box>
                  <Text flex={2}
                    fontWeight={'bold'}
                  >
                  新建餐廳
                  </Text>
                </Link>
                {Links.map((link) => (
                <DrawerNavLink key={link.id} link={link} onClose={onClose} />
                ))}
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <Button colorScheme='red' variant='outline' w={'full'} isLoading={isLogouting} onClick={() => logout()}>
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
