import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Semantics(props) {
const {service}= props;
console.log(service)

if (service)
    return (
        <Container maxWidth="lg" sx={{ mt: 2, mb: 4, padding: 2 }}>
            <Grid container spacing={3} justifyContent="center">
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9} sx={{ textAlign: 'center' }}>
                    <Container maxWidth="xl">
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 'auto',
                            }}
                        >
                            <Typography variant="h5" maxWidth="xl" sx={{ color: "rgba(0, 0, 0, 0.6)", fontFamily: "Poppins, Roboto", fontWeight: 300, marginTop: "1vh", marginBottom: "3vh", padding: "2%" }}>
                            {service.description}
                            </Typography>
                        </Paper>
                    </Container>
                    <Container maxWidth="xl" sx={{ marginTop: "3vh", marginBottom: "3vh", padding: "5%", justifyContent: 'center' }}>
                        <img src={service.image} alt="Descrizione immagine" style={{ width: '80%', height: '80%' }} />
                    </Container>
                    <Container maxWidth="xl">
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 'auto',
                            }}
                        >
                            <Typography variant="h5" maxWidth="xl" sx={{ color: "rgba(0, 0, 0, 0.6)", fontFamily: "Poppins, Roboto", fontWeight: 300, marginTop: "1vh", marginBottom: "3vh", padding: "2%" }}>
                               {service.url ?
                               <a href={service.url} target="_blank" rel="noopener noreferrer">{service.url}</a> 
                               :
                               "not available"
                               }
                            </Typography>
                        </Paper>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}