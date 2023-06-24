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

      <div className="swheader subheader2"><StaticImage className="swimage" src={'../images/plant.png'} alt={"selected studies"} placeholder={'none'} width={45} />Selected Studies<div className="lines" /></div>
      <div className="selectedworks">
        <DisplayCard title={"Suggesting topics, the AI way"} description={"Searching, choosing, and adding the right topics to label  questions are hard, that’s why we utilized AI to suggest the perfect ones."} img={<StaticImage src={'../images/450x300.jpg'} alt={"work item image"} placeholder={'none'} width={700} />}/>
        <DisplayCard title={"Enhancing the admin experience"} description={"Being an admin in any scenario is overwhelming. That's why it was imperative for us to simplify, simplify, and (you guessed it) simplify."} img={<StaticImage src={'../images/450x300.jpg'} alt={"work item image"} placeholder={'none'} width={700}  />}/>
        <DisplayCard title={"Managing mental health made easier"} description={"First, managing your mental health is never easy. Second, DBSA’s wellness resources weren’t widely accessible. Third, we aimed to fix these problems."} img={<StaticImage src={'../images/450x300.jpg'} alt={"work item image"} placeholder={'none'} width={700}  />}/>
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