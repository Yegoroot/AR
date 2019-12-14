import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

// import { Link } from 'react-router-dom'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Правила понимания имён и атрибутов</title>
          <meta
            name="description"
            content="При изучении имен Аллахъа необходимо понимать некоторые правила"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Правила понимания имён и атрибутов"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white',
          }}
          {...rest}
        />

        <Parallax
          small
          filter
          image={require('assets/img/flowers/flowers1.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title ">
                Правила понимания имён и атрибутов
                <span className="ph">&nbsp;§ </span>
              </h1>
              <p className="desc">
                При изучении имён и атрибутов Аллахъа необходимо понять
                некоторые их правила:
              </p>

              <h2>Совершенство</h2>
              <div>
                Все имена и атрибуты Аллахъа - прекрасные, совершенные в своей
                красоте
              </div>

              <h2>Имена являються качеством</h2>
              <div>
                Имена Аллахъа являються одновремено и Его качествами
                <p>
                  С человеком например нет, так например мужчина которого зовут
                  Хаким, может являться одним из глупых
                </p>
              </div>

              <h2>Не обсуждаються</h2>
              <div>
                Имена и качества Аллахъа не подлежат обсуждению человеческому
                разуму <i>( Не следуй тому, в чем знаний нет)</i>
              </div>

              <h2>Имена не ограничиваются</h2>
              <div>Имена и атрибуты не ограничиваются количеством</div>

              <h2>Качества больше чем имена</h2>
              <div>
                Любое имя есть качество, но так же качества извлекаются от
                действий, а действия Аллахъа безграничны
              </div>

              <h2>Качества деляться на два понимания</h2>
              <div>
                Качества делятся на <b> подтверждающие</b> и <b> отрицающие</b>{' '}
                <p>
                  Подтверждающие это те, которые пришли к нам из Корана и сунны
                  и мы подтверждаем их не внося и не убавляя
                </p>
                <p>
                  Опровергающие это те, которые не подобает Аллахъу, например
                  сон, дремота
                </p>
                <p>
                  Мы должны верить в имена и качества так, как они пришли к нам
                  от самого Аллахъа и Его посланика. Не уподобляя его качества -
                  качествам людей, не придавая образа, облика, не отрицая эти
                  имена и качества
                </p>
              </div>

              {/* ------------------ */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Page)
