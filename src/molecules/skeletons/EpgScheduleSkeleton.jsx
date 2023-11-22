import Skeleton from "react-loading-skeleton";

import styles from "./EpgScheduleSkeleton.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export const EpgScheduleSkeleton = () => {
  return (
    <section className={styles.line_container}>
      <Skeleton height={40} />
      <Skeleton count={6} />
    </section>
  );
};
