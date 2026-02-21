import styles from "./DownloadToolbar.module.css";

interface DownloadToolbarProps {
  selectedCount: number;
  totalCount: number;
  onSelectAll: () => void;
}

function DownloadToolbar({
  selectedCount,
  totalCount,
  onSelectAll,
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
    </div>
  );
}

export default DownloadToolbar;
