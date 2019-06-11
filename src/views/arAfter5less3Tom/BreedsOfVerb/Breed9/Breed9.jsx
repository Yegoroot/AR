import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
// import AnimateCard from 'components/AnimateCard/AnimateCard'
// import Word from 'components/word'

class Breed4 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="IX порода"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque9.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="h1ar">(IX) اِفْعَلَّ 🌴</h1>

              <div className="desc">
                Перед первой коренной приходит хамза, а третья кореная удваивается. По своему значению эта порода указывает на
                <b> цвета </b> или какие либо <b> недостатки </b>. И передает эта порода становление этих качеств
              </div>

              <div className="desc">
                Так же можно указать и 11 породу <span className="desc__ar"> اِفْعَالَّ </span>, но в отличии от 9 эта парода указывает
                только
                <b> цвета </b>. Этот алиф указывает на усиление 9 породы (Например не просто почернел а сильно почернел)
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> أحْمَر </span> -<span className="contrast"> اِحْمَرَّ </span>
                </div>
                <div className="arsent__translate"> Красный - покраснел </div>
              </div>

              <div className="items items_islabel">
                <div className="item">
                  {/* <h2 className="h2ar "> اِفْعَلَّ  ✍️  </h2> */}
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِحْمَرَّ </div>
                    <div className="arsent__translate"> Покраснел </div>
                  </div>
                </div>

                <div className="item">
                  {/* <h2 className="h2ar "> يَفْعَلُّ  ✍️  </h2>*/}
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> يَحْمَرُّ </div>
                    <div className="arsent__translate"> Краснеет </div>
                  </div>
                </div>

                <div className="item">
                  {/* <h2 className="h2ar "> اِفْعِلالٌ  ✍️  </h2>  */}
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِحْمِرَارٌ </div>
                    <div className="arsent__translate"> Покраснение </div>
                  </div>
                </div>

                <div className="item">
                  {/* <h2 className="h2ar ">  ✍️  </h2> */}
                  <span className="item__label"> اسم الفَاعِل </span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> مُحْمَرٌ </div>
                    <div className="arsent__translate"> Покрасневший </div>
                  </div>
                </div>
              </div>

              <h2 className="title"> Примеры ✍️ </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span> اِحْتَرَقَ الخَشَبَ واسْوَدَّ </span>
                </div>
                <div className="arsent__translate"> Дерево сгорело и почернело </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> غَسَلْتُ الثّوبَ الوَسِخَ بالصابون فَابْيَضَّ </span>
                </div>
                <div className="arsent__translate"> Постирал грязное платье мылом и оно побелело </div>
              </div>

              {/* -------------------------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Breed4)
