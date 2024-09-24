import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Detail from '../components/Detail'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    //console.log(props)
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            //hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function findCategory(array, name) {
    return array.find((item) => item.name === name);
}
export default function BasicTabs(props) {
    const { id, listData } = props;
    console.log(id)
    console.log(listData)
    const [services, setServices] = useState([]);
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (listData && listData.categories.length > 0) {
            let tempService = findCategory(listData.categories, id);
            setServices(tempService.services);
        }
        setValue(0);

    }, [listData,id]);
    console.log(services)

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };
    function tabElement(element) {
        //console.log(element)
        return (
            <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example">
                {element.map((item, i) =>
                    <Tab key={i} label={<Typography variant="body1" fontWeight="bold">{item.name}</Typography>} {...a11yProps(i)} />)
                }
            </Tabs>


        );
    }
    function tabSelected(value) {
        console.log(value);
        return (
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TabPanel value={value} index={value}>
                    <Detail service={services[value]} />
                </TabPanel>
            </Grid>
        )
    }
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        {tabElement(services)}
                    </Box>
                </Grid>
                {tabSelected(value)}
            </Grid>
        </Box>

    );
}