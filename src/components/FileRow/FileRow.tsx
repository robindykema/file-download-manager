import StatusIndicator from "../StatusIndicator/StatusIndicator";
import type { FileItem } from "../../types";

interface FileRowProps {
  file: FileItem;
}

function FileRow({ file }: FileRowProps) {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{file.name}</td>
      <td>{file.device}</td>
      <td>{file.path}</td>
      <td><StatusIndicator status={file.status} /></td>
    </tr>
  );
}

export default FileRow;
