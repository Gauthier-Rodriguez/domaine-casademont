import Footer from '../Footer/Footer'
import Nav from  '../Nav/Nav'
import Carousel from '../Carousel/Carousel'
import { EmblaOptionsType } from 'embla-carousel'

type Props = {}

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default function about({ }: Props) {
  return (
    <>
      <Nav />
      <div className='w-screen h-screen mt-20'>
        <div className='p-10'>
          <h1 className='text-6xl font-bold text-center'>ABOUT US</h1>
          <p className='mt-5 text-justify'>Nestled in the vibrant Languedoc-Roussillon, Domaine Casademont marries the art of French winemaking with a fresh, modern twist. Guided by Adrien Rodriguez, our wines—from robust Marcelan to delicate Grenache and Muscat—are crafted to showcase the rich diversity of our terroir. Each bottle is a celebration of life's simple pleasures, offering a sip of southern France's dynamic energy and unmatched flavors. Dive into the essence of our spirited lands with every glass!</p>
        </div>
        <div className='p-10 -mt-20'>
          <h1 className='text-5xl font-bold text-center mt-20'>VINEYARD CHRONICLES</h1>
          <p className='text-center mt-5'>From vine to wine: A visual journey through our vineyards, harvest, and cellar.</p>
        </div>

      </div>
      <div className='-mt-60 mb-20'>
        <Carousel slides={SLIDES} options={OPTIONS} />
      </div>

      <Footer />
    </>

  )
}