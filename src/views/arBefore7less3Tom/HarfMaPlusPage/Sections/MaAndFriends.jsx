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
import arabicPageStyle from "assets/jss/material-kit-react/views/arabicPage.jsx";

class MaAndFriends extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="liWithVerbs">
        <div className={classes.container}>
          <h2 className={classes.title}>ما с друзьями</h2>
          <Paper>
            <div className="wrap1">
              <p>
                Скажи кто твой друг и тебе скажут кто ты, частица ما не является исключением, и в
                зависимоти от того с кем она дружит, ведет себя по разному
              </p>
              <h3 className={classes.title}>
                مِنْ + ما = <ContrastWord red>مِمَّ</ContrastWord>؟
              </h3>

              <ArSent
                translate={
                  <div>
                    <ContrastWord red>Из чего </ContrastWord> создал Аллахъ человека?
                  </div>
                }
              >
                <ContrastWord red>مِمَّ </ContrastWord> خَلَقَ اللّه الانسان؟
              </ArSent>

              <h3 className={classes.title}>
                بِ + ما = <ContrastWord red>بِمَ</ContrastWord>؟
              </h3>

              <ArSent
                translate={
                  <div>
                    <ContrastWord red>(С помощью чего) Чем </ContrastWord> ты убил змею?
                  </div>
                }
              >
                <ContrastWord red>بِمَ </ContrastWord> قتلتُ الحَيَّة؟
              </ArSent>

              <h3 className={classes.title}>
                لِ + ما = <ContrastWord red>لِمَ</ContrastWord>؟
              </h3>

              <ArSent
                translate={
                  <div>
                    <ContrastWord red>(Почему?, Для чего?, За чем?) Для какой цели </ContrastWord>{" "}
                    ты вышел из класса?
                  </div>
                }
              >
                <ContrastWord red>لِمَ </ContrastWord> خَرجُْتُ مِن الفصلِ؟
              </ArSent>

              <h3 className={classes.title}>
                عَنْ + ما = <ContrastWord red>عَمَّ</ContrastWord>؟
              </h3>

              <ArSent
                translate={
                  <div>
                    <ContrastWord red>Что </ContrastWord> ты искал в школе? ( ... بَحثَ عن )
                  </div>
                }
              >
                <ContrastWord red>عَمَّ </ContrastWord> بَحثْتَ في المدرسةِ؟
              </ArSent>
              <ArSent
                translate={
                  <div>
                    <ContrastWord red>О чем </ContrastWord> спросил учитель?
                  </div>
                }
              >
                <ContrastWord red>عَمَّ </ContrastWord> سألْتَ المدرسَ؟
              </ArSent>
            </div>
          </Paper>
        </div>

        <Clearfix />
      </div>
    );
  }
}

export default withStyles(arabicPageStyle)(MaAndFriends);