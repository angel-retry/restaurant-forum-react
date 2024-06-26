import { Text, Link, Box, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const DrawerNavLink = ({ link, onClose }) => {
  return (
    <>
    <Link
      to={link.to}
      as={RouterLink}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      gap={5}
      py={15}
      px={5}
      _hover={{ bgColor: useColorModeValue('gray.100', 'gray.900') }}
      w={'full'}
      onClick={() => onClose()}
    >
      <Box fontSize={25} flex={0.5} display={'flex'} justifyContent={'center'}>
        {link.icon}
      </Box>
      <Text flex={2}
        fontWeight={'bold'}
      >
      {link.label}
      </Text>
    </Link>
    </>
  )
}

export default DrawerNavLink
