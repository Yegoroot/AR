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

class HarfulAw extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Частица: если, если бы (حرف لو) </title>
          <meta
            name="description"
            content="Частица لو (если, если бы) обозначает три вещи: условие, так же это условие связанно с прошедшем временем и ограничение"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Частица لو"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque19.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                حرف لو
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>
              <div className="desc">
                Частица لو (если, если бы) обозначает три вещи:
                <p>
                  <b> Условие, </b>
                  так же
                  <b> это условие связанно с прошедшем временем </b> и <b> ограничение </b>
                </p>
                <p>
                  Следствие условия начинается с Лям
                  <span className="contrast desc__ar"> ل </span> если следствие утвердительное предложение. В отрицательных предложениях
                  условия Лям добавляется редко
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
                <div className="arsent__translate">Если бы ты услышал его историю то ты непременно бы заплакал</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> لو </span>
                  <span className=""> حَضَرتَ أمس ما شَكَوْتك إلى المدير </span>
                </div>
                <div className="arsent__translate">Если бы ты присутствовал вчера, то я бы не пожаловался директору</div>
              </div>

              <h2 className="h2ar">
                {' '}
                ولو{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  <span> اُحْضُرْ الامْتِحانَ </span>
                  <span className="contrast"> ولو </span>
                  <span className=""> كُنْتَ مَريضاً</span>
                </div>
                <div className="arsent__translate">
                  Присутсвуй на экзамене, <span className="contrast"> даже если </span> ты болен
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> اشْتَرِ هذا المُجَمَ </span>
                  <span className="contrast"> ولو </span>
                  <span className=""> كانَ غَالِياً </span>
                </div>
                <div className="arsent__translate">
                  Купи этот словарь, <span className="contrast"> даже если </span> он дорогой
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

export default withStyles(arabicPageStyle)(HarfulAw)
