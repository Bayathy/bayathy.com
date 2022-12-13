import { Text, MantineProvider } from '@mantine/core'

export default function App() {
   return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
         <Text>Welcome to Mantine!</Text>
      </MantineProvider>
   )
}
