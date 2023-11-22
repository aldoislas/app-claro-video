import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

import { genericDescription } from "../../globals/constants";
import { timeFormat } from "../../globals/functions";

import styles from "./EpgDescription.module.scss";

export const EpgDescription = ({ selectedEvent, isLoading, error }) => {
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
        {error || isLoading ? (
          <Skeleton count={1} height={30} />
        ) : (
          <h1>{`${
            name == "NA" ? `${channelName} Programa ${index + 1}` : name
          }`}</h1>
        )}
        <p>{`${date_begin.slice(11, 16)}hs a ${date_end.slice(
          11,
          16
        )}hs ${timeFormat(duration)}`}</p>
        {error || isLoading ? (
          <Skeleton count={3} />
        ) : (
          <p>{genericDescription}</p>
        )}
      </aside>
    </section>
  );
};
EpgDescription.propTypes = {
  selectedEvent: PropTypes.object.isRequired,
};
