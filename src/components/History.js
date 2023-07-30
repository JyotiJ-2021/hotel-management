import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NavBar from './Navbar';
import { Container } from '@mui/material';
import moment from 'moment';

export default function History() {
    const reserveList = JSON.parse(localStorage.getItem('reserve')) || [];

    // const fetchReservations = () => {
    //   db.collection("reservations")
    //     .get()
    //     .then((querySnapshot) => {
    //       console.log(querySnapshot);
    //       // const reservationsData = [];
    //       // querySnapshot.forEach((doc) => {
    //       //   reservationsData.push({ id: doc.id, ...doc.data() });
    //       // });
    //       // // Update the state with the fetched data
    //       // setReservations(reservationsData);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching reservations: ", error);
    //     });
    // };

    return (
        <>
            <Container sx={{ marginTop: 10, marginBottom: 10 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 450 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Hotel Name</TableCell>
                                <TableCell align="left">
                                    Hotel Address
                                </TableCell>
                                <TableCell align="left">Checking In</TableCell>
                                <TableCell align="left">check out</TableCell>

                                <TableCell align="center">
                                    Total Guest
                                </TableCell>
                                <TableCell align="center">
                                    Total Prize
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reserveList.map((row) => (
                                <TableRow
                                    key={row[0].name}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}>
                                    <TableCell component="th" scope="row">
                                        {row[0].name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row[0].address}
                                    </TableCell>
                                    <TableCell align="left">
                                        {moment(row[0].checkInDate).format(
                                            'MMMM Do YYYY'
                                        )}
                                    </TableCell>
                                    <TableCell align="left">
                                        {moment(row[0].checkOutDate).format(
                                            'MMMM Do YYYY'
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row[0].guestNumber}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row[0].total}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}
