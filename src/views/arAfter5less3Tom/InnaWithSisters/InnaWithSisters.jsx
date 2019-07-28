import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

import Inna from './sections/Inna'
import Kaanna from './sections/Kaanna'
import Lakinna from './sections/Lakinna'
import Layta from './sections/Layta'
import Lyaallya from './sections/Lyaallya'
import { Helmet } from 'react-helmet'

class InnaWithSisters extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Частица إِنَّ и ее сестры</title>
          <meta
            name="description"
            content="Эти предлоги внедряются в именное предложение перед подлежащим ( المُبْتَدأ ) и сказуемым
            ( الخَبَر ). Ставят (المُبْتَدأ) в винительный падеж ( النصب ) и после этого المُبْتَدأ  называется اسم إنَّ "
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Частица إِنَّ и ее сестры"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque11.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Частица إِنَّ и ее сестры &nbsp;<span className="ph">§</span>
              </h1>
              <div className="desc">
                Эти предлоги внедряются в именное предложение перед подлежащим (<span className="desc__ar"> المُبْتَدأ </span>) и сказуемым
                (<span className="desc__ar"> الخَبَر </span>). Ставят (<span className="desc__ar"> المُبْتَدأ </span>) в винительный падеж (
                <span className="desc__ar"> النصب </span>) и после этого <span className="desc__ar"> المُبْتَدأ </span> называется
                <span className="desc__ar"> اسم إنَّ </span>
              </div>
              <Inna />
              <Kaanna />
              <Lakinna />
              <Layta />
              <Lyaallya />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(InnaWithSisters)
