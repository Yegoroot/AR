import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import { Paper } from "@material-ui/core";
import ContrastWord from "components/Typography/ContrastWord.jsx";
import ArSent from "components/Typography/ArSent.jsx";
import Word from "components/word";

// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from "components/Clearfix/Clearfix.jsx";
import arabicPage from "assets/jss/material-kit-react/views/arabicPage.jsx";

class OtherVerbs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="OtherVerbs">
        <div className={classes.container}>
          <h2 className={classes.title}>Другие глаголы</h2>

          <Paper>
            <div className="wrap1">
              <p>Некоторые другие глаголы</p>
              <h3>
                <ContrastWord blue>(كَادَ - يَكَادُ)</ContrastWord>
              </h3>
              <ArSent
                translate={
                  <div>
                    Мы вчера <ContrastWord red>чуть </ContrastWord> не умерли от смеха
                  </div>
                }
              >
                <Word prefix="كِدْ" root="نَا" /> نَموت من الضحِك أمسِ
              </ArSent>
              <h3>
                <ContrastWord blue>(رَجَا - يَرْجُو)</ContrastWord>
              </h3>
              <ArSent
                translate={
                  <div>
                    <ContrastWord red>Надеюсь </ContrastWord> ты вернешся домой рано
                  </div>
                }
              >
                {" "}
                <ContrastWord red> أرجو </ContrastWord>
                أن تَرْجَعُ الي البيت مبكراً
              </ArSent>
              <h3>
                <ContrastWord blue>(ليس)</ContrastWord>
              </h3>
              <p>
                Глагол прошедшего времени, который используется для отрицания в настоящем времени,
                спрягается только в прошедшем времени
              </p>
              <ArSent>لَستُ - لسْنا</ArSent>
              <ArSent>لَسْتَ - لَسْتِ - لَسْتُمْ - لَسْتُنَّ</ArSent>
              <ArSent>لَيْسَ - لَيْسَتْ‎ - لَيْسُوا‎ - لَسْنَ‎</ArSent>
              <ArSent>
                لا, أنا <ContrastWord red>لَستُ</ContrastWord> من واشنطنَ‎
              </ArSent>
            </div>
          </Paper>
        </div>

        <Clearfix />
      </div>
    );
  }
}

export default withStyles(arabicPage)(OtherVerbs);
