import { Container, Grid, Typography, Button } from "@mui/material";
import { useParams } from "react-router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardModal from "./CardModal";

const CardDetails = () => {
  const params = useParams();
  const [hotelInfo, setHotelInfo] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    axios
      .get(`https://hotels-api-4ltr.onrender.com/api/hotels/${params.slug}`)
      .then((response) => {
        console.log(response.data);
        setHotelInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.slug]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 10 }}>
      <Typography variant="h4">{hotelInfo.name}</Typography>
      <Grid container justifyContent={"center"}>
        {hotelInfo.images?.map((image) => {
          return (
            <Grid item lg={4}>
              <img
                src={image.img}
                alt="Hotel"
                style={{
                  width: "95%",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 5px grey",
                  margin: "10px",
                  height: "200px",
                }}
              />
            </Grid>
          );
        })}
        <Grid>
          <Typography>{hotelInfo.aboutThePlace}</Typography>
          <h2>What this place offers:</h2>
          <Typography>
            <ul>
              {hotelInfo.features?.map((item) => {
                return <li>{item.text}</li>;
              })}
            </ul>
          </Typography>
        </Grid>
        <div className="button">
          <Button onClick={handleOpen} style={{ textAlign: "right" }}>
            Reserve
          </Button>
        </div>
        {open && (
          <CardModal
            open={open}
            handleClose={handleClose}
            price={hotelInfo.pricePerNight}
            hotelInfo={hotelInfo}
          />
        )}
      </Grid>
    </Container>
  );
};

export default CardDetails;
