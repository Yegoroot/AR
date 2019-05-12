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

class JumlatuHaalPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          brand="جملة الحال"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: "white"
          }}
          {...rest}
        />

        <Parallax small filter image={require("assets/img/mosque/mosque2.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className={classes.title}>جملة الحال</h1>

              <p className="desc">
                Отвечает на вопрос "как?" - является образом действия слово
                <span className="desc__ar"> الحال </span> буквально означает "ситуация" или
                "положение. В каком положении пребывает объект, в каком состоянии. Перед
                <span className="desc__ar"> جملة الحال </span> приходит глагольное предложение в то
                время как само оно именное
              </p>

              <h2 className="h2ar">الحال</h2>

              <div className="arsent">
                <div className="arsent__original">
                  دخل المدرس الفصل <span className="contrast">غَضِبًا </span>
                </div>
                <div className="arsent__translate">
                  Пришел учитель в класс <span className="contrast">злым </span>(пришёл в состоянии
                  злости)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  شرب اِبني الماء <span className="contrast">صافِيًا </span>
                </div>
                <div className="arsent__translate">
                  Мой сын пил воду <span className="contrast"> чистую </span> (в момент пития вода
                  была чистой)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">شرب اِبني الماء الصافِي</div>
                <div className="arsent__translate">
                  [** Если же мы хотим сказать что вода И была чистой, то используем простое
                  прилагательное **]
                </div>
              </div>

              <h2 className="h2ar">جملة الحال </h2>

              <div className="desc">
                <span className="desc__ar">جملة الحال</span> соединяется с помощью
                <span className="desc__ar contrast_2"> واو الحال </span>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  قرأ الكتاب
                  <span className="contrast">
                    <span className="contrast_2"> و </span> أنا جالِس
                  </span>
                </div>
                <div className="arsent__translate">
                  Читал книгу
                  <span className="contrast"> сидя </span>(в состоянии сидения)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  شربت الشاي و القهوة
                  <span className="contrast">
                    <span className="contrast_2"> و </span> أنا في العَمل
                  </span>
                </div>
                <div className="arsent__translate">
                  Пил чай и кофе
                  <span className="contrast"> когда был на работе</span> (в состоянии нахождения на
                  работе)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  أكل أخي تفاحتي
                  <span className="contrast">
                    <span className="contrast_2"> و </span> أنا نائِم
                  </span>
                </div>
                <div className="arsent__translate">
                  Мой брат ел мои яблоки
                  <span className="contrast"> пока я спал </span> (был в состоянии сна)
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

export default withStyles(arabicPageStyle)(JumlatuHaalPage);
