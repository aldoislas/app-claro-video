import { memo } from "react";

import { PrimaryButton } from "../../atoms";

import styles from "./EpgOptions.module.scss";

export const EpgOptions = memo(() => {
  return (
    <section className={styles.options}>
      <div className={styles.buttons_container}>
        <PrimaryButton title="CANALES" onClickFunc={() => ""} />
        <PrimaryButton title="CATEGORÍAS" onClickFunc={() => ""} />
        <PrimaryButton title="FAVORITOS" onClickFunc={() => ""} />
      </div>
    </section>
  );
});
