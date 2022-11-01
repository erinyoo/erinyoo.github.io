/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from "framer-motion";
import useMousePosition from '../../hooks/useMousePosition';

const LandingImages: FC = () => {
  const isBrowser = typeof window !== "undefined"

  if (!isBrowser) return null;

  const { x: mouseX, y: mouseY } = useMousePosition();

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const xErin = (windowWidth - mouseX * -2) / 100;
  const yErin = (windowHeight - mouseY * 2) / 100;

  const xGP = (windowWidth - mouseX * 1.4) / 100;
  const yGP = (windowHeight - mouseY * 2) / 100;

  const xDog = (windowWidth - mouseX * 4) / 100;
  const yDog = (windowHeight - mouseY * 4) / 100;

  const xBallOne = (windowWidth - mouseX * 5) / 100;
  const yBallOne = (windowHeight - mouseY * 3) / 100;

  const xBallTwo = (windowWidth - mouseX * 2) / 100;
  const yBallTwo = (windowHeight - mouseY * 3) / 100;

  const xBP = (windowWidth - mouseX * 6) / 100;
  const yBP = (windowHeight - mouseY * 2.5) / 100;

  return (
    <>
      <motion.div style={{ translateX: xErin, translateY: yErin, position: 'absolute', top: 250, right: 10, zIndex: 1 }}>
        <StaticImage alt={"erin"} src={"../../images/erin.png"} placeholder={'none'} width={390} />
      </motion.div>

      <motion.div style={{ translateX: xGP, translateY: yGP, top: 300, right: 350, zIndex: 4, position: 'absolute' }}>
        <StaticImage alt={"greenpaint"} src={"../../images/greenpaint.png"} placeholder={'none'} width={450} />
      </motion.div>

      <motion.div style={{ translateX: xDog, translateY: yDog, left: 100, top: 450, position: 'absolute' }}>
        <StaticImage alt={"doggo"} src={"../../images/doggo.png"} placeholder={'none'} width={300} />
      </motion.div>

      <motion.div style={{ translateX: xBallOne, translateY: yBallOne, top: 550, left: 440, zIndex: 2, position: 'absolute' }}>
        <StaticImage alt={"tennisballone"} src={"../../images/tennisballone.png"} placeholder={'none'} width={100} />
      </motion.div>

      <motion.div style={{ translateX: xBallTwo, translateY: yBallTwo, top: 520, left: 620, zIndex: 3, position: 'absolute' }}>
        <StaticImage alt={"tennisballtwo"} src={"../../images/tennisballtwo.png"} placeholder={'none'} width={100} />
      </motion.div>

      <motion.div style={{ translateX: xBP, translateY: yBP, top: 490, left: 500, position: 'absolute' }}>
        <StaticImage alt={"bouncepaint"} src={"../../images/bouncepaint.png"} placeholder={'none'} width={400} />
      </motion.div>
    </>
  );
};

export default LandingImages;