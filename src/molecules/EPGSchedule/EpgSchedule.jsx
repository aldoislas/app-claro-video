import PropTypes from "prop-types";

import { ShowChannelIcon, ShowEvent } from "../../molecules";

import { createIntervalTime, getStartHour } from "../../globals/functions";

import styles from "./EpgSchedule.module.scss";

export const EpgSchedule = ({ channels = [], setSelectedEvent }) => {
  const titleGrid = () => {
    const { events = [] } = channels[0];
    const hour = getStartHour(events[0].date_begin);
    const intervalsTime = createIntervalTime(hour);
    const arrTitle = [];
    for (let i = 0; i < intervalsTime.length; i++) {
      arrTitle.push(
        <div key={i} className={styles.event_time_title}>
          <p>{intervalsTime[i]}</p>
        </div>
      );
    }
    return arrTitle;
  };

  const showChannels = () => {
    return channels.map((data) => {
      const { events = [], number, name: channelName } = data || {};

      return (
        <div key={data.id} className={styles.row_events}>
          <div className={styles.sticky_column}>
            <ShowChannelIcon image={data.image} number={number} />
          </div>
          <div className={styles.events_column}>
            {events.map((evData, index) => {
              return (
                <ShowEvent
                  key={index}
                  index={index}
                  setSelectedEvent={setSelectedEvent}
                  evData={evData}
                  channelName={channelName}
                />
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <section className={styles.container}>
      <section key="title-row" className={styles.row_title}>
        <div key="title-col" className={styles.sticky_column_title}>
          <p>Hoy</p>
        </div>
        <div key="title-events" className={styles.events_column}>
          {titleGrid()}
        </div>
      </section>
      {showChannels()}
    </section>
  );
};

EpgSchedule.propTypes = {
  channels: PropTypes.array.isRequired,
  setSelectedEvent: PropTypes.func.isRequired,
};
