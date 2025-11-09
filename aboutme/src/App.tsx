import Background from "./components/Background";
import CentralPanel from "./components/CentralPanel";

const App = () => (
  <div className="h-dvh overflow-hidden text-white flex items-center justify-center">
    <Background />
    <main className="z-10 w-full">
      <CentralPanel />
    </main>
  </div>
);

export default App;
