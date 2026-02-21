import { useState } from "react";
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
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    const allSelected = selectedIds.length === files.length;
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(files.map((f) => f.id));
    }
  };

  return (
    <div>
      <DownloadToolbar
        selectedCount={selectedIds.length}
        totalCount={files.length}
        onSelectAll={handleSelectAll}
      />
      <FileTable
        files={files}
        columns={columns}
        selectedIds={selectedIds}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default DownloadManager;
