import { useState } from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import FileUploader from "../FileUploader/FileUploader";
import CustomTabs from "../CustomTabs/CustomTabs";
import PDFViewer from "../PDFViewer/PDFViewer";
import ExtractedTextResults from "../ExtractedTextResults/ExtractedTextResults";

function Body() {
  const [activeTab, setActiveTab] = useState("Vista Previa");

  const handleTabChange = (value) => setActiveTab(value);

  return (
    <div className="mx-auto  py-12">
      <div className="flex flex-row justify-between">
        {/* Lado izquierdo */}
        <div className="w-1/2 p-4">
          <h2 className="font-bold text-xl">
            Extract Text from PDF Files with Ease
          </h2>
          <p>
            Simply choose a PDF file and click the extract text button to get
            started.
          </p>
          <FileUploader />
        </div>

        {/* Lado derecho */}
        <div className="w-1/2 p-4">
          <Card>
            <CardHeader size="lg">
              <CustomTabs activeTab={activeTab} onChange={handleTabChange} />
            </CardHeader>
            <CardBody className="w-full max-h-screen overflow-auto mt-6">
              {activeTab === "Vista Previa" ? (
                <PDFViewer />
              ) : (
                <ExtractedTextResults />
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Body;
