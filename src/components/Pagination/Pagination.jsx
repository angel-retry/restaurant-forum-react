import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Center, HStack } from '@chakra-ui/react'

const Pagination = () => {
  return (
    <HStack justify={'center'} >
      <Center w={35} h={35} border={'1px solid'} borderColor={'gray.300'} borderRadius={5} textAlign={'center'} color={'gray.500'}>
        <ArrowLeftIcon boxSize={3} />

      </Center>

      {
        Array.from({ length: 6 }, (_, i) => (
          <Center key={i} w={35} h={35} border={'1px solid'} borderColor={'gray.300'} borderRadius={5} color={'gray.500'}>
            {i + 1}
          </Center>
        ))
      }

      <Center w={35} h={35} border={'1px solid'} borderColor={'gray.300'} borderRadius={5} textAlign={'center'} color={'gray.500'}>
        <ArrowRightIcon boxSize={3} />
      </Center>
    </HStack>
  )
}

export default Pagination
