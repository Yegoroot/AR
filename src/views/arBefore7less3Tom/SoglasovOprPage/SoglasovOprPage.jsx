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

        <Parallax small filter image={require('assets/img/mosque/minaret.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">Согласованное определение 🌴</h1>

              <div className="desc">
                <b> Согласованное определение </b> ставится после определяемого и
                <b> полностью согласуется в роде, числе, падеже, состоянии </b> . Чаще всего в роде согласованного определения выступает
                прилагательное
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> عبّاس </span>
                  <span className=""> تاجر </span>
                  <span className="contrast"> غني </span>
                </div>
                <div className="arsent__translate">
                  Аббас
                  <span className=""> торговец </span> (определяемое слово)
                  <span className="contrast"> богатый </span> (определение)
                </div>
              </div>

              <div className="desc">
                Определяемое может иметь при себе одновременно как несогласованное определение так и согласованное, в таком случае с начала
                за определяемым следует несогласованное определение (идафа) затем согласованное <br /> <br />
                <b className="contrast_2">Определяемое -> Не согласованное -> Согласованное</b>
              </div>

              <h2 className="title">Если идафа в неопределенном состоянии ✍️</h2>
              <div className="desc">
                Если несогласованное определение (идафа) стоит в неопределенном состоянии, то и имя определяемое считается неопределенным
              </div>

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

              <div className="arsent">
                <div>
                  <span className="arsent__original"> دفترُ </span>
                  <span className="arsent__translate">- тетерадь [определяемое]</span>
                </div>
                <div>
                  <span className="arsent__original contrast"> طالبةٍ </span>
                  <span className="arsent__translate">
                    - (какой то) <span className="contrast"> студентки </span> [идафа при определяемом]
                  </span>
                </div>
                <div>
                  <span className="arsent__original contrast_2"> نظيفٌ </span>
                  <span className="arsent__translate">
                    - <span className="contrast_2"> чистая </span> [согласованное определение при определяемом]
                  </span>
                </div>
              </div>

              <h2 className="title"> Если идафа в определенном состоянии ✍️</h2>
              <div className="desc">Если же идафа в определенном состоянии, то и определяемое считается в определенном состоянии</div>

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

              <div className="arsent">
                <div>
                  <span className="arsent__original"> مفتاحُ </span>
                  <span className="arsent__translate">- ключ [определяемое]</span>
                </div>
                <div>
                  <span className="arsent__original contrast"> البابِ </span>
                  <span className="arsent__translate">
                    - <span className="contrast"> двери </span> [идафа при определяемом]
                  </span>
                </div>
                <div>
                  <span className="arsent__original contrast_2"> الكبيرِ </span>
                  <span className="arsent__translate">
                    - <span className="contrast_2"> большой </span> [согласованное определение при идафе]
                  </span>
                </div>
              </div>

              <h2 className="title"> Если определение в идафе имеет собственную идафу ✍️</h2>
              <div className="desc">
                В данном случае когда определение в идафе имеет собственную идафу, то само определение (второй идафы) пишется без танвина и
                без определенного артикля, только лишь идафА идафЫ получает артикль
              </div>

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

              <div className="arsent">
                <div>
                  <span className="arsent__original"> مفتاحُ </span>
                  <span className="arsent__translate">- ключ [определяемое]</span>
                </div>
                <div>
                  <span className="arsent__original contrast"> بابِ </span>
                  <span className="arsent__translate">
                    - <span className="contrast"> двери </span> [идафа при определяемом]
                  </span>
                </div>
                <div>
                  <span className="arsent__original contrast_2"> البيتِ </span>
                  <span className="arsent__translate">
                    - <span className="contrast_2"> дома </span> [идафа при идафе]
                  </span>
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

export default withStyles(arabicPageStyle)(SoglasovOpr)
