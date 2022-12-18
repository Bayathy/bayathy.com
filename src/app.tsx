import { Container, MantineProvider } from '@mantine/core'
import { ProfileSection } from './components/section/profile-section'
import { Header } from './components/header'

export default function App() {
   return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
         <Header title={'Logo'} />
         <Container>
            <ProfileSection />
         </Container>
      </MantineProvider>
   )
}
