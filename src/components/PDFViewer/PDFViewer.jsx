function PDFViewer({ file }) {
  return (
    <div className="">
      {file && (
        <iframe src={URL.createObjectURL(file)} width="100%" height="600px" />
      )}
    </div>
  );
}

export default PDFViewer;
