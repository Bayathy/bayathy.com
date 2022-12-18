import type { FC } from 'react'
import { Card, Title, Text, Badge, Space, Flex, Stack } from '@mantine/core'

export type ProfileCardProps = {
   profileList: {
      index: string
      text: string
   }[]
}
export const ProfileCard: FC<ProfileCardProps> = ({ profileList }) => (
   <Card shadow="md" radius="md" withBorder>
      <Title order={4}>My Profile</Title>
      <Space h="md" />
      <Stack>
         {profileList.map(({ index, text }, key) => (
            <Flex align={'center'} gap={4} key={key}>
               <Badge>{index}</Badge>
               <Text>{text}</Text>
            </Flex>
         ))}
      </Stack>
   </Card>
)
