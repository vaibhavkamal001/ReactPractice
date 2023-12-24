import BasicForm from "./components/BasicForm";
import { ValidateFormCtxProvider } from "./components/context/ValidateFromCtx";

function App() {
  return (
    <div className="app">
      <ValidateFormCtxProvider>
        <BasicForm />
      </ValidateFormCtxProvider>
    </div>
  );
}

export default App;
