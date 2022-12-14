import type { FC } from 'react'
import { Box, Text, Timeline, Title } from '@mantine/core'
import { BasePaper } from './base-paper'

export type TimeLineList = {
   title: string
   text: string
}[]
export type TimelineCardProps = {
   timeline: TimeLineList
}
export const TimelinePaper: FC<TimelineCardProps> = ({ timeline }) => (
   <BasePaper>
      <Title order={3}>TimeLine</Title>
      <Box p="1rem">
         <Timeline>
            {timeline.map((index, key) => (
               <Timeline.Item key={key} title={index.title}>
                  <Text>{index.text}</Text>
               </Timeline.Item>
            ))}
         </Timeline>
      </Box>
   </BasePaper>
)
