import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";

export default function App() {
  return (
    <div className="max-w-md w-full bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
      <Info />
      <About />
      <Interests />
    </div>
  );
}