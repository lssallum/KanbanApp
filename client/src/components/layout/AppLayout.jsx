import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import authUtils from "../../utils/authUtils";
import Loading from '../common/Loading'
import Sidebar from '../common/Sidebar'

const AppLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated();
      if (!user) {
        navigate('/login');
      } else {
        setLoading(false)
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div>
      loading ? (
      <Loading fullHeight />
    ) : (
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Box sx={{
          flexGrow: 1,
          p: 1,
          width: 'max-content'
        }}>
          <Outlet />
        </Box>
      </Box>
    )
    </div>
  );
};

export default AppLayout;
