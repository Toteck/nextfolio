import { Home } from "./pages/Home.js";
import { ResumeProvider } from "./context/CurriculoContext";

export default function App() {
  return (
    <ResumeProvider>
      <Home />
    </ResumeProvider>
  );
}
