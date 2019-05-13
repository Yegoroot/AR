import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

import HeaderLinks from "components/Header/HeaderLinks.jsx";

import Parallax from "components/Parallax/Parallax.jsx";

import arabicPageStyle from "assets/jss/material-kit-react/views/arabicPage.jsx";

class IsmulMakanWaZamanPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          brand="اسم مكان و زمان"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: "white"
          }}
          {...rest}
        />

        <Parallax small filter image={require("assets/img/mosque/mosque13.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className={classes.title}>اسم مكان و زمان</h1>

              <p className="desc">
                В грамматическом правиле для примера возьмем слово
                <span className="desc__ar"> مَوْعِد </span>. Иногда к именам места и времени
                присоединяется <span className="desc__ar"> ة </span> и некоторые ученые говорят что
                эта та-марбута указывает на постоянство действия{" "}
                <span className="desc__ar"> مَدْرَسَة, مَحْكَمَة </span> .
              </p>

              <div className="arsent">
                <div className="arsent__original">
                  كَلِمة <span className="contrast_2"> مَوْعِد </span> مأْخُوذَة من
                  <span className="contrast_2"> وَعَدَ يَعِدُ </span> للدَّلالة على زَمانِ
                  الوَعِْدِ, أو مَكانهِ. و تُسَمَّى <span className="contrast"> اسم زمانٍ </span>
                  إذا كانت للدﻻلة على الزَّمان, و <span className="contrast">اسم مَكَانٍ</span>
                  إذا كانت للدﻻلة على المكان.
                </div>
                <div className="arsent__translate">
                  Слово
                  <span className="contrast_2"> обещанный срок </span>
                  взятое от
                  <span className="contrast_2"> (обещал - обещает) </span> чтоб указать на Время
                  Обещания или на его место. И называется
                  <span className="contrast"> "имя времени" </span> если оно служит для указания
                  времени, <span className="contrast"> "имя места" </span> если служит для указания
                  места
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  اِسما الزمانِ و المكانِ اسْمانِ مَصُوغَانِ للدَّﻻلة على زمانِ الفِعْلِ أو مكانِه.
                  و يُصاغانِ من الفعل الثلاثِيَّ المُجَرَّدِ على وزن
                  <span className="contrast"> مَفْعَلٍ </span> و
                  <span className="contrast"> مَفْعِلٍ </span>
                </div>
                <div className="arsent__translate">
                  "Имена места и времени" образованы (отлиты) для указания время действия или места
                  действия. И они образуются от трехбуквенного первообразного глагола (который не
                  содержит служебных букв) по моделям
                  <span className="contrast"> مَفْعَلٍ </span> و
                  <span className="contrast"> مَفْعِلٍ </span>
                </div>
              </div>

              <h2 className="h2ar">مَفْعَلٍ</h2>

              <p className="desc">
                <b> 1) </b> Если
                <b> последняя слабая</b> <br />
                <b> 2) </b> В большинстве случаев если в настроящем времени
                <b> огласовка Фатха или Дамма</b>
              </p>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> مَجْرى </span> من
                  <span className="contrast"> جَرَى </span> يَجْري
                </div>
                <div className="arsent__translate">
                  <span className="contrast_2"> Течение </span> от теч-течёт
                  <b className="contrast"> (последняя слабая)</b>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> مَلعَبٌ </span> من لَعِبَ
                  <span className="contrast"> يَلْعَبُ </span>
                  <br />
                  <span className="contrast_2"> مَكْتَب </span> من كَتَبَ
                  <span className="contrast"> يَكْتُبُ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast_2"> Стадион </span> от играл-играет
                  <b className="contrast"> (огласовка фатха у настоящего)</b>
                  <br />
                  <span className="contrast_2"> Кабинет </span> от писал-пишет
                  <b className="contrast"> (огласовка дамма у настоящего)</b>
                </div>
              </div>

              <h2 className="h2ar">مَفْعِلٍ</h2>
              <p className="desc">
                <b> 1) </b> Если в настоящем времени правильный глагол
                <b> с кясрой</b> <br />
                <b> 2) </b> является глаголом <b> подобно правильным </b> с сильной (правильной)
                буквой на конце
              </p>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> مَجْلِسٌ </span> من جَلَسَ
                  <span className="contrast"> يَجْلِسُ </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> مَوْقِف </span> من وَقَف
                  <span className="contrast"> يَقِف </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(arabicPageStyle)(IsmulMakanWaZamanPage);
