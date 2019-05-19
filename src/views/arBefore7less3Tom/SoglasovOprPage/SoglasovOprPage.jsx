import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class SoglasovOpr extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="Согласованное определение"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque4.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">Согласованное определение</h1>

              <div className="desc">
                Согласованное определение ставится после определяемого и полностью согласуется в роде, числе, падеже, состоянии. Чаще всего
                в роде согласованного определения выступает прилагательное
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> عبّاس </span>
                  <span className=""> تاجر </span>
                  <span className="contrast"> غني </span>
                </div>
                <div className="arsent__translate">
                  Аббас
                  <span className=""> торговец </span> [определяемое слово]
                  <span className="contrast"> богатый </span> [определение]
                </div>
              </div>

              <div className="desc">
                Определяемое может иметь при себе одновременно как несогласованное определение так и согласованное; В таком случае с начала
                за определяемым следует несогласованное определение (идафа) затем согласованное <br /> <br />
                <b>Определяемое -> Не согласованное -> Согласованное</b>
              </div>

              <h3 className="title">
                Если несогласованное определение (идафа) стоит в неопределенном состоянии, то и имя определяемое считается неопределенным
              </h3>

              <div className="arsent">
                <div className="arsent__original">
                  <span> دفترُ</span>
                  <span className="contrast"> طالبةٍ </span> <span className="contrast_2"> نظيفٌ </span>
                </div>
                <div className="arsent__translate">
                  <div>
                    (какая то) <span className="contrast_2"> Чистая </span>
                    <span> тетрадь </span> (какой то) <span className="contrast"> студентки </span>
                  </div>
                </div>
              </div>

              <div className="desc">
                <span className="desc__ar"> دفترُ </span> - тетерадь [определяемое] <br />
                <span className="contrast desc__ar"> طالبةٍ </span> - <span className="contrast"> студентки </span> (какой то) [идафа при
                определяемом]
                <br />
                <span className=" contrast_2 desc__ar"> نظيفٌ </span> - <span className="contrast_2"> чистая </span> [согласованное
                определение при определяемом]
              </div>

              <h3 className="title">Если же идафа в определенном состоянии, то и определяемое считается в определенном состоянии</h3>

              <div className="arsent">
                <div className="arsent__original">
                  <span> مفتاحُ</span>
                  <span className="contrast"> البابِ </span> <span className="contrast_2"> الكبيرِ </span>
                </div>
                <div className="arsent__translate">
                  <div>
                    Ключ (от) <span className="contrast_2"> большой </span>
                    <span className="contrast"> двери </span>
                  </div>
                </div>
              </div>

              <div className="desc">
                <span className="desc__ar"> مفتاحُ </span> - ключ [определяемое] <br />
                <span className="contrast desc__ar"> البابِ </span> - <span className="contrast"> двери </span> [идафа при определяемом]
                <br />
                <span className=" contrast_2 desc__ar"> الكبيرِ </span> - <span className="contrast_2"> большой </span> [согласованное
                определение при идафе]
              </div>

              <h3 className="title">
                В данном случае когда определение в идафе имеет собственную идафу, то само определение (второй идафы) пишется без танвина и
                без определенного артикля, только лишь идафА идафЫ получает артикль
              </h3>

              <div className="arsent">
                <div className="arsent__original">
                  <span> مفتاحُ </span>
                  <span className="contrast"> بابِ </span> <span className="contrast_2"> البيتِ </span>
                </div>
                <div className="arsent__translate">
                  <div>
                    Ключ (от) <span className="contrast"> двери </span>
                    <span className="contrast_2"> дома </span>
                  </div>
                </div>
              </div>

              <div className="desc">
                <span className="desc__ar"> مفتاحُ </span> - ключ [определяемое] <br />
                <span className="contrast desc__ar"> بابِ </span> - <span className="contrast"> двери </span> [идафа при определяемом]
                <br />
                <span className=" contrast_2 desc__ar"> البيتِ </span> - <span className="contrast_2"> дома </span> [идафа при идафе]
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(SoglasovOpr)
