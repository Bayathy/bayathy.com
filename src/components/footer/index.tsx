import type { FC } from 'react'
import { Box, Container, Divider, Flex, Text } from '@mantine/core'

export type FooterProps = {
   text: string
}
export const Footer: FC<FooterProps> = ({ text }) => (
   <footer>
      <Divider />
      <Container>
         <Flex h="48px" justify={'center'} align={'center'}>
            <Text>{text}</Text>
         </Flex>
      </Container>
   </footer>
)
