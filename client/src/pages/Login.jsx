import { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Usuário"
          name="username"
          disabled={loading}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Senha"
          name="password"
          type="password"
          disabled={loading}
          
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant="outlined"
          color="success"
          type="submit"
          fullWidth
          loading={loading}
        >
          Criar conta
        </LoadingButton>
      </Box>
        <Button component={Link} to="/signup" sx={{ textTransform: "none" }}>
          Não tem uma conta? Cadastre-se
        </Button>
    </>
  );
};

export default Login;
