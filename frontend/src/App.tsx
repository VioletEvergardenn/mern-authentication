import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
