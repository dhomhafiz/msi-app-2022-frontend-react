import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Box, Button, Container, Typography, makeStyles, Card, CardContent } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import SendIcon from '@material-ui/icons/Send'
import TextField from '@material-ui/core/TextField'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import useFetch from '../useFetch'
import Paper from '@material-ui/core/Paper'
import msiLogo from '../img/MSI 2022 Certificate-01_Combined.png'
import CardMedia from '@material-ui/core/CardMedia'
import { FormatAlignCenter } from '@material-ui/icons'
import { Image } from '@material-ui/icons'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  menuItem: {
    fontSize: 15,
    whiteSpace: "unset",
    wordBreak: "break-all"
  },
  buttonVerify: {
    marginTop: 20,
  }
})

export default function Home() {
  const classes = useStyles()
  const [company, setCompany] = useState('')
  const [companyError, setCompanyError] = useState(false)
  const { data: guests, isPending, Error } = useFetch('https://dhomhafiz.click/guest/getAll')

  const history = useHistory();



  if(Error) return console.log(Error);
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setCompanyError(false)
    const guest = (company);
    console.log('Event : ', e.target.value)
    console.log("From handlesubmit " + guest);


    const foundGuest = guests.find(g => g.company === company);
    if (foundGuest) {
      history.push(`/guest/${guest}`)
      console.log('found ' + guest);
    } else {
      console.log('not found');
    }

    if (company) {
      console.log(company)
    }
  }

  return (
    <Container maxWidth="md">
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

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Typography gutterBottom variant="h5" component="div" align="center">
              Your Company Name
        </Typography>
        <Select
          onChange={(e) => setCompany(e.target.value)}
          // className={classes.field}
          fullWidth
          variant="outlined"
          color="secondary"
        >
          <MenuItem value="None" className={classes.menuItem}>
            <em>None</em>
          </MenuItem>
          {guests.map(guests =>
              <MenuItem key={guests.id} value={guests.company} className={classes.menuItem}>{guests.company}</MenuItem>
            )}
        </Select>
        <Box textAlign='center'>
          <Button
            type="submit"
            color="secondary"
            endIcon={<SendIcon />}
            variant="contained"
            size="medium"
            className={classes.buttonVerify}
          >
            VERIFY
          </Button>
        </Box>

      </form>


    </Container>
  )
}
