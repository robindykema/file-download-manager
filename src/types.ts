export interface FileItem {
  id: number;
  name: string;
  device: string;
  path: string;
  status: FileStatus;
}

export type FileStatus = "available" | "scheduled";

