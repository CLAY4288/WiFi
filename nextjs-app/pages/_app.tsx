import '../styles/globals.css'
import type { AppProps } from 'next/app'
import WifiManager from '../components/WifiManager'
import ClientBlocker from '../components/ClientBlocker'
import ChildPhoneManager from '../components/ChildPhoneManager'
import VisitedPagesViewer from '../components/VisitedPagesViewer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WifiManager />
      <ClientBlocker />
      <ChildPhoneManager />
      <VisitedPagesViewer />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp