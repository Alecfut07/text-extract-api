import FileUploader from "./components/FileUploader/FileUploader";
import PDFViewer from "./components/PDFViewer/PDFViewer";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex">
        <div className="mx-4 my-4 h-screen w-1/2 border-r">
          <div className="mt-4">
            <div className="flex">
              <FileUploader />
            </div>
          </div>
          <PDFViewer />
        </div>
      </div>
    </>
  );
}

export default App;
