import { Container, MantineProvider, Space, Stack } from '@mantine/core'
import { ProfileSection } from './components/section/profile-section'
import { Header } from './components/header'
import { WorksSection } from './components/section/works-section'
import { Footer } from './components/footer'
import { TimeLineList } from './components/paper/timeline-paper'
import { ProfileList } from './components/paper/profile-paper'

const timeline: TimeLineList = [
   { text: 'test', title: ' test' },
   { text: 'test', title: ' test' },
   { text: 'test', title: ' test' }
]

const profileList: ProfileList = [
   { index: 'test', text: ' test' },
   { index: 'test', text: ' test' },
   { index: 'test', text: ' test' }
]
export default function App() {
   return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
         <Header title={'Logo'} />
         <Container>
            <Stack>
               <ProfileSection
                  title={"Hello I'm Bayathy!!"}
                  timeline={timeline}
                  profileList={profileList}
               />
               <WorksSection />
            </Stack>
         </Container>
         <Space h={24} />
         <Footer text={'test'} />
      </MantineProvider>
   )
}
