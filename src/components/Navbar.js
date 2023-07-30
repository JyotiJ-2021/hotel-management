import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import CustomizedSwitches from "./ThemeSitch";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";
import { auth } from "../firebase.config.js";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const NavBar = ({ name }) => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  //for search
  /**
   * const [serch, setSearch] =useState("")
   * const handleSearch=()=>{
   * const filterdata = hotels.filter((hotel)=>
   * hotel.address.toLowercase().includes(search.toLowerCase())
   *  hotel.name.toLowercase().includes(search.toLowerCase())
   * setHotels(filterdata)
   * )}
   */

  console.log(name);
  return (
    <>
      <AppBar component="nav" style={{ background: "#fff", color: "#333" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/home"> BookStay</Link>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {name}
            {/* <CustomizedSwitches /> */}
            <Button sx={{ color: "#fff", marginRight: "25px" }}>Home</Button>
            <Avatar>A</Avatar>
            {/* <button onClick={logout}>Log out</button> */}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
