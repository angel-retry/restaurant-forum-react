import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Button, HStack } from '@chakra-ui/react'
import usePaginationStore from '../../store/paginationStore'

const Pagination = ({ count }) => {
  const totalPage = Math.ceil(count / 9)
  const currentPage = usePaginationStore(state => state.currentPage)
  const setCurrentPage = usePaginationStore(state => state.setCurrentPage)
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1)
  const handlePrevPage = () => {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : 1)
  }
  const handleNextPage = () => {
    setCurrentPage(currentPage < totalPage ? currentPage + 1 : totalPage)
  }

  return (
    <HStack justify={'center'} >
      <Button isDisabled={currentPage === 1} onClick={handlePrevPage}>
        <ArrowLeftIcon boxSize={3} />
      </Button>

      {
        pages.map(page => (
          <Button key={page} isActive={page === currentPage} onClick={() => setCurrentPage(page)}>
            {page}
          </Button>
        ))
      }

      <Button isDisabled={currentPage === totalPage} onClick={handleNextPage} >
        <ArrowRightIcon boxSize={3} />
      </Button>
    </HStack>
  )
}

export default Pagination
