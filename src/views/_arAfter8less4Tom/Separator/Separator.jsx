import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="Разделитель"
          // isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque6.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">ضَمِيرُ فَصْلٍ (Разделитель)</h1>
              <p className="desc">
                Разберем местоимение разделитель <span className="desc__ar"> هو </span>. Местоимение разделитель обязательно должно быть
                личным местоимением выражающим именительный падеж (он, она, они, мы). Это местоимение используется для того чтоб мы с
                легкостью смогли провести черту между сказуемым и приложением. Приложение может быть заменителем к заменяемому слову, а
                может быть определением к определяемому слову
              </p>

              <h3 className="title"> Рассмотрим пример </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> هذا </span>
                  <span className="contrast"> هو </span>
                  <span> المُراقِبُ الجَديدُ </span>
                </div>
                <div className="arsent__translate">Это новый инспектор</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> هذا </span>
                  <span> المُراقِبُ الجَديدُ </span>
                </div>
                <div className="arsent__translate"> * </div>
              </div>

              <div className="desc">
                В первом примере <span className="desc__ar"> المُراقِبُ </span> является <span className="desc__ar"> خبر </span> (Сказуемым)
              </div>

              <div className="desc">
                <b> * </b> Во втором примере если удали разделитель, то решим что <span className="desc__ar"> المُراقِبُ </span> является
                заменителем к заменяемому слову <span className="desc__ar"> هذا </span> То есть если мы скажем так, то собеседник будет
                ждать продолжение (предложение будет не законченным) Получится как будто мы хотим сказать продолжение "Этот новый инспектор
                ..."
              </div>

              <h3 className="title"> Рассмотрим другой пример </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> حامد </span>
                  <span className="contrast"> هو </span>
                  <span> النَاجِحُ </span>
                </div>
                <div className="arsent__translate">Хамид успешный</div>
              </div>
              <div className="desc">
                <span className="desc__ar"> النَاجِحُ </span> является <span className="desc__ar"> خبر </span> только в том случае, если
                есть <span className="desc__ar"> ضَمِيرُ فَصْلٍ </span>, а если мы удалим разделитель и скажим
                <span className="desc__ar"> حامد النَاجِحُ </span>, то велика вероятность решить что
                <span className="desc__ar"> النَاجِحُ </span> является определением к определяемому слову
                <span className="desc__ar"> حامد </span>
              </div>

              <div className="desc">
                Используем разделитель для того чтоб не перепутать сказуемое с каким либо приложением (заменителем или определением к
                определяемому слову). Естественно самое главное его значение это <b>усиление смысла</b>
              </div>

              <h3 className="title"> Еще примеры </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> هذه </span>
                  <span className="contrast"> هي </span>
                  <span> السّيارةُ </span>
                </div>
                <div className="arsent__translate"> Вот она эта машина </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> هدا </span>
                  <span className="contrast"> هو </span>
                  <span> بيت </span>
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

export default withStyles(arabicPageStyle)(Page)
