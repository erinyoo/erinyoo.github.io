/** @jsxImportSource theme-ui */
import "../theme/styles.scss"


import About from '../components/About/About';
import Header from '../components/Header/Header';
// import DisplayCard from '../components/DisplayCard/DisplayCard';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {

  return (
    <div className="page">
      <NavBar currentPage="home" />
      <div className="headerabout">
        <Header />
        <About />
      </div>

      <div className="swheader subheader2"><StaticImage className="swimage" src={'../images/plant.png'} alt={"selected studies"} placeholder={'none'} width={45} />Selected Studies<div className="lines" /></div>

      <div className="wip">
        <StaticImage width={500} src={'../images/wip.png'} alt={"work item image"} placeholder={'none'} />

        <div className="subbutton">At this moment, I'm still gaining experience. Checkout my personal projects in the meanwhile.</div>

        {/* <DisplayCard title={"Suggesting topics, AI style"} description={"Searching, choosing, and adding the right topics to label  questions are hard, that's why we utilized AI to suggest the perfect ones."} img={<StaticImage width={900} src={'../images/aisuggested.png'} alt={"work item image"} placeholder={'none'} />} linkTo={"/aisuggestion"} />

        <DisplayCard title={"Improving the admin experience"} description={"Sometimes improving an experience can mean taking a step back to look at the bigger picture."} img={<StaticImage width={900} src={'../images/featuredtopics.png'} alt={"work item image"} placeholder={'none'} />} linkTo={"/secret/answersadmin"} />

        <DisplayCard title={"Managing mental health made easy"} description={"First, managing your mental health is never easy. Second, DBSA's wellness resources weren't widely accessible. Third, we aimed to fix these problems."} img={<StaticImage width={900} src={'../images/dbsadisplay.png'} alt={"work item image"} placeholder={'none'} />} linkTo={"/dbsa"} /> */}
      </div>

      <div className="swheader subheader2"><StaticImage className="swimage" src={'../images/doodlings.png'} alt={"selected studies"} placeholder={'none'} width={45} />Doodlings<div className="lines" /></div>

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