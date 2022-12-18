import type { FC } from 'react'
import { Title, Text, Badge, Space, Flex, Stack } from '@mantine/core'
import { BasePaper } from './base-paper'

export type ProfileCardProps = {
   profileList: {
      index: string
      text: string
   }[]
}
export const ProfilePaper: FC<ProfileCardProps> = ({ profileList }) => (
   <BasePaper>
      <Title order={3}>My Profile</Title>
      <Space h="md" />
      <Stack>
         {profileList.map(({ index, text }, key) => (
            <Flex align={'center'} gap={4} key={key}>
               <Badge>{index}</Badge>
               <Text>{text}</Text>
            </Flex>
         ))}
      </Stack>
   </BasePaper>
)
