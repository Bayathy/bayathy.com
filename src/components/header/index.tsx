import type { FC } from 'react'
import React from 'react'
import { Container, Flex, Header as MantineHeader, Title } from '@mantine/core'
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons'

export type HeaderProps = {
   title: string
}

export const Header: FC<HeaderProps> = ({ title }) => (
   <MantineHeader height={64}>
      <Container
         sx={{
            height: 'inherit',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
         }}
      >
         <Title order={1}>{title}</Title>
         <Flex gap="1rem">
            <IconBrandTwitter />
            <IconBrandGithub />
         </Flex>
      </Container>
   </MantineHeader>
)
