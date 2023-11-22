import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./ShowChannelIcon.module.scss";

export const ShowChannelIcon = ({ number, image }) => {
  return (
    <section className={styles.chanel_sticky}>
      <p>{number}</p>
      {/* <img src={data.image} alt={data.number} /> */}
      <LazyLoadImage
        alt={""}
        src={image}
        height={90}
        width={150}
        effect="blur"
      />
    </section>
  );
};

ShowChannelIcon.propTypes = {
  number: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
