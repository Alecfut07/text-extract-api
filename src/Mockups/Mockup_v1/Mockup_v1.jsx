import FileUploader from "../../components/FileUploader/FileUploader";
import PDFViewer from "../../components/PDFViewer/PDFViewer";
import ExtractedText from "../../components/ExtractedText/ExtractedText";

function Mockup_v1() {
  return (
    <div className="flex">
      <div className="mx-4 my-4 h-screen w-1/2 border-r">
        <div className="mt-4">
          <div className="flex">
            <FileUploader />
          </div>
        </div>
        <PDFViewer />
      </div>
      <hr className="my-auto" />
      <div className="mx-4 my-4 h-screen w-1/2">
        <div>
          <ExtractedText />
        </div>
      </div>
    </div>
  );
}

export default Mockup_v1;
