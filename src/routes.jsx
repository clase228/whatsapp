import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
// import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./components/protected-route";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute/>}>
         <Route path="/"  element={<Main />} />
      </Route>
     
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};