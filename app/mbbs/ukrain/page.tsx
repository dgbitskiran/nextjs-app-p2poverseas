import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Ukrain from '../../components/Mbbs/Ukrain'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Ukrain/>

<Footer/>


</>
  )
}
