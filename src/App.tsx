import { Home } from "./pages/Home.js";
import { ResumeProvider } from "./curriculoContext";

export default function App() {
  return (
    <ResumeProvider>
      <Home />
    </ResumeProvider>
  );
}
