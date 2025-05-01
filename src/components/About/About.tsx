import Footer from '../Footer/Footer'
import Nav from  '../Nav/Nav'
import Carousel from '../Carousel/Carousel'
import { EmblaOptionsType } from 'embla-carousel'
import SEO from '../SEO/SEO'

type Props = {}

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 15
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function about({ }: Props) {
  return (
    <>
      <Nav />
      <SEO 
        title="About Us | Domaine Casademont"
        description="Learn about our values and our journey"
        url="/about"
        type="product.group"
      />
      <main className='min-h-screen w-full px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24'>
        <section className='max-w-4xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center'>
            ABOUT US
          </h1>
          <p className='mt-4 sm:mt-5 text-base sm:text-lg text-justify leading-relaxed'>
          Owner and winemaker Adrien Rodriguez always aspired to make wine in his home region of Languedoc-Roussillon. The unique opportunity presented itself for Adrien and his wife Kelsey to buy back a vineyard once owned by his great grandfather, Raoul Casademont, that had been lost over the years since his passing. Raoul, a local vine grower, was the hero of his family and known in his village for his extraordinary generosity. A true local legend. A prisoner in the German war camps of WWII, Raoul returned home focused on the simple joys of life: family, community, a beautiful meal, and the literal fruit of his region which he carefully tended and made into wine enjoyed by those around him. Raoul wasn’t short on flair or style, however, and was the first person in his village to own a car – a fact that earned him the nickname “The American.”
Adrien embodies much of what was so beloved in his great grandfather, his Pepe Raoul, though they never met. A passion for the important things in life, a deep love and respect for his home region and terroir, and a desire to share his passion for winemaking with friends and loved ones. The creation of Domaine Casademont is the realization of a lifelong dream for Adrien and we like to believe a much deserved feather in the cap of our vineyard’s namesake, beloved Pepe Raoul Casademont.
Adrien earned his Viticulture and Oenology diploma in Carcassone, France and has worked in many regions of France including Bordeaux, Provence, and Languedoc. Adrien’s career brought him to London, Montreal, and eventually to sunny California where he met his wife Kelsey who was born and raised in Los Angeles. The couple travel often to France and on one visit in early 2024, they started touring local organic vineyards for sale. Realizing that Pepe Raoul’s old vines had finally come up for sale, they jumped on the opportunity to buy them back. And in the summer of 2024, along with friends and family, they harvested their newly purchased vineyard and made their first vintage of natural wines.           </p>
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