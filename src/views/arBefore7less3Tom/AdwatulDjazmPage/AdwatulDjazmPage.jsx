import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Word from "components/word";

import ArSent from "components/Typography/ArSent.jsx";
import ContrastWord from "components/Typography/ContrastWord.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import Parallax from "components/Parallax/Parallax.jsx";

import arabicPageStyle from "assets/jss/material-kit-react/views/arabicPage.jsx";

class AdwatulDjazmPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          brand="أدْوَات الجَزْم"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: "white"
          }}
          {...rest}
        />

        <Parallax small filter image={require("assets/img/bg4.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className={classes.title}> لمْ - لَمّا - لا - لامْ الأمر </h1>

              <h2 className={classes.title}>
                Отрицательная частица{" "}
                <ContrastWord red inRu>
                  لَمْ
                </ContrastWord>{" "}
              </h2>

              <p>Приходит перед глаголами настоящего времени у ней две роли</p>
              <ul>
                <li>Отрицает</li>
                <li>Меняет время на прошедшее</li>
              </ul>
              <ArSent>
                <ContrastWord red>لمْ</ContrastWord> أذهَبْ = ما ذهبتُ
              </ArSent>

              <ArSent> لَمْ أذهبْ - لَمْ نَذهبْ</ArSent>
              <ArSent> أنتَ لَمْ تَذهبْ - أنتِ لَمْ نَذهبِي</ArSent>
              <ArSent> أنتُم لَمْ تَذهبُوا - أنتنّ لَمْ نَذهبْن</ArSent>
              <ArSent> هو لَمْ يَذهبْ - هي لَمْ تَذهَبْ</ArSent>
              <ArSent> هم لَمْ يَذهبُوا - هنّ لَمْ يذهَبْن</ArSent>

              <h2 className={classes.title}>
                Частица{" "}
                <ContrastWord red inRu>
                  لَمّا
                </ContrastWord>{" "}
                (пока еще не, еще не)
              </h2>

              <p>
                Отрицает и прошлый и настоящий момент, у لمّا есть высокий уровень возможности
                свершения
              </p>

              <h2 className={classes.title}>
                Частица отрицания
                <ContrastWord red inRu>
                  {" "}
                  لا النّاهية{" "}
                </ContrastWord>
              </h2>

              <p>Приходит только ко второму лицу настоящего времени!</p>
              <ArSent translate="Не ходите в школу">
                {" "}
                <ContrastWord red>لا</ContrastWord> تَ‍‍ذهب‍‍وا الي المدرسة{" "}
              </ArSent>

              <h2 className={classes.title}>
                Частица приказа
                <ContrastWord red inRu>
                  {" "}
                  لمْ الأمر{" "}
                </ContrastWord>
              </h2>

              <p>Может прийти к любому лицу (Пусть он, пусть она)</p>
              <ArSent translate={<span>Пойдёмте в школу</span>}>
                {" "}
                <Word prefix="لِ" root="نَذْهَب" /> الي المدرسة
              </ArSent>

              <ArSent translate={<span>Пусть он идёт в школу</span>}>
                {" "}
                <Word prefix="لِ" root="يَذهَبْ" /> الي المدرسة
              </ArSent>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(arabicPageStyle)(AdwatulDjazmPage);
