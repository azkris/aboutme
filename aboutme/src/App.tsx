import Background from "./components/Background";
import PanelManager from "./components/PanelManager";

const App = () => (
  <div className="relative h-dvh overflow-hidden text-white flex items-center justify-center">
    <Background />
    <main className="relative z-10 flex justify-center w-full">
      <PanelManager />
    </main>
  </div>
);

export default App;
