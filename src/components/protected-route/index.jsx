import { Navigate,Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProtectedRoute = ({ redirectPath = "/" }) => {
   const isAllowed = localStorage.getItem('idInstance')
   if (!isAllowed) {
     return <Navigate to={redirectPath} replace={true} />;
   }
  return <Outlet/>;
};