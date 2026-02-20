import DownloadManager from "./DownloadManager/DownloadManager";
import { fileData } from "./fileData";

function App() {
  return <DownloadManager files={fileData} />;
}

export default App;
