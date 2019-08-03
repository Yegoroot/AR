import { defaultFont } from "assets/jss/material-kit-react.jsx";

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.jsx";

const headerLinksStyle = theme => ({
  navLinkHideDesc: {
    paddingTop: 5,
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    "& a": {
      textAlign: "right"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    "@media screen and (min-width: 960px)": {
      "& ul": {
        maxHeight: "calc(100vh - 85px)",
        overflowY: "auto"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },

  navLink: {
    color: "inherit",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    },
    "@media (max-width: 960px)": {
      "& svg": {
        marginRight: 15
      },
      textAlign: "right",
      "&:hover,&:focus": {
        background: "none"
      }
    },
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      textTransform: "inherit",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8,
      margin: 0,
      width: "100%",
      justifyContent: "flex-end"
      // "& > span:first-child": {
      //   justifyContent: "flex-start"
      // }
    }
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px"
  }
});

export default headerLinksStyle;
