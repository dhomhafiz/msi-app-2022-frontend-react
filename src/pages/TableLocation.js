import React from "react";
import { CardContent, Container, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import msiLogo from '../img/table_loc.jpeg'
import useFetch from '../useFetch'

export default function TableLocation() {
    const { data: guest, isPending, Error } = useFetch('http://localhost:8080/guest/getAll')
    return (
        <Container maxWidth="md">
            <Card
            style={{ 
                marginTop: 10,
                width: "auto",
                height:"auto"
            }}
            >
            <CardContent>
                <Typography>
                    Your table no. is: {guest.company}
                </Typography>
            </CardContent>
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
            </Card>
        </Container>
    )
}