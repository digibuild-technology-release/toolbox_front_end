
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';


export default function Dashboard() {
   
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          marginTop:'70px'
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, padding: 2 }}>
          <Grid container spacing={3} justifyContent="center" >
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9} >
              <Container maxWidth="xl">
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'auto',
                  }}
                >
                  <Typography variant="h5"
                    sx={{ color: "#20b2aa", fontFamily: "Poppins, Roboto", fontSize: "30px", fontWeight: 700, textAlign: 'center' }}>
                    Homepage
                  </Typography>
                  <Typography variant="h4" maxWidth="xl"
                    sx={{ color: "rgba(0, 0, 0, 0.6)", fontFamily: "Poppins, Roboto", fontWeight: 400, textAlign: 'center', marginTop: "1vh", padding: "2%" }}>
                    Welcome to DigiBUILD ToolBox
                  </Typography>
                  <Typography variant="h5" maxWidth="xl" sx={{ color: "rgba(0, 0, 0, 0.6)", fontFamily: "Poppins, Roboto", fontWeight: 300, textAlign: 'center', marginTop: "1vh", marginBottom: "3vh", padding: "2%", margin: "0 auto" }}>
                    DigiBUILD provides an open, interoperable and cloud-based toolbox to transform current ‘silo’ buildings into digital, interoperable and smarter ones, based on consistent and reliable data, supporting better-informed decision-making for performance monitoring & assessment, planning of building infrastructure, policy making and de-risking investments.
                  </Typography>

                </Paper>
              </Container>
              <Container maxWidth="xl" sx={{ marginTop: "1vh", marginBottom: "1vh", padding: "5%" }}>
                <img src="/homepage1.png" alt="Descrizione immagine" style={{ width: "100%", height: "auto" }} />
              </Container>
              <Container maxWidth="xl" sx={{ marginTop: "1vh", marginBottom: "1vh", padding: "5%" }}>
                <img src="/homepage2.png" alt="Descrizione immagine" style={{ width: "100%", height: "auto" }} />
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>

  );
}