import Image from "next/image";
import styles from "./infobox.module.css";

export default function InfoBox(props) {
  return (
    <div className={styles.infoBox}>
      <div className={styles.infoBoxSection}>
        <h2>{props.info.name}</h2>
        {props.info.image ? (
          <Image
            src={props.info.image}
            alt={props.info.alt}
            width={100}
            height={100}
          />
        ) : null}
      </div>
      <div className={styles.infoBoxSection}>
        <p>Name: {props.info.name}</p>
        <p>Origin: {props.info.origin}</p>
      </div>
      <div className={styles.infoBoxSection}>
        <p>
          Length: {props.info?.length}
          {props.info?.length_unit}
        </p>
        <p>
          Width: {props.info?.width}
          {props.info?.width_unit}
        </p>
        <p>
          Length: {props.info?.height}
          {props.info?.height_unit}
        </p>
      </div>
      <div className={styles.infoBoxSection}>
        <p>Role/Class: {props.info?.role}</p>
      </div>
      <div className={styles.infoBoxSection}>
        <p className={styles.weaponry}>Weaponry: {props.info?.weaponry}</p>
      </div>
    </div>
  );
}
