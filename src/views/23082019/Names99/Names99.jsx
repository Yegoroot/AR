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

import CardWord from 'components/CardWord'

import Names from '../../../api/99'

arabicPageStyle.nameslist = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
  gridGap: 20,
}

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>99 Прекрасных имён Аллахъа</title>
          <meta
            name="description"
            content="Асма Аль-Хусна. Список прекрасных имен Аллахъа"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="99 имён Аллахъа"
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
                Прекрасные Имена Аллахъа
                <span className="ph">&nbsp;§ </span>
              </h1>
              {/* <p className="desc">
                Разберем <b> разделитель </b>{' '}
                <span className="desc__ar"> هو </span>. Местоимение разделитель
                обязательно должно быть личным местоимением выражающим
                именительный падеж (он, она, они, мы).
                <br />
                <br />
                Cамое главное его значение это <b> усиление смысла </b> Так же
                это местоимение используется для того чтоб
                <b> не перепутать сказуемое с каким либо приложением </b>{' '}
                (заменителем или определением к определяемому слову)
              </p> */}
              <div className={classes.nameslist}>
                {Names.map(data => (
                  <CardWord key={data.id} data={data} />
                ))}
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
