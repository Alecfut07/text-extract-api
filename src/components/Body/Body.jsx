import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Swal from "sweetalert2";
import FileUploader from "../FileUploader/FileUploader";
import CustomTabs from "../CustomTabs/CustomTabs";
import PDFViewer from "../PDFViewer/PDFViewer";
import ExtractedTextObjectResults from "../ExtractedTextObjectResults/ExtractedTextObjectResults";
import ExtractedTextStringResults from "../ExtractedTextStringResults/ExtractedTextStringResults";
import CustomStepper from "../CustomStepper/CustomStepper";
import PDFService from "../../services/PDFService";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Body() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [textExtracted, setTextExtracted] = useState(false);
  const [activeTab, setActiveTab] = useState("Vista Previa");

  const initialValues = {
    file: null,
    search: "",
  };

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
    // setTextExtracted(false);
    setData([]);
    setActiveTab("Vista Previa");
  };

  // Parsear Markdown a un arreglo de objetos.
  const parseJSON = (result) => {
    // Extraiga la cadena JSON del generated_content.
    const jsonString = result.generated_content.match(/\[.*\]/s)[0];
    console.log("jsonString: ", jsonString);
    // Elimina los indicadores del bloque de código Markdown.
    const cleanedJsonString = jsonString.replace(/^```json|```$/g, "");
    console.log("cleanedJsonString: ", cleanedJsonString);
    // Aplicar parse al JSON data.
    const jsonData = JSON.parse(cleanedJsonString);
    console.log("jsonData: ", jsonData);
    setData(jsonData);
  };

  const convertPDF = async (values) => {
    try {
      setLoading(true);
      const result = await PDFService.convertirPDF(values.file, values.search);
      console.log(result);
      // parseJSON(result);
      setData(result);
      // setTextExtracted(true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Extracción del texto",
        text: "Fue exitosa!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error",
        text: "Algo salió mal!",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
    values.file = file;
    setActiveTab("Texto Extraído");
    convertPDF(values);
  };

  const handleTabChange = (value) => setActiveTab(value);

  return (
    <div className="mx-auto  py-12">
      <div className="flex flex-row justify-between">
        {/* Lado izquierdo */}
        <div className="flex w-1/2 justify-center">
          <div className="p-4">
            <h2 className="text-center text-xl font-bold">
              Extraiga texto de archivos PDF con facilidad
            </h2>
            <p className="text-center">
              Simplemente elija un archivo PDF, especificar en su busqueda y
              haga clic en el botón extraer texto para comenzar.
            </p>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form>
                  <CustomStepper onChange={handleFileChange} file={file} />
                </Form>
              )}
            </Formik>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="w-1/2 p-4">
          <Card>
            <CardHeader size="lg">
              <CustomTabs activeTab={activeTab} onChange={handleTabChange} />
            </CardHeader>
            <CardBody className="mt-6 max-h-screen w-full overflow-auto">
              {activeTab === "Vista Previa" ? (
                <PDFViewer file={file} />
              ) : (
                <LoadingSpinner
                  loading={loading}
                  Componente={<ExtractedTextStringResults data={data} />}
                />
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Body;
