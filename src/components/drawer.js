import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Box from "@mui/material/Box";

import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';

export default function Drawer(props) {
    const { open, drawerWidth, listData } = props;
    console.log(open);
    console.log(listData);
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            '& .MuiDrawer-paper': {
                whiteSpace: open ? 'normal' : 'nowrap', // Imposta whiteSpace a 'normal' quando aperto e 'nowrap' quando chiuso
                width: drawerWidth,
                overflowY: 'auto', // Abilita la scrollbar verticale
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                boxSizing: 'border-box',
                ...(!open && {
                    marginLeft: `-${drawerWidth}vh`,
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    width: theme.spacing(7),
                    [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(9),
                    },
                }),
            },
        }),
    );
    
    function items(element) {
        console.log(element)
        return (
            element.categories.map((item,i) =>
                <Box key={i}>
                    <Divider sx={{ my: 1 }} /><ListItemButton component={Link} to={'/category/'+item.name}>
                    <ListItemIcon>
                        {/* <AssignmentIcon /> */} <img src={item.icon} alt="Immagine" style={{ width: '60px', height: '60px' }} />
                    </ListItemIcon>
                    <ListItemText primary={item.name} /* secondary="DigiBUILD DT is a virtual representation of real-word entities, uses real-time and historical data to represent the past and present, works as simulation environment for machine learning and optimisation techniques to support the decision-making process and might also act as controlling instance of the physical object" */
                        primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "black", marginLeft: "10px" }} />
                </ListItemButton>
                </Box>)


        );
    }
    return (
        <Drawer variant="permanent" open={open}
            sx={{
                '& .MuiDrawer-paper': {
                    //marginLeft: '-350vh',
                    height: '100vh', // Imposta l'altezza del Drawer al 80% dell'altezza della viewport
                },
            }}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <img src="/logo-DigiBuild.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </Toolbar>
            <Divider />
            {
                <List component="nav">
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home"
                            primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "#20b2aa", marginLeft: "10px" }} />
                    </ListItemButton>
                    {items(listData)}
                </List>
            }
        </Drawer>
    );
}