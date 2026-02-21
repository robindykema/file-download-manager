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
  const allSelected = selectedCount === totalCount;

  return (
    <div className={styles.wrapper}>
      <label>
        <span className="sr-only">
          {allSelected ? "Deselect all files" : "Select all files"}
        </span>
        <input type="checkbox" checked={allSelected} onChange={onSelectAll} />
      </label>
      <span className={styles.selectedText}>
        {selectedCount === 0 ? "None Selected" : `Selected ${selectedCount}`}
      </span>
      <button className={styles.downloadButton} onClick={onDownload} disabled={!hasAvailableSelected}>
        Download Selected
      </button>
    </div>
  );
}

export default DownloadToolbar;
