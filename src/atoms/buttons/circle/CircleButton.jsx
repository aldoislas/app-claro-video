import PropTypes from "prop-types";
import styles from "./CircleButton.module.scss";

export const CircleButton = ({ title = "...", onClickFunc }) => {
  const handleClick = () => {
    onClickFunc();
  };
  return (
    <div className={styles.circle} onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};

CircleButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
};
