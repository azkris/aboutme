import Background from "./components/Background"
import CentralPanel from "./components/CentralPanel"

function App() {

  return (
    <div className="relative h-full overflow-hidden text-white">
      <Background />

      <CentralPanel />
    </div>
  )
}

export default App
