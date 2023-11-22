import { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-responsive-modal";

import {
  EpgDescription,
  EpgOptions,
  EpgScheduleSkeleton,
  EpgSchedule,
} from "../../molecules";

import { useGetChannelsQuery } from "../../store/api/channelsApi";

import styles from "./EpgModal.module.scss";
import "react-responsive-modal/styles.css";

export const EpgModal = ({ openModal = false, onCloseModal }) => {
  const { data: { response } = {}, isLoading, error } = useGetChannelsQuery();
  const { channels = [] } = response || {};

  // console.log(error);

  const [selectedEvent, setSelectedEvent] = useState({});

  return (
    <Modal
      open={openModal}
      onClose={onCloseModal}
      center
      closeOnOverlayClick={false}
      classNames={{
        modal: `${styles.custom_modal}`,
      }}
    >
      <div className={styles.container_epg}>
        <EpgDescription selectedEvent={selectedEvent} />

        <EpgOptions />

        {isLoading ? (
          <EpgScheduleSkeleton />
        ) : (
          <EpgSchedule
            channels={channels}
            setSelectedEvent={setSelectedEvent}
          />
        )}
      </div>
    </Modal>
  );
};

EpgModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
