import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Body from "./components/Body/Body";
import CustomFooter from "./components/CustomFooter/CustomFooter";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen relative">
        <CustomNavbar />
        <Body />
        <CustomFooter />
      </div>
    </>
  );
}

export default App;
