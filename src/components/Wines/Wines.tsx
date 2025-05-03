import WinesCanvas from '../Three/winesCanvas'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import SEO from '../SEO/SEO'

type Props = {}

export default function Wines({ }: Props) {

  return (
    <>
      <SEO 
        title="Our Wines"
        description="Discover our exceptional selection of wines from Languedoc-Roussillon. From robust Marcelan to delicate Grenache and Muscat, explore our carefully crafted collection."
        url="/wines"
        type="product.group"
      />
      <div className='w-screen h-[500vh] overflow-hidden'>
        <Nav />
        <div className='w-screen bg-custom '>
            <WinesCanvas />
        </div>
          <Footer />
      </div>
    </>
  )
}