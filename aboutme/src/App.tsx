import Background from "./components/Background";
import PanelManager from "./components/PanelManager";

const App = () => (
  <div className="h-dvh overflow-hidden text-white flex items-center justify-center">
    <Background />
    <main className="z-10 flex justify-center w-full">
      <PanelManager />
    </main>
  </div>
);

export default App;
