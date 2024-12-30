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
      <main className='min-h-screen w-full px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24'>
        <section className='max-w-4xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center'>
            ABOUT US
          </h1>
          <p className='mt-4 sm:mt-5 text-base sm:text-lg text-justify sm:text-center leading-relaxed'>
            Nestled in the vibrant Languedoc-Roussillon, Domaine Casademont marries the art of French winemaking with a fresh, modern twist. Guided by Adrien Rodriguez, our wines—from robust Marcelan to delicate Grenache and Muscat—are crafted to showcase the rich diversity of our terroir. Each bottle is a celebration of life's simple pleasures, offering a sip of southern France's dynamic energy and unmatched flavors. Dive into the essence of our spirited lands with every glass!
          </p>
        </section>

        <section className='max-w-4xl mx-auto mt-12 sm:mt-16 lg:mt-20'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center'>
            VINEYARD CHRONICLES
          </h2>
          <p className='text-center mt-3 sm:mt-4 text-base sm:text-lg'>
            From vine to wine: A visual journey through our vineyards, harvest, and cellar.
          </p>
        </section>

        <section className='mt-8 sm:mt-12'>
          <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
      </main>

      <Footer />
    </>
  )
}