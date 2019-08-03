import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import arabicPageStyle from "assets/jss/material-kit-react/views/arabicPage.jsx";
import Ladayya from "./sections/Ladayya";
import Kam from "./sections/Kam";
import Iyyaka from "./sections/Iyyaka";
import { Helmet } from "react-helmet";

class SomeIsm extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Helmet>
          <title>Некоторые арабские нарицательные имена</title>
          <meta
            name="description"
            content="Некоторые из арабских нарицательных имен со своими правилами и нюансами. Стоит понимать что это не имена собственные. В арабском языке есть только
            три части речи: имя, глагол и частица."
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Некоторые имена"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <Parallax small filter image={require("assets/img/mosque/mosque21.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Некоторые имена&nbsp;<span className="ph">§</span>
              </h1>
              <div className="desc">
                Стоит понимать что это <b> не имена собственные </b>. В арабском языке есть только
                три части речи: имя, глагол и частица. В этом материале представлены некоторые из
                имён
              </div>
              <Ladayya />
              <Kam />
              <Iyyaka />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(arabicPageStyle)(SomeIsm);
