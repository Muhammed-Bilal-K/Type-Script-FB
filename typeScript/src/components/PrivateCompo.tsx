import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
 const token = localStorage.getItem('token');
  return token ?  <Navigate to="/" /> : <Outlet />;
}