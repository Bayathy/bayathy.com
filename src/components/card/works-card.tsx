import type { FC } from 'react'
import { Card, Divider, Flex, Stack, Text, Title } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons'

export type WorksCardProps = {
   title: string
   text: string

   url: string
}
export const WorksCard: FC<WorksCardProps> = ({ title, text, url }) => (
   <Card
      shadow="md"
      radius="md"
      withBorder
      sx={{
         width: '90%',
         '@media (min-width: 755px)': {
            width: '30%'
         }
      }}
   >
      <Stack>
         <Title order={4} align="center">
            {title}
         </Title>
         <Divider />
         <Text>{text}</Text>
         <Flex justify="flex-end" w="full">
            <a href={url}>
               <IconBrandGithub color={'black'} />
            </a>
         </Flex>
      </Stack>
   </Card>
)
