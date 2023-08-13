import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Avatar, Box, Button, Card, Grid, Paper, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  return (
    
    <Box
      sx={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingX: "10%",
      }}
    >
      
      
      <Card sx={{
        maxWidth: "500px",
        borderRadius: "25px",
        padding: "5%",
        opacity: 0.95,
        boxShadow: "0px 0px 15px 15px rgba(255,255,255, 1)"
      }}>
        
        <Grid container alignItems={"center"} justifyContent={"center"}>
          
          <Grid item xs={12} paddingY={3} container alignItems={"center"} justifyContent={"center"}>
            <Avatar
              variant={"square"}
              sx={{
                height: "150px",
                width: "200px",
                borderRadius: "25px",
              }}
              src={'https://storage.googleapis.com/trailwise-assets/pic.jpg'}
            />
          </Grid>
          
          <Grid xs={12} paddingBottom={3}>
            <Typography
              sx={{
                fontSize: "3rem",
                textAlign: "center"
              }}
              variant={"h2"}>Roopak Srinivasan</Typography>
          </Grid>
          
          
          {
            [
              {
                "title": "Connect",
                "icon": <LinkedInIcon/>,
                "link": "https://www.linkedin.com/in/roopak-srinivasan/"
              },
              {
                "title": "Follow",
                "icon": <InstagramIcon/>,
                "link": "https://www.instagram.com/r.o.o.p.a.k.s/"
              },
              {
                "title": "Friend",
                "icon": <FacebookIcon/>,
                "link": "https://www.facebook.com/roopak.srinivasan/"
              },
              {
                "title": "Fork",
                "icon": <GitHubIcon/>,
                "link": "https://github.com/roopak1997"
              },
            
            ].map((i) => (
              
              <Grid item container xs={12} paddingBottom={1} justifyContent={"center"}>
                <a href={i.link} style={{
                  textDecoration: "none",
                }} target={"_blank"}>
                <Paper
                  variant={"outlined"}
                  sx={{
                    border: '4px solid black',
                    borderRadius: "50px",
                    padding: "0.5rem",
                    width: "200px",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white !important",
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 5px rgba(1, 1, 1, 0.4)"
                    }
                  }}
                >
                  <Grid container justifyContent={"center"} alignItems={"center"} paddingX={1}>
                    
                    <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
                      {i.icon}
                    </Grid>
                    
                    <Grid item xs={10} sx={{textAlign: "center"}}>
                      {i.title}
                    </Grid>
                  
                  </Grid>
                </Paper>
                </a>
              </Grid>
            
            ))
          }
        </Grid>
      
      </Card>
    </Box>
  );
}

export default App;
