import { useState, useEffect } from "react";
import { Navbar, Collapse, Typography } from "@material-tailwind/react";

function CustomNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );

    // Remueve el listener del evento resize cuando el componente se desmonte para evitar memory leaks
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Text Extract API
        </Typography>
      </div>
      <Collapse open={openNav}>
        <div className="flex items-center gap-x-1"></div>
      </Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
