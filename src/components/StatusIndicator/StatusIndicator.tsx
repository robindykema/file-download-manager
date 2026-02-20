import type { FileStatus } from "../../types";

interface StatusIndicatorProps {
  status: FileStatus;
}

function StatusIndicator({ status }: StatusIndicatorProps) {
  return <span>{status}</span>;
}

export default StatusIndicator;
