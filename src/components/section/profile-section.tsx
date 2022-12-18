import type { FC } from 'react'
import { Flex, Stack, Title } from '@mantine/core'
import { TimelineCardProps, TimelinePaper } from '../paper/timeline-paper'
import { ProfileCardProps, ProfilePaper } from '../paper/profile-paper'

export type ProfileSectionProps = {
   title: string
} & ProfileCardProps &
   TimelineCardProps
export const ProfileSection: FC<ProfileSectionProps> = ({
   title,
   timeline,
   profileList
}) => (
   <section>
      <Flex h="30vh" align="center" justify="center">
         <Title>{title}</Title>
      </Flex>
      <Stack>
         <ProfilePaper profileList={profileList} />
         <TimelinePaper timeline={timeline} />
      </Stack>
   </section>
)
