import FileRow from "../FileRow/FileRow";
import type { FileItem } from "../../types";
import styles from "./FileTable.module.css";

interface Column {
  label: string;
}

interface FileTableProps {
  files: FileItem[];
  columns: Column[];
  selectedIds: number[];
  onToggle: (id: number) => void;
}

function FileTable({ files, columns, selectedIds, onToggle }: FileTableProps) {
  return (
    <table className={styles.table}>
      <caption className="sr-only">Downloadable files</caption>
      <thead>
        <tr>
          <th scope="col">
            <span className="sr-only">Select</span>
          </th>
          {columns.map((col) => (
            <th key={col.label} scope="col">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {files.map((file) => (
          <FileRow file={file} />
        ))}
      </tbody>
    </table>
  );
}

export default FileTable;
