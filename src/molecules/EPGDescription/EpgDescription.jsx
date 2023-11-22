import PropTypes from "prop-types";

import { genericDescription } from "../../globals/constants";
import { timeFormat } from "../../globals/functions";

import styles from "./EpgDescription.module.scss";

export const EpgDescription = ({ selectedEvent }) => {
  const {
    channelName = "",
    name = "", //! all the events has no names = NA
    date_begin = "",
    date_end = "",
    index = 0,
    duration = "",
  } = selectedEvent || {};
  return (
    <section className={styles.description_container}>
      <aside className={styles.description_event}>
        <h1>{`${
          name == "NA" ? `${channelName} Programa ${index + 1}` : name
        }`}</h1>
        <p>{`${date_begin.slice(11, 16)}hs a ${date_end.slice(
          11,
          16
        )}hs ${timeFormat(duration)}`}</p>
        <p>{genericDescription}</p>
      </aside>
    </section>
  );
};
EpgDescription.propTypes = {
  selectedEvent: PropTypes.object.isRequired,
};
