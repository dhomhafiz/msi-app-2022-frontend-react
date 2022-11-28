
import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import GuestCard from '../components/GuestCard'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const drawerWidth = 48
const useStyles = makeStyles((theme) => {
    return {
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
          },
          page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(0)
          },
          appbar: {
            // width: `calc(100% - ${drawerWidth}px)`
          },
          toolbar: theme.mixins.toolbar
    }
})

export default function Guest({ children }) {
    const classes = useStyles()
    const { id } = useParams()
    const { data: guest, isPending, Error } = useFetch(`https://dhomhafiz.click/guest?company=${id}`)


    if(isPending) return <Backdrop open>
        <CircularProgress color="inherit" />
        <h1>Loading...</h1>
    </Backdrop>;

    if(Error) return console.log(Error);
    
    return (
        <div>
{/*             <AppBar
                className={classes.appbar}
            >
            <Toolbar>
                <Typography>
                    Welcome to the SIRIM MSI Industy 2022 Website
                </Typography>
            </Toolbar>
            </AppBar> */}

            <Container>    
                <Grid 
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    // style={{ height: '100vh'}}
                >
                    {guest.map(guest => (
                        <Grid item key={guest.id} >
                            <GuestCard guest={guest} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                { children }
            </div>
        </div>
    )
}