import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    width: 350,
    margin: "10px",
  },
});

export default function Details() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h5"
          gutterBottom
        >
          Enter Your Details
        </Typography>
        <TextField
          id="filled-basic"
          label="Username"
          variant="filled"
          className={classes.text}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Address"
          variant="filled"
          multiline
          rows={4}
          className={classes.text}
        />
      </CardContent>
    </Card>
  );
}
