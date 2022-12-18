import type { FC, PropsWithChildren } from 'react'
import { Paper } from '@mantine/core'

export const BasePaper: FC<PropsWithChildren> = ({ children }) => (
   <Paper shadow="md" radius="md" withBorder p="md">
      {children}
   </Paper>
)
