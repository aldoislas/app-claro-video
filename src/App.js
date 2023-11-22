import { useState } from "react";

import { PrimaryButton } from "./atoms";
import { EpgModal } from "./organisms";

import styles from "./App.module.scss";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return (
    <div className={styles.container_app}>
      <PrimaryButton title="Mostrar EPG" onClickFunc={onOpenModal} />
      {openModal && (
        <EpgModal openModal={openModal} onCloseModal={onCloseModal} />
      )}
    </div>
  );
}

export default App;
