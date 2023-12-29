import { Box, CircularProgress } from "@mui/material"

const Loading = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      // height: props.fullHeigth ? '100vh' : '100%'
    }}>
      <CircularProgress />
    </Box>
  )
}

export default Loading