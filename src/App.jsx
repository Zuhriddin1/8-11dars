import Integrations from "./Integrations";
import Sidebar from "./Sidebar";
import Header from "./Header";
function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <div className="p-6">
          <Integrations />
        </div>
      </div>
    </div>
  );
}
export default App;
