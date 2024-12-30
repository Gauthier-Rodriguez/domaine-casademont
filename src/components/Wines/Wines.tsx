import WinesCanvas from '../Three/winesCanvas'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

type Props = {}

export default function Wines({ }: Props) {
  return (
    <div className='w-screen h-[500vh] overflow-hidden'>
      <Nav />
      <div className='w-screen bg-custom z-0'>
        <WinesCanvas />
      </div>
      <div className='z-10'>
      <Footer />
      </div>
    </div>
  )
}