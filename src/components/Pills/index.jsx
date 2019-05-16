import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Word from "components/word";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import { ulAr } from "assets/jss/material-kit-react/ulAr.jsx";

const styleTemp = {
  ...pillsStyle,
  ulAr
};

class Pills extends React.Component {
  setArrTabs = data => {
    const { classes } = this.props;
    return data.content.map(tense => ({
      tabButton: tense.name,
      // tabIcon: Dashboard,
      tabContent: (
        <ul className={classes.ulAr}>
          {tense.faces.map(face => (
            <li key={face.name}>
              {face.words.map((word, index) => (
                <Word prefix={word.prefix} root={word.root} suffix={word.suffix} key={index} />
              ))}
            </li>
          ))}
        </ul>
      )
    }));
  };

  render() {
    const { data } = this.props;
    const arr = this.setArrTabs(data);

    return (
      <NavPills
        color="rose"
        horizontal={{
          tabsGrid: { xs: 12, sm: 2, md: 2 },
          contentGrid: { xs: 12, sm: 10, md: 10 }
        }}
        isAr
        tabs={arr}
      />
    );
  }
}

export default withStyles(styleTemp)(Pills);
