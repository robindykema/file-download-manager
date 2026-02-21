import type { FileStatus } from "../../types";
import styles from "./StatusIndicator.module.css";

interface StatusIndicatorProps {
  status: FileStatus;
}

function StatusIndicator({ status }: StatusIndicatorProps) {
  return (
    <span className={styles.wrapper}>
      {status === "available" && (
        <span className={styles.dot} aria-hidden="true" />
      )}
      <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </span>
  );
}

export default StatusIndicator;
