import { useParams } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CategoryBased from '../components/categoryBased'


export default function Dashboard(props) {
  const { listData} = props;
  const { id } = useParams()
 
  //console.log(JSON.parse(sessionStorage.getItem("listData")))
  //console.log(id)
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
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <CategoryBased id={id} listData={listData}/>
              </Grid>
              {/* Recent Deposits */}             
            </Grid>
          </Container>
        </Box>
      </Box>
  );
}