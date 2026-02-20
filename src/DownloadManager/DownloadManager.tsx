import { DownloadToolbar, FileTable } from "../components";
import type { FileItem } from "../types";

const columns = [
  { label: "Name" },
  { label: "Device" },
  { label: "Path" },
  { label: "Status" },
];

interface DownloadManagerProps {
  files: FileItem[];
}

function DownloadManager({ files }: DownloadManagerProps) {
  const handleToggle = (id: number) => {
    console.log(id);
  };

  return (
    <div>
      <DownloadToolbar />
      <FileTable
        files={files}
        columns={columns}
        selectedIds={[]}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default DownloadManager;
