import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Button, Container, IconButton, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import { DeleteOutlined } from '@material-ui/icons'
import msiLogo from '../img/MSI 2022 TableWelcome.png'
import msiTableLoc from '../img/table_loc.jpeg'
import { useHistory } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import useFetch from '../useFetch'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(3),
    },
  }));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function GuestCard({ guest }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    const history = useHistory();
    const state = {
        button: 1
      };

    const onSubmit = (e) => {
        e.preventDefault();
        if (state.button === 1) {
            history.push('/TableLocation');
        }
        if (state.button === 2) {
            history.push('/');
        }
    }
  return (
    <Container maxWidth="md">
        <Card

        style={{ 
            marginTop: 10,
            width: "auto",
            height:"auto"
         }}
        >
        <CardMedia
               component="img"
               sx={{
               height: 233,
               width: 100,
               maxHeight: { xs: 233, md: 167 },
               maxWidth: { xs: 350, md: 250 },
               }}
               src={msiLogo}
        />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align='center'>
                    {guest.company}
                </Typography>
                <Typography color="textSecondary" align='center' gutterBottom variant="h4" borderRadius="50">
                    TABLE NO
                </Typography>
                <Box textAlign='center'>
                    <Button
                        alignItem='center'
                        variant="outlined"
                        disabled
                        color="secondary"
                        className={classes.button}
                        style={{fontSize: '63px'}}
                    >
                        {guest.tableNo} 
                    </Button>
                </Box>
                <form onSubmit={onSubmit}>
                    <Box textAlign='center' sx={{ paddingBottom: 10 }}>
                        <Button 
                            onClick={handleOpen}
                            variant="contained" 
                            color="secondary" 
                            size="large" 
                            startIcon={<SearchIcon />}
                            > Locate Your Table
                        </Button>
                    </Box>
{/*                     <Box textAlign='center'>
                        <Button 
                        onClick={() => (state.button = 1)}
                        type="submit"
                        name="btn1"
                        variant="contained" 
                        color="secondary" 
                        size="large" 
                        startIcon={<SearchIcon />}
                        >
                            Locate Your Table
                        </Button>
                    </Box> */}
                    <Box textAlign='center' sx={{ paddingTop: 10 }}>
                        <Button 
                        onClick={() => (state.button = 2)}
                        type="submit"
                        name="btn2"
                        variant="contained" 
                        color="secondary" 
                        size="large" 
                        paddingBottom="100px"
                        startIcon={<HomeIcon />}
                        >
                            GO Back
                        </Button>
                    </Box>
                </form>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CardMedia
                            component="img"
                            sx={{
                            height: 233,
                            width: 100,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                            }}
                            src={msiTableLoc}
                        />
                    </Box>
                </Modal>
            </CardContent>
        </Card>

    </Container>
  )
}
