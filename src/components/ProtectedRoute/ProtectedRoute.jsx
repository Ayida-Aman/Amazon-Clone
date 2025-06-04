import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { DataContext } from '../DataProvider/DataProvider';
function ProtectedRoute({ children, msg, redirect }) {
    // eslint-disable-next-line no-unused-vars
    const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return children;
}

export default ProtectedRoute