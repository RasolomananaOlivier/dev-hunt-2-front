import React, { Fragment } from "react";
import "./SideBarWidget.styles.scss";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import { Grid, Item } from "@mui/material";
const usestyle = makeStyles({
  Image: {
    alignItems: "center",
    margin: "14px auto",
    width: "50px",
    height: "50px",
  },
  type0: {
    textDecoration: "underline",
    color: "#2e7d32",
  },
  SPAN: {
    margin: "6px 40px",
    paddingLeft: "20px",
  },
  types: {
    margin: "7px 25px 7px 0px ",
    width: "100%",
  },

  types1: {
    textAlign: "center",
    alignItems: "center",
    margin: "25px auto",
    listStyleType: "none",
  },
  type2: {
    width: "80%",
    margin: "5px 25px",
    paddingTop: "13px",
    textAlign: "center",
    marginBottom: "50px",
  },
  gridDiv: {
    margin: "35px 65px",
    width: "63%",
    border: "none",
    padding: "10px auto",
  },
  grid: {
    border: "0.5px solid rgba(255,255,255,0.3)",
    fontSize: "4px",
    backgroundColor: "#22242a",
    padding: "5px 4px",
  },
  colortype: {
    color: "#2e7d32",
    fontSize: "11px",
    opacity: "1",
    fontWeight: "bold",
  },
  Other: {
    color: "rgb(37 99 235)",
    fontSize: "11px",
    fontWeight: "bold",
  },
  redcolor: {
    color: "red",
    fontWeight: "bold",
    fontSize: "11px",
  },
  link: {
    textAlign: "center",
    padding: "10px",
  },
});
const SideBarWidget = () => {
  const classes = usestyle();
  return (
    <Fragment>
      <div
        className="s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16"
        data-tracker="cb=1"
      >
        <div>
          <div className={classes.gridDiv}>
            <Grid
              container
              rowSpacing={0}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6} className={classes.grid}>
                <Typography variant="h6" className={classes.Other}>
                  Questions
                </Typography>
                <Typography variant="h2">21</Typography>
              </Grid>
              <Grid item xs={6} className={classes.grid}>
                <Typography variant="h6" className={classes.redcolor}>
                  Answer
                </Typography>
                <Typography variant="h2">71</Typography>
              </Grid>
              <Grid item xs={6} className={classes.grid}>
                <Typography variant="h6" className={classes.colortype}>
                  Best Answer
                </Typography>
                <Typography variant="h2">19</Typography>
              </Grid>
              <Grid item xs={6} className={classes.grid}>
                <Typography variant="h6" className={classes.Other}>
                  Questions
                </Typography>
                <Typography variant="h2">21</Typography>
              </Grid>
            </Grid>
          </div>

          <div className={classes.types}>
            <span style={{ margin: "5px 40px" }}>
              <Button
                variant="contained"
                disableElevation
                color="error"
                style={{ color: "white", borderRaduis: "0px" }}
              >
                Questions
              </Button>
              <Button
                variant="outlined"
                style={{ color: "white", borderRaduis: "0px" }}
              >
                Answers
              </Button>
            </span>
          </div>

          {/* <div className={classes.SPAN}>
          <Stack direction="row" spacing={1}>
              <Chip label="primary" color="primary" variant="outlined" />
              <Chip label="success" color="success" variant="outlined" />
              <Chip label="info" color="info" variant="outlined" />
            </Stack>
          </div> */}
        </div>
        <hr style={{ margin: "0" }}></hr>

        <div className={classes.types1}>
          <Typography variant="h4" component="div" className={classes.types1}>
            Recent questions
          </Typography>
        </div>

        <ul style={{ listStyleType: "none", marginRight: "5px" }}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </span>
            <span>Lorem ipsun dolor assetsdsffsfds ?</span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>
              <Avatar src="/broken-image.jpg" />
            </span>
            <span>Lorem ipsun dolor assetsdsfdsfsd ?</span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </span>
            <span>Lorem ipsun dolor assetssdfdsfhd ?</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default SideBarWidget;
