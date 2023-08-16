import React, {useState} from 'react';
import './App.css';
import {Avatar, Box, Button, Card, Grid, IconButton, Paper, TextField, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';


const PASSCODE = '3355';

function App() {
  
  const [passcode, setPasscode] = useState<string>('');
  
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
                "icon": <LinkedInIcon sx={{height: 50, width: 50, color: '#0A66C2'}}/>,
                "link": "https://www.linkedin.com/in/roopak-srinivasan/"
              },
              {
                "title": "Follow",
                "icon": <InstagramIcon sx={{height: 50, width: 50, color: '#E4405F'}}/>,
                "link": "https://www.instagram.com/r.o.o.p.a.k.s/"
              },
              {
                "title": "Friend",
                "icon": <FacebookIcon sx={{height: 50, width: 50, color: '#1778F2'}}/>,
                "link": "https://www.facebook.com/roopak.srinivasan/"
              },
              {
                "title": "Fork",
                "icon": <GitHubIcon sx={{height: 50, width: 50, color: '#171515'}}/>,
                "link": "https://github.com/roopak1997"
              },
            
            ].map((i) => (
              
              <Grid item container xs={3} paddingBottom={1} justifyContent={"center"}>
                
                <IconButton
                  href={i.link}
                >
                  {i.icon}
                </IconButton>
              </Grid>
            
            ))
          }
        </Grid>
        
        
        <Grid xs={12} container alignItems={"center"} justifyContent={"center"} paddingTop={2}>
          Contact
        </Grid>
        
        
        {
          passcode === PASSCODE ?
            <Grid item  container xs={12} alignItems={"center"} justifyContent={"center"}>
              <Grid item xs={3} container alignItems={"center"} justifyContent={"end"}>
                <IconButton href={"tel:+16073277182"}>
                  <AddIcCallIcon sx={{width: 40, height: 40, color: "black"}}/>
                </IconButton>
              </Grid>
              <Grid item xs={9} container alignItems={"center"} justifyContent={"start"} paddingLeft={2}>
                <Typography variant={"body2"}>+1 607 327 7182</Typography>
              </Grid>
              <Grid item xs={3} container alignItems={"center"} justifyContent={"end"}>
                <IconButton href={"https://wa.me/+16073277182"}>
                  <WhatsAppIcon sx={{width: 40, height: 40, color: "#25D366"}}/>
                </IconButton>
              </Grid>
              <Grid item xs={9} container alignItems={"center"} justifyContent={"start"} paddingLeft={2}>
                <Typography variant={"body2"}>+1 607 327 7182</Typography>
              </Grid>
              <Grid item xs={3} container alignItems={"center"} justifyContent={"end"}>
                <IconButton href={"mailto: rs2386@cornell.edu.com"}>
                  <EmailIcon sx={{width: 40, height: 40, color: "black"}}/>
                </IconButton>
              </Grid>
              <Grid item xs={9} container alignItems={"center"} justifyContent={"start"} paddingLeft={2}>
                <Typography variant={"body2"}>rs2386@cornell.edu</Typography>
              </Grid>
            </Grid>
            :
            <Grid xs={12} container justifyContent={"center"} alignItems={"center"}>
              <TextField
                type={"number"}
                onChange={(v) => {
                  setPasscode(v.target.value);
                }}
                value={passcode}
                placeholder={'Passcode'}
                sx={{
                  width: 100
                }}
              />
            </Grid>
        }
      
      
      </Card>
    </Box>
  );
}

export default App;
