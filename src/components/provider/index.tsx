import { FC, PropsWithChildren } from 'react'
import { Global, MantineProvider } from '@mantine/core'

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => (
   <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
         // use custom font in MantineProvider
         fontFamily: 'Noto, sans-serif'
      }}
   >
      <Global
         styles={[
            {
               '@font-face': {
                  fontFamily: 'Noto',
                  src: `url("../../../public/subset-noto.woff2") format("woff2")`,
                  fontWeight: 500,
                  fontStyle: 'normal'
               }
            }
         ]}
      />
      {children}
   </MantineProvider>
)
