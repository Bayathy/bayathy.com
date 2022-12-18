import type { FC } from 'react'
import { Box, Card, Text, Timeline, Title } from '@mantine/core'

export type TimelineCardProps = {
   timeline: {
      title: string
      text: string
   }[]
}
export const TimelineCard: FC<TimelineCardProps> = ({ timeline }) => (
   <Card shadow="md" radius="md" withBorder>
      <Title order={4}>TimeLine</Title>
      <Box p="1rem">
         <Timeline>
            {timeline.map((index, key) => (
               <Timeline.Item key={key} title={index.title}>
                  <Text>{index.text}</Text>
               </Timeline.Item>
            ))}
         </Timeline>
      </Box>
   </Card>
)
