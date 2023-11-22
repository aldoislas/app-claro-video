import PropTypes from "prop-types";

import styles from "./PrimaryButton.module.scss";

export const PrimaryButton = ({ title = "", onClickFunc }) => {
  const handleClick = () => {
    onClickFunc();
  };
  return (
    <button
      className={`${styles.container_button} ${styles.typeButton}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
};
