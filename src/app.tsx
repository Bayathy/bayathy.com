import { Container, MantineProvider } from '@mantine/core'
import { ProfileSection } from './components/section/profile-section'
import { Header } from './components/header'

const timeline = [
   { text: 'test', title: ' test' },
   { text: 'test', title: ' test' },
   { text: 'test', title: ' test' }
]

const profileList = [
   { index: 'test', text: ' test' },
   { index: 'test', text: ' test' },
   { index: 'test', text: ' test' }
]
export default function App() {
   return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
         <Header title={'Logo'} />
         <Container>
            <ProfileSection
               title={'Bayathy'}
               timeline={timeline}
               profileList={profileList}
            />
         </Container>
      </MantineProvider>
   )
}
