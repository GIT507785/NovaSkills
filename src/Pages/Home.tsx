import Contact from '../Components/Contact'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'
import TrustedCompanies from '../Components/TrustedCompanies'
import WhyChooseUs from '../Components/WhyChooseUs'

const Home = () => {
  return (
    <div className="overflow-hidden">
        <Hero/>
        <TrustedCompanies/>
        <Services/>
        <WhyChooseUs/>
        <Testimonials/>
         <Contact/>
    </div>
  )
}

export default Home