/** @jsxImportSource theme-ui */
import About from '../components/About/About';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';

const IndexPage = () => {

  return (
    <>
      {/* <meta name="viewport" content="width=400, initial-scale=.65" /> */}
      <NavBar />
      <div className="headerabout">
        <Header />
        <About />
      </div>
    </>
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