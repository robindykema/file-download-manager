import {
  DownloadToolbar,
  FileTable,
  FileRow,
  StatusIndicator,
} from "../components";

interface DownloadManagerProps {}

function DownloadManager({}: DownloadManagerProps) {
  return (
    <div>
      <DownloadToolbar />
      <FileTable />
      <FileRow />
      <StatusIndicator />
    </div>
  );
}

export default DownloadManager;
