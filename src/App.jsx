import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full px-4 sm:py-12">
      <div className="max-w-sm sm:max-w-md w-full mx-auto bg-gray-900 rounded-2xl shadow-md overflow-hidden">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}