import { Suspense } from "react";
import Router from "../src/router/index"

function App() {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
}

export default App;
