import { Outlet } from "react-router-dom";
import Header from "@/components/ui/common/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* You can add Footer component here later */}
    </div>
  );
}

export default App;
