import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import SignUpPage from "./modules/auth/screens/SignUpPage";
import LoginPage from "./modules/auth/screens/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;