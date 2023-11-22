import PropTypes from "prop-types";
import { CircleButton } from "../../atoms";

import styles from "./ShowEvent.module.scss";

export const ShowEvent = ({ index, setSelectedEvent, evData, channelName }) => {
  const {
    name = "", //! all the events has no names = NA
    date_begin = "",
    date_end = "",
  } = evData;
  return (
    <section
      className={styles.event_large}
      // className={styles.event}
      onMouseEnter={() => setSelectedEvent({ ...evData, index, channelName })}
    >
      <h2>{`${name == "NA" ? "Programa " + (index + 1) : name}`}</h2>
      <p>{`${date_begin.slice(11, 16)} - ${date_end.slice(11, 16)}`}</p>

      <div className={styles.button_container}>
        <CircleButton title="..." onClickFunc={() => ""} />
      </div>
    </section>
  );
};

ShowEvent.propTypes = {
  index: PropTypes.number.isRequired,
  channelName: PropTypes.string.isRequired,
  evData: PropTypes.object.isRequired,
  setSelectedEvent: PropTypes.func.isRequired,
};
