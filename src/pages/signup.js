import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;



export default function Signup(props) {
  const { listData } = props;
  const apps = [];
  if (listData && listData.categories.length > 0)
    for (let index = 0; index < listData.categories.length; index++) {
      let names = listData.categories[index].services.map(a => a.name)
      names.forEach(element => {
        apps.push(element)
      });
    }
  const [inputs, setInputs] = useState([]);
  console.log(apps);


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, password,inputs)
  }
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInputs(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

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
          marginTop: '70px'
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, padding: 2 }}>
          <Grid container spacing={3} justifyContent="center" >
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9} >
              {apps.length > 0 && (
                <Container maxWidth="xl">
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 'auto',
                    }}
                  >

                    <h2>Register Form</h2>
                    <form autoComplete="off" onSubmit={handleSubmit} >
                      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                          type="text"
                          variant='outlined'
                          color='secondary'
                          label="First Name"
                          onChange={e => setFirstName(e.target.value)}
                          value={firstName}
                          fullWidth
                          required
                        />
                        <TextField
                          type="text"
                          variant='outlined'
                          color='secondary'
                          label="Last Name"
                          onChange={e => setLastName(e.target.value)}
                          value={lastName}
                          fullWidth
                          required
                        />
                      </Stack>
                      <TextField
                        type="email"
                        variant='outlined'
                        color='secondary'
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                      />
                      <TextField
                        type="password"
                        variant='outlined'
                        color='secondary'
                        label="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        required
                        fullWidth
                        sx={{ mb: 4 }}
                      />
                      <TextField
                        select
                        name="select"
                        label="Select app"
                        variant="outlined"
                        InputLabelProps={{
                          component: 'span',
                        }}
                        SelectProps={{
                          multiple: true,
                          value: inputs,
                          onChange: (e) => handleChange(e),
                          renderValue: (selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {selected.map((value) => (
                                <Chip key={value} label={value} />
                              ))}
                            </Box>
                          ),
                          style: {
                            maxHeight: `${ITEM_HEIGHT} * 4.5 + ${ITEM_PADDING_TOP}`
                          }
                        }}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                      >
                        {apps.map((option) => (
                          <MenuItem key={option} value={option} >
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>




                      <Button variant="outlined" color="primary" type="submit">Register</Button>
                    </form>


                  </Paper>
                </Container>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>

  );
}