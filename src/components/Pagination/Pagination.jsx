import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Button, HStack } from '@chakra-ui/react'
import usePaginationStore from '../../store/paginationStore'

const Pagination = ({ count }) => {
  const totalPage = Math.ceil(count / 9)
  const currentPage = usePaginationStore(state => state.currentPage)
  const setCurrentPage = usePaginationStore(state => state.setCurrentPage)
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1)
  const handlePrevPage = () => {
    const prevPage = currentPage > 0 ? currentPage - 1 : 1
    setCurrentPage(prevPage)
    localStorage.setItem('currentPage', prevPage)
  }
  const handleNextPage = () => {
    const nextPage = currentPage < totalPage ? currentPage + 1 : totalPage
    setCurrentPage(nextPage)
    localStorage.setItem('currentPage', nextPage)
  }

  console.log({ currentPage })

  return (
    <>
      {
        count !== 0 && (
          <HStack justify={'center'} >
            <Button isDisabled={currentPage === 1} onClick={handlePrevPage}>
              <ArrowLeftIcon boxSize={3} />
            </Button>

            {
              pages.map(page => (
                <Button key={page} isActive={page === Number(currentPage)} onClick={() => {
                  setCurrentPage(page)
                  localStorage.setItem('currentPage', page)
                }}>
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
    </>
  )
}

export default Pagination
