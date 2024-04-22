import axios from "axios";
import { host } from "../api/host";
import { CONVERTIR_PDF } from "../utils/values";

const PDFService = {
  convertirPDF: async (file, search) => {
    const formData = new FormData();
    formData.append("pdf_file", file);
    formData.append("text_user_input", search);

    const axiosConfig = {
      headers: {
        accept: "application/json",
        "x-requested-with": "XMLHttpRequest",
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const { data } = await axios.post(
        `${host}${CONVERTIR_PDF}`,
        formData,
        axiosConfig,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default PDFService;
