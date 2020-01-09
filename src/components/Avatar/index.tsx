import React from "react";
import styles from "./index.module.scss";

interface AvatarProps {
  url: string;
  alt: string;
}

function Avatar(props: AvatarProps) {
  return (
    <img className={styles.thumbnail} src={props.url} alt={props.alt}></img>
  );
}

export default Avatar;
