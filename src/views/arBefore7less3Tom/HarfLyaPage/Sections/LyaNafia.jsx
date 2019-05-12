import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import { Paper } from "@material-ui/core";

import ContrastWord from "components/Typography/ContrastWord.jsx";
import ArSent from "components/Typography/ArSent.jsx";
// import Word from 'components/word'
// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from "components/Clearfix/Clearfix.jsx";
import arabicPage from "assets/jss/material-kit-react/views/arabicPage.jsx";

class LyaNafia extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="liWithVerbs">
        <div className={classes.container}>
          <h2 className={classes.title}>لا النافية</h2>
          <Paper>
            <div className="wrap1">
              <p>Частица абсолютного отрицания</p>
              <ArSent translate="Умар ни когда не пьёт кофе">
                عمر <ContrastWord red> لا </ContrastWord> يشربُ القهوة
              </ArSent>
              <ArSent translate="Вы не учите французкий язык">
                أنتم <ContrastWord red> لا </ContrastWord> تدرسونَ اللغة الفرنسية
              </ArSent>
              <ArSent translate="Не бил ты меня">
                <ContrastWord red> لا </ContrastWord> تضربُنِي
              </ArSent>
            </div>
          </Paper>
        </div>

        <Clearfix />
      </div>
    );
  }
}

export default withStyles(arabicPage)(LyaNafia);
