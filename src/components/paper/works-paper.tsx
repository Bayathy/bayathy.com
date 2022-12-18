import type { FC } from 'react'
import { Flex, Space, Title } from '@mantine/core'
import { BasePaper } from './base-paper'
import { WorksCard } from '../card/works-card'

export const WorksPaper: FC = () => (
   <BasePaper>
      <Title order={3}>Works</Title>
      <Space h="md" />
      <Flex wrap="wrap" gap={'1rem'} m="auto" justify="center">
         <WorksCard text={'test'} title={'test'} url={'test'} />
         <WorksCard text={'test'} title={'test'} url={'test'} />
         <WorksCard text={'test'} title={'test'} url={'test'} />
      </Flex>
   </BasePaper>
)
