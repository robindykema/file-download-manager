import StatusIndicator from "../StatusIndicator/StatusIndicator";
import type { FileItem } from "../../types";
import styles from "./FileRow.module.css";

interface FileRowProps {
  file: FileItem;
  isSelected: boolean;
  onToggle: (id: number) => void;
}

function FileRow({ file, isSelected, onToggle }: FileRowProps) {
  return (
    <tr
      className={`${styles.row}${isSelected ? ` ${styles.selected}` : ""}`}
      onClick={() => onToggle(file.id)}
    >
      <td>
        <input type="checkbox" checked={isSelected} readOnly />
      </td>
      <td>{file.name}</td>
      <td>{file.device}</td>
      <td>{file.path}</td>
      <td>
        <StatusIndicator status={file.status} />
      </td>
    </tr>
  );
}

export default FileRow;
