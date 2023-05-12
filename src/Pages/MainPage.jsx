import { BottomNavigation } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleBottomNavigation from "../Components/BottomNavigation";

export default function MainPage() {
  return (
    <Box id="wrapper">
      <Box>
        <Typography>hi</Typography>
      </Box>
      <Box sx={styles.bottom}>
        <SimpleBottomNavigation selected={""} />
      </Box>
    </Box>
  );
}

const styles = {
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};
