import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import Word from 'components/word'
import { Helmet } from 'react-helmet'

class LamIbtidaa extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Лям начинания (لَام الاِبْتِداء)</title>
          <meta name="description" content="Эта Лям начианания, а так же она обозначает усиление содержания предложения" />
        </Helmet>
        <Header
          color="transparent"
          brand="لَام الاِبْتِداء"
          isBrandAr
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
              <h1 className="h1ar">
                لَام الاِبْتِداء&nbsp;<span className="ph">§</span>
              </h1>
              <div className="desc">
                Эта Лям <b>начианания</b>, а так же она обозначает <b>усиление содержания предложения</b>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className=""> وَ </span>
                  <Word root="أجْرُ" prefix="لَ" />
                  <span> الآخِرَةِ أَكْبَرُ</span>
                </div>
                <div className="arsent__translate">А в следующей жизни вознаградим ещё больше! (усиление) [16 Сура Пчелы / Аят 41]</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className=""> وَ </span>
                  <Word root="ذِكْرُ" prefix="لَ" />
                  <span> الله أكبرُ</span>
                </div>
                <div className="arsent__translate">А поминание Аллахъа гораздо важнее [29 Сура Паук / Аят 45]</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="غَدْوَةٌ" prefix="لَ" />
                  <span> في سبيلِ الله أو رَوْحَةٌ خيرٌ من الدُّنْيا و ما فيها </span>
                </div>
                <div className="arsent__translate">رواه البخاري</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className=""> وَ </span>
                  <Word root="أمَةٌ" prefix="لَ" />
                  <span> مؤمنةٌ خيرٌ من مُشرِكٍ ولو أعْجَبَكُمْ </span>
                </div>
                <div className="arsent__translate">
                  Безусловно (усилено) верующая невольница лучше для вас чем язычница даже если она понравилась вам [16 Сура Бакара / Аят
                  221]
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(LamIbtidaa)
