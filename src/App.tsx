import Habilidades from "./components/Habilidades/Habilidades";
import Preview from "./components/Preview";

export default function App() {
  return (
    <main className="p-6 grid grid-cols-2 gap-6">
      <Habilidades />
      <Preview />
    </main>
  );
}
