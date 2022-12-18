import type { FC } from 'react'
import { Flex, Stack, Title } from '@mantine/core'
import { TimelineCard, TimelineCardProps } from '../cards/timeline-card'
import { ProfileCard, ProfileCardProps } from '../cards/profile-card'

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
         <ProfileCard profileList={profileList} />
         <TimelineCard timeline={timeline} />
      </Stack>
   </section>
)
