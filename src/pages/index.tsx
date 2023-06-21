/** @jsxImportSource theme-ui */
import "../theme/styles.scss"

import About from '../components/About/About';
import Header from '../components/Header/Header';
import DisplayCard from '../components/DisplayCard/DisplayCard';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {

  return (
    <div className="page">
      <NavBar />
      <div className="headerabout">
        <Header />
        <About />
      </div>

      <div className="swheader subheader2"><div className="lines" />Selected Studies<StaticImage className="swimage" src={'../images/plant.png'} alt={"selected studies"} placeholder={'none'} width={100} /><div className="lines" /></div>
      <div className="selectedworks">
        <DisplayCard title={"Enhancing the admin experience"} description={"Being an admin in any scenario is overwhelming. That's why it was imperative for us to simplify, simplify, and (you guessed it) simplify."} img={<StaticImage src={'../images/450x300.jpg'} alt={"work item image"} placeholder={'none'} width={450} />}/>

        <DisplayCard title={"Enhancing the admin experience"} description={"Being an admin in any scenario is overwhelming. That's why it was imperative for us to simplify, simplify, and (you guessed it) simplify."} img={<StaticImage src={'../images/450x300.jpg'} alt={"work item image"} placeholder={'none'} width={450} />}/>
      </div>
     <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <title>Erin Yoo</title>
    </>
  );
};