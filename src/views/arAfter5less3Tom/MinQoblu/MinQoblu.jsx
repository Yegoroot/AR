import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import AnimateCard from 'components/AnimateCard/AnimateCard'
class MinQoblu extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="من قبلُ"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque28.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="h1ar">مِن قبلُ 🌴</h1>

              <div className="desc">
                По идее мы должны сказать <span className="desc__ar contrast_2"> من قبلِ </span>, но мы так не употребляем, а говорим
                <span className="desc__ar contrast"> من قبلُ </span> (через дамму) значит там что то происходит
              </div>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">
                    <span className="contrast"> مِنْ قَبْلُ. </span>
                    <span> يُبْنى </span>
                    <span className="contrast_2"> (قَبل) </span>
                    <span> و </span>
                    <span className="contrast_2"> (بعد)</span>
                    <span> على الضم إذا قُطِعَ عن الإضافة لفظاً لا معنى. </span>
                  </div>
                  <div className="arsent__translate">
                    Строим قبل и بعد вместе с даммой когда вторая часть (у этого словосочетания) отрезана, отрезана словестно но не по
                    смыслу
                  </div>
                </div>
              </AnimateCard>

              <div className="arsent">
                <div className="arsent__original">
                  <span> لله الأمرُ </span>
                  <span className="contrast"> مِنْ قَبْلُ </span>
                  <span> و</span>
                  <span className="contrast"> منْ بَعْدُ </span>
                </div>
                <div className="arsent__translate">
                  [الروم / 4] В основе من قبل ذالك و من بعد ذالك. Вторая часть этой изофетной связки ذالك удалена за ненадобностью, но так
                  как она у нас еще в умах содержится, мы указываем на то что там у нас содержится при помощи даммы
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

export default withStyles(arabicPageStyle)(MinQoblu)
