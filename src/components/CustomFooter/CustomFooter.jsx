import { Typography } from "@material-tailwind/react";

function CustomFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex items-center justify-center border-t border-blue-gray-50 py-6 text-center bg-white">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 Text Extract API
      </Typography>
    </footer>
  );
}

export default CustomFooter;
