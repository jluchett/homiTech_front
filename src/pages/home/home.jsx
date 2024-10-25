//import './home.css'

import HeroSection from "../../components/heroSection/heroSection";
import HeroSection2 from "../../components/carousel/carousel";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Pagina Home</h1>
        <HeroSection />
        <HeroSection2 />
      </div>
    </>
  )
}

export default Home;