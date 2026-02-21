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

  const allFileIds = files.map((file) => file.id);
  const selectedFiles = files.filter((file) => selectedIds.includes(file.id));
  const hasAvailableSelected = selectedFiles.some(
    (file) => file.status === "available",
  );

  const handleToggle = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleDownload = () => {
    const availableFiles = selectedFiles.filter(
      (file) => file.status === "available",
    );
    const unavailableFiles = selectedFiles.filter(
      (file) => file.status !== "available",
    );

    const availableList = availableFiles
      .map((file) => `Device: ${file.device}\nPath: ${file.path}`)
      .join("\n\n");

    const messageParts: string[] = ["Download initiated:\n\n" + availableList];

    if (unavailableFiles.length > 0) {
      const unavailableList = unavailableFiles
        .map((file) => `Device: ${file.device}\nPath: ${file.path}`)
        .join("\n\n");
      messageParts.push(
        "The following files could not be downloaded because they aren't available yet:\n\n" +
          unavailableList,
      );
    }

    alert(messageParts.join("\n\n---\n\n"));
  };

  const handleSelectAll = () => {
    const allSelected = selectedIds.length === files.length;
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(allFileIds);
    }
  };

  return (
    <div>
      <DownloadToolbar
        selectedCount={selectedFiles.length}
        totalCount={files.length}
        hasAvailableSelected={hasAvailableSelected}
        onSelectAll={handleSelectAll}
        onDownload={handleDownload}
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
