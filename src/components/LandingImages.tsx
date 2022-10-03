/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { motion, useMotionValue, useTransform } from "framer-motion";
import useMousePosition from '../hooks/useMousePosition';

const LandingImages: FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const { x: mouseX, y: mouseY } = useMousePosition();

  x.set(mouseX);
  y.set(mouseY);

  const translateX = useTransform(x, [0, 5000], [-300, 0]);
  const translateY = useTransform(y, [0, 5000], [0, 500]);

  return (
    <div sx={{
      '@media screen and (max-width: 450px)': {
        display: 'none',
      }
    }} >
      <motion.div style={{ translateX: translateX, translateY: translateY }}>
        <StaticImage alt={"erin"} src={"../images/erin.png"} width={370} />
      </motion.div>
    </div>
  );
};

export default LandingImages;