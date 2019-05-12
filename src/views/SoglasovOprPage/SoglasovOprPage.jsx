import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

import ContrastWord from "components/Typography/ContrastWord.jsx";
import ArSent from "components/Typography/ArSent.jsx";

import HeaderLinks from "components/Header/HeaderLinks.jsx";

import Parallax from "components/Parallax/Parallax.jsx";

import arabicPageStyle from "assets/jss/material-kit-react/views/arabicPage.jsx";

import soglasOprImg1 from "assets/img/content/soglasOpr/soglasOpr1.png";
import soglasOprImg2 from "assets/img/content/soglasOpr/soglasOpr2.png";
import soglasOprImg3 from "assets/img/content/soglasOpr/soglasOpr3.png";

class SoglasovOpr extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          brand="Согласованное определение"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <Parallax small filter image={require("assets/img/mosque/mosque4.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className={classes.title}>Согласованное определение</h1>

              <p>
                Согласованное определение ставится после определяемого и полностью согласуется в
                роде, числе, падеже, состоянии. Чаще всего в роде согласованного определения
                выступает прилагательное
              </p>

              <ArSent
                translate={
                  <div>
                    <ContrastWord>Аббас</ContrastWord>{" "}
                    <ContrastWord red>торговец [определяемое слово]</ContrastWord>{" "}
                    <ContrastWord blue> богатый [определение]</ContrastWord>
                  </div>
                }
              >
                <ContrastWord> عبّاس </ContrastWord>
                <ContrastWord red> تاجر </ContrastWord>
                <ContrastWord blue> غني </ContrastWord>
              </ArSent>

              <p>
                Определяемое может иметь при себе одновременно как несогласованное определение так и
                согласованное; В таком случае с начала за определяемым следует{" "}
                <Link to="/idafa">несогласованное определение (идафа)</Link> затем согласованное
              </p>
              <h4 className={classes.title}>Определяемое -> Не согласованное -> Согласованное</h4>

              <p>
                Если <Link to="/idafa">несогласованное определение (идафа)</Link> стоит в
                неопределенном состоянии, то и имя определяемое считается неопределенным
              </p>

              <ArSent
                translate={
                  <div>
                    (какая то) <ContrastWord blue> Чистая </ContrastWord>
                    <ContrastWord> тетрадь</ContrastWord>{" "}
                    <ContrastWord red> (какой то) студентки </ContrastWord>
                  </div>
                }
              >
                <ContrastWord> دفترُ</ContrastWord>
                <ContrastWord red> طالبةٍ</ContrastWord> <ContrastWord blue> نظيفٌ </ContrastWord>
              </ArSent>

              <ArSent translate=" - тетерадь [определяемое]">
                <ContrastWord inRu>دفترُ</ContrastWord>
              </ArSent>
              <ArSent
                translate={
                  <div>
                    {" "}
                    - (какой то) <ContrastWord red> студентки </ContrastWord> [идафа при
                    определяемом]
                  </div>
                }
              >
                <ContrastWord red inRu>
                  طالبةٍ
                </ContrastWord>
              </ArSent>

              <ArSent
                translate={
                  <div>
                    {" "}
                    - <ContrastWord blue>чистая</ContrastWord> [согласованное определение при
                    определяемом]
                  </div>
                }
              >
                <ContrastWord blue inRu>
                  نظيفٌ
                </ContrastWord>
              </ArSent>

              <img src={soglasOprImg1} style={{ width: "100%" }} alt="Схема 1" />

              <p>
                Если же идафа в определенном состоянии, то и определяемое считается в определенном
                состоянии
              </p>

              <ArSent
                translate={
                  <div>
                    <ContrastWord> Ключ (от)</ContrastWord>
                    <ContrastWord blue> большой </ContrastWord>{" "}
                    <ContrastWord red> двери </ContrastWord>
                  </div>
                }
              >
                <ContrastWord> مفتاحُ</ContrastWord>
                <ContrastWord red> البابِ</ContrastWord> <ContrastWord blue> الكبيرِ </ContrastWord>
              </ArSent>

              <ArSent translate="- ключ [определяемое]">
                <ContrastWord inRu>مفتاحُ</ContrastWord>
              </ArSent>
              <ArSent
                translate={
                  <div>
                    {" "}
                    - <ContrastWord red> двери </ContrastWord> [идафа при определяемом]
                  </div>
                }
              >
                <ContrastWord red inRu>
                  البابِ
                </ContrastWord>
              </ArSent>
              <ArSent
                translate={
                  <div>
                    {" - "}
                    <ContrastWord blue>большой</ContrastWord> [согласованное определение при идафе]
                  </div>
                }
              >
                <ContrastWord blue inRu>
                  الكبيرِ
                </ContrastWord>
              </ArSent>

              <img src={soglasOprImg2} style={{ width: "100%" }} alt="Схема 2" />

              <p>
                В данном случае когда определение в идафе имеет собственную идафу, то само
                определение (второй идафы) пишется без танвина и без определенного артикля, только
                лишь идафА идафЫ получает артикль
              </p>

              <ArSent
                translate={
                  <div>
                    <ContrastWord> Ключ (от)</ContrastWord>
                    <ContrastWord red> двери </ContrastWord>{" "}
                    <ContrastWord blue> дома </ContrastWord>
                  </div>
                }
              >
                <ContrastWord> مفتاحُ</ContrastWord>
                <ContrastWord red> بابِ</ContrastWord> <ContrastWord blue> البيتِ </ContrastWord>
              </ArSent>

              <ArSent translate=" - ключ [определяемое]">
                <ContrastWord inRu>مفتاحُ</ContrastWord>
              </ArSent>
              <ArSent
                translate={
                  <div>
                    {" - "} <ContrastWord red> двери </ContrastWord> [идафа при определяемом]
                  </div>
                }
              >
                <ContrastWord red inRu>
                  بابِ
                </ContrastWord>
              </ArSent>
              <ArSent
                translate={
                  <div>
                    {" - "}
                    <ContrastWord blue>дома</ContrastWord> [идафа при идафе]
                  </div>
                }
              >
                <ContrastWord blue inRu>
                  البيتِ
                </ContrastWord>
              </ArSent>

              <img src={soglasOprImg3} style={{ width: "100%" }} alt="Схема 3" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(arabicPageStyle)(SoglasovOpr);
