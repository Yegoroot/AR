import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Разделитель (ضَمِيرُ فَصْلٍ) в арабском языке</title>
          <meta
            name="description"
            content="В арабском языке есть местоимение разделитель, задача у которого усиливать смысл. Так же это местоимение используется для того чтоб не перепутать сказуемое с  приложением"
          />
        </Helmet>
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
              <h1 className="title h1ar">
                ضَمِيرُ فَصْلٍ
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>
              <p className="desc">
                Разберем <b> разделитель </b> <span className="desc__ar"> هو </span>. Местоимение разделитель обязательно должно быть личным
                местоимением выражающим именительный падеж (он, она, они, мы).
                <br />
                <br />
                Cамое главное его значение это <b> усиление смысла </b> Так же это местоимение используется для того чтоб
                <b> не перепутать сказуемое с каким либо приложением </b> (заменителем или определением к определяемому слову)
              </p>

              <h2 className="title">
                {' '}
                Чтоб не спутать с заменителем{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  <span> هذا </span>
                  <span className="contrast"> هو </span>
                  <span> المُراقِبُ الجَديدُ </span>
                </div>
                <div className="arsent__translate">
                  <b className="desc__ar contrast_2"> * </b> Это новый инспектор
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> هذا </span>
                  <span> المُراقِبُ الجَديدُ </span>
                </div>
                <div className="arsent__translate">
                  <b className="desc__ar contrast_2"> ** </b>
                </div>
              </div>

              <div className="desc">
                В первом (<b className="desc__ar contrast_2"> * </b>) примере <span className="desc__ar"> المُراقِبُ </span> является
                <span className="desc__ar"> خبر </span> (Сказуемым)
              </div>

              <div className="desc">
                Во втором (<b className="desc__ar contrast_2"> ** </b>) примере если удалить разделитель, то решим что
                <span className="desc__ar"> المُراقِبُ </span> является заменителем к заменяемому слову
                <span className="desc__ar"> هذا </span> То есть если мы скажем так, то собеседник будет ждать продолжение (предложение будет
                не законченным) Получится как будто мы хотим сказать продолжение "Этот новый инспектор ..."
              </div>

              <h2 className="title">
                {' '}
                Чтоб не спутать с определением{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  <span> حامد </span>
                  <span className="contrast"> هو </span>
                  <span> النَاجِحُ </span>
                </div>
                <div className="arsent__translate">Хамид успешный</div>
              </div>
              <div className="desc">
                Слово <span className="desc__ar"> النَاجِحُ </span> является <span className="desc__ar"> خبر </span> только в том случае,
                если есть <span className="desc__ar"> ضَمِيرُ فَصْلٍ </span>, а если мы удалим разделитель и скажим
                <span className="desc__ar"> حامد النَاجِحُ </span>, то велика вероятность решить что
                <span className="desc__ar"> النَاجِحُ </span> является определением к определяемому слову
                <span className="desc__ar"> حامد </span>
              </div>

              <h2 className="title">
                {' '}
                Другие примеры{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>
              </h2>
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
