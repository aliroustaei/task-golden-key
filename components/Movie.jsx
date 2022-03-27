import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "#ffffff",
  border: "2px solid #1976d2",
  borderRadius: "20px",
  boxShadow: 50,
  p: 4,
};

const Movie = ({ data: { image, title, description } }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ boxShadow: 3 }}>
        <CardMedia>
          <Image
            alt={title}
            src={image}
            height={550}
            width={400}
            objectFit="fill"
            objectPosition="center"
          />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            minHeight="4rem"
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">
            details
          </Button>
        </CardActions>
      </Card>
      {/***** modal ****/}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            movie name :
          </Typography>
          <Typography component="p">{title}</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            about :
          </Typography>
          <Typography>{description}</Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Movie;
