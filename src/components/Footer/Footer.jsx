import { Stack, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Stack bg={useColorModeValue('gray.100', 'gray.900')} py={3} mt={5} >
      <Text color={'gray.500'} textAlign={'center'}>made in 2024</Text>
    </Stack>
  )
}

export default Footer
