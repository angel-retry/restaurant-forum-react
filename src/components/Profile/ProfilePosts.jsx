import { Grid, Stack } from '@chakra-ui/react'

import ProfilePost from './ProfilePost'

const ProfilePosts = () => {
  return (
    <Stack px={3} mt={5}>
      <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
        {Array.from({ length: 10 }, (_, i) => (
          <ProfilePost key={i} />
        ))}
      </Grid>
    </Stack>
  )
}

export default ProfilePosts
