import { useEffect, useRef } from "react";
import styles from "./DownloadToolbar.module.css";

interface DownloadToolbarProps {
  selectedCount: number;
  totalCount: number;
  hasAvailableSelected: boolean;
  onSelectAll: () => void;
  onDownload: () => void;
}

function DownloadToolbar({
  selectedCount,
  totalCount,
  hasAvailableSelected,
  onSelectAll,
  onDownload,
}: DownloadToolbarProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const allSelected = selectedCount === totalCount;
  const someSelected = selectedCount > 0 && !allSelected;

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = someSelected;
    }
  }, [someSelected]);

  return (
    <div className={styles.wrapper}>
      <label>
        <span className="sr-only">
          {allSelected ? "Deselect all files" : "Select all files"}
        </span>
        <input
          type="checkbox"
          ref={checkboxRef}
          checked={allSelected}
          onChange={onSelectAll}
        />
      </label>
      <span className={styles.selectedText}>
        {selectedCount === 0 ? "None Selected" : `Selected ${selectedCount}`}
      </span>
      <button
        className={styles.downloadButton}
        onClick={onDownload}
        disabled={!hasAvailableSelected}
      >
        Download Available
      </button>
    </div>
  );
}

export default DownloadToolbar;
