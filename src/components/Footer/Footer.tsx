/** @jsxImportSource theme-ui */
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react'

const Footer: FC = () => {

    return (
      <div className="footer">
        <StaticImage src={"../../images/doggo.png"} alt={"eevee"} placeholder={'none'} width={130} />
        <div sx={{marginTop: -2}}>Made with ♡ using Gatsby</div>
      </div>
    );
};

export default Footer;