/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from "framer-motion";
import useMousePosition from '../hooks/useMousePosition';
import LandingImagesNarrow from './LandingImagesNarrow';

const LandingImages: FC = () => {
  const { x: mouseX, y: mouseY } = useMousePosition();

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const xErin = (windowWidth - mouseX * 6) / 100;
  const yErin = (windowHeight - mouseY * 6) / 100;

  const xGP = (windowWidth - mouseX * 3) / 100;
  const yGP = (windowHeight - mouseY * 3.5) / 100;

  const xDog = (windowWidth - mouseX * 4) / 100;
  const yDog = (windowHeight - mouseY * 10) / 100;

  const xBallOne = (windowWidth - mouseX * 10) / 100;
  const yBallOne = (windowHeight - mouseY * 5) / 100;

  const xBallTwo = (windowWidth - mouseX * 2) / 100;
  const yBallTwo = (windowHeight - mouseY * 11) / 100;

  const xPaint = (windowWidth - mouseX * 9) / 100;
  const yPaint = (windowHeight - mouseY * 7) / 100;

  const xBP = (windowWidth - mouseX * 5) / 100;
  const yBP = (windowHeight - mouseY * 2.5) / 100;

  return (
    <>
      <div sx={{
        '@media screen and (max-width: 1450px)': {
          display: 'none',
        }
      }} >
        <motion.div style={{ translateX: xErin, translateY: yErin, position: 'absolute', top: 430, right: 250, zIndex: 1 }}>
          <StaticImage alt={"erin"} src={"../images/erin.png"} width={390} />
        </motion.div>

        <motion.div style={{ translateX: xGP, translateY: yGP, top: 480, right: 600, zIndex: 4, position: 'absolute' }}>
          <StaticImage alt={"greenpaint"} src={"../images/greenpaint.png"} width={450} />
        </motion.div>

        <motion.div style={{ translateX: xDog, translateY: yDog, right: 650, top: 200, position: 'absolute' }}>
          <StaticImage alt={"doggo"} src={"../images/doggo.png"} width={300} />
        </motion.div>

        <motion.div style={{ translateX: xBallOne, translateY: yBallOne, top: 250, right: 300, zIndex: 2, position: 'absolute' }}>
          <StaticImage alt={"tennisballone"} src={"../images/tennisballone.png"} width={100} />
        </motion.div>

        <motion.div style={{ translateX: xBallTwo, translateY: yBallTwo, top: 250, right: 500, zIndex: 3, position: 'absolute' }}>
          <StaticImage alt={"tennisballtwo"} src={"../images/tennisballtwo.png"} width={100} />
        </motion.div>

        <motion.div style={{ translateX: xPaint, translateY: yPaint, bottom: 650, right: 500, position: 'absolute' }}>
          <StaticImage alt={"paint"} src={"../images/paintImage.png"} width={150} />
        </motion.div>

        <motion.div style={{ translateX: xBP, translateY: yBP, top: 250, right: 300, position: 'absolute' }}>
          <StaticImage alt={"bouncepaint"} src={"../images/bouncepaint.png"} width={400} />
        </motion.div>
      </div>

      <LandingImagesNarrow />
    </>
  );
};

export default LandingImages;