import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ContrastWord from "components/Typography/ContrastWord.jsx";
import Word from "components/word";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import arabicPage from "assets/jss/material-kit-react/views/arabicPage.jsx";

class Admiration extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="admiration">
        <div className={classes.container}>
          <h2 className={classes.title}>Глагол восхищения, удивления</h2>

          <div className="desc">
            Модель образования <span className="contrast_2 desc__ar"> أفْعَل </span>
          </div>
          <div className="arsent">
            <div className="arsent__original">
              <ContrastWord red> ما أسْهَلَ</ContrastWord> هذا <Word root="الدرس" />
            </div>
            <div className="arsent__translate">Как лёгок этот урок!</div>
          </div>
          <div className="arsent">
            <div className="arsent__original">
              <ContrastWord red> ما أطْوَلَ</ContrastWord> هذا <Word root="الرجل" />
            </div>
            <div className="arsent__translate">Как высок этот мужчина!</div>
          </div>
        </div>

        <Clearfix />
      </div>
    );
  }
}

export default withStyles(arabicPage)(Admiration);
