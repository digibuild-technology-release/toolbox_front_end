import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Toolbar from '@mui/material/Toolbar';

import {  useEffect,useCallback } from 'react';
import DataServices from '../services/dataService';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useNavigate } from 'react-router-dom';


export default function Header(props) {
    const {open, drawerWidth, toggleDrawer , auth ,listData,setData} = props;
    const navigate = useNavigate();
   
    const getDataServer = useCallback(() => {
        DataServices.getdata()
        .then(function (response){
        // console.log(response.data)
          setData(response.data)
          sessionStorage.setItem("listData", JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        })
      },[setData]);
      useEffect(() => { 
        console.log(listData)
        if (auth&&!listData)
          {
            console.log(!auth&&!listData);
            getDataServer();
            
          }
      },[getDataServer,listData,auth]);

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
    const redirectTosubscription = () => {
		//console.log("redirect")

		navigate('/signup')
		//this.props.history.push('/')
	}
    return ( 
    <AppBar position="absolute" open={open} sx={{ backgroundColor: "#20b2aa" }}>
        <Toolbar
            sx={{
                pr: '24px', // keep right padding when drawer closed
            }}
        >
            { auth ? ( 
            <><IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => toggleDrawer()}
                        sx={{
                            marginRight: '36px',
                            ...(open),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, marginLeft: '15vh' }}
                    >
                            DigiBUILD ToolBox
                        </Typography>
                        <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => redirectTosubscription()}
                        sx={{
                            marginRight: '36px',
                            ...(open),
                        }}
                    >
                        <AppRegistrationIcon />
                    </IconButton></>
            ):(
                <><Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1, textAlign:'center'}}
                        >
                                DigiBUILD ToolBox
                            </Typography></>
                )

        }

        </Toolbar>
    </AppBar>
    );
}