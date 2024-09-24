import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
//import Login from './pages/login';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from './components/footer';
//import PrivateRoute from './utils/PrivateRoute';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Categories from './pages/Category'
import Header from './components/appBar'
import Drawer from './components/drawer';
import Signup from './pages/signup';



// import Link from '@mui/material/Link';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import HomeIcon from '@mui/icons-material/Home';



const defaultTheme = createTheme();
function App() {
  const [open, setOpen] = useState(false);
  //const [auth, setAuth] = useState(true);
  const [listData, setData] = useState(null);

  /* useEffect(() => {
    console.log(listData);
  }, [listData]); */

  const drawerWidth = 350;
  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      // paddingTop: theme.spacing(3),
      width: '100%',
      marginLeft: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),

      }),
    }),
  );



  function PageNotFound() {
    return (
        <Box sx={{ flexGrow: 1, marginTop:'30vh', textAlign: "center" ,   height: '59vh'}}>
          <Container maxWidth="xl">
            <Typography variant="h2">
              404 Page not found
            </Typography>
          </Container>
        </Box>
    );
  }
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

        <Header open={open} toggleDrawer={toggleDrawer} drawerWidth={350} auth={true} listData={listData} setData={setData} />

        <Main open={open}>
          {true && listData && (
            <Drawer open={open} drawerWidth={350} listData={listData} />
          )}
          <Routes>
            <Route
              path="/"
              element={
                // <PrivateRoute token={setAuth}>
                <Home listData={listData} />
                // </PrivateRoute>
              }
            />
            <Route
              path="/category/:id"
              element={
                // <PrivateRoute token={setAuth}>
                <Categories listData={listData} />
                // </PrivateRoute>
              }
            />
            {/* <Route path="/login" element={<Login />}>
            </Route> */}
             <Route
              path="/signup"
              element={
                // <PrivateRoute token={setAuth}>
                <Signup listData={listData} />
                // </PrivateRoute>
              }
            />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>

        </Main>
        {true ? (
          <Footer open={open} />
        ) :
          <Footer open={false} />}


      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
