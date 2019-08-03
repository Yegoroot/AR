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
import AnimateCard from "components/AnimateCard/AnimateCard";
import { Helmet } from "react-helmet";

class IsmaAlatiPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Helmet>
          <title>Имя орудия действия (اسم آلة)</title>
          <meta
            name="description"
            content="Орудие действие в арабском языке существует для того чтоб указать на инструмент совершения действия"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="اسم آلة"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: "white"
          }}
          {...rest}
        />

        <Parallax small filter image={require("assets/img/mosque/mosque16.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Имя орудия действия (اسم آلة)&nbsp;<span className="ph">§</span>
              </h1>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">
                    كلمةُ <span className="contrast_2"> مِفْتَاح </span> مأخوذةٌ من مصدر
                    <span className="contrast_2"> فَتَحَ يَفْتحُ </span> للدلالة على آلة الفَتْحِ, و
                    تَسْمى
                    <span className="contrast"> اسْمَ آلةٍ </span>
                  </div>
                  <div className="arsent__translate">
                    Cлово <span className="contrast_2"> ключ </span> образовано от
                    <span className="contrast_2"> открыл открываю </span> для того чтоб указать на
                    инструмент открывания и назвается это
                    <span className="contrast"> имя орудия </span>
                  </div>
                </div>
              </AnimateCard>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">
                    اِسْمُ الآلة اسمٌ مَصُوغ من الفعل الثلاثي للدلالة على ما وقعَ الفعلُ بِواسِطَتِه
                  </div>
                  <div className="arsent__translate">
                    Имя инструмента образуется от трехбуквенного глагола для указания на инструмент
                    при помощи которого было совершено какое либо действие
                  </div>
                </div>
              </AnimateCard>
              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">
                    <span className=""> لِاسْمُ الآلة </span> ثلاثةُ أوزانٍ
                    <span className="contrast"> مِفْعَالٌ </span> , و
                    <span className="contrast"> مِفْعَلٌ </span> , و
                    <span className="contrast"> مفْعَلَةٌ </span> , نَحْو
                    <span className="contrast_2"> مِفْتاحِ </span> , و
                    <span className="contrast_2"> مِبْرَد </span>, و
                    <span className="contrast_2"> مِكْنَسَة </span>
                  </div>
                  <div className="arsent__translate">У имени инструмента три модели</div>
                </div>
              </AnimateCard>

              <div className="items">
                <div className="item">
                  <h2 className="h2ar">
                    مِفْعَالٌ
                    <span role="img" aria-label="Light Bulb">
                      &nbsp;💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      فَتَحَ يَفْتَحُ
                      <span className="contrast_2"> مِفْتاحٌ </span>
                    </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      نَشَرَ يَنْشُرُ
                      <span className="contrast_2"> مِنْشارٌ </span>
                    </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      قاس يقيسُ
                      <span className="contrast_2"> مِقْياسٌ </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar">
                    مِفْعَلٌ
                    <span role="img" aria-label="Light Bulb">
                      &nbsp;💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      بَرَدَ يَبْرُدُ
                      <span className="contrast_2"> مِبْرَد </span>
                    </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      صَعِدَ يَصْعَدُ
                      <span className="contrast_2"> مِصْعَدٌ </span>
                    </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      قَصَّ يقُصُّ
                      <span className="contrast_2"> مِقَصٌّ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    مفْعَلَةٌ
                    <span role="img" aria-label="Light Bulb">
                      &nbsp;💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      لَعِقَ يَلْعَقٌ
                      <span className="contrast_2"> مِلْعَقَةٌ </span>
                    </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      طَرَقَ يطْرُقُ
                      <span className="contrast_2"> مِطْرَقَةٌ </span>
                    </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      غَرَفَ يَغْرِفُ
                      <span className="contrast_2"> مِغْرَفَةٌ </span>
                    </div>
                  </div>
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

export default withStyles(arabicPageStyle)(IsmaAlatiPage);
