import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import arabicPageStyle from "assets/jss/material-kit-react/views/arabicPage.jsx";
import Word from "components/word";

class HarfulAw extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          brand="Частица لو"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <Parallax small filter image={require("assets/img/mosque/mosque19.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="h1ar">حرف لو</h1>
              <div className="desc">
                Частица لو (если, если бы) обозначает три вещи:
                <p>
                  <b> Условие, </b>
                  так же
                  <b> Это условие связанно с прошедшем временем </b> и <b>Ограничение</b>
                </p>
                <p>
                  Следствие условия начинается с Лям
                  <span className="contrast desc__ar"> ل </span> если следствие утвердительное
                  предложение. В отрицательных предложениях условия Лям добавляется редко
                </p>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> لو </span>
                  <span className=""> آجتهدتَ </span>
                  <Word root="نَجَحْتَ" prefix="لَ" />
                </div>
                <div className="arsent__translate">Если бы ты старался то ты бы преуспел</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> لو </span>
                  <span className=""> سمعتَ قِصَّته </span>
                  <Word root="بَكَيْتَ" prefix="لَ" />
                </div>
                <div className="arsent__translate">
                  Если бы ты услышал его историю то ты непременно бы заплакал
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> لو </span>
                  <span className=""> حَضَرتَ أمس ما شَكَوْتك إلى المدير </span>
                </div>
                <div className="arsent__translate">
                  Если бы ты присутствовал вчера, то я бы не пожаловался директору
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

export default withStyles(arabicPageStyle)(HarfulAw);