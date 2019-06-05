import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import AboutPageStyle from 'assets/jss/material-kit-react/views/AboutPage.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'

import { Language, Brightness3, VerifiedUser, Book, Today, Explore } from '@material-ui/icons'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          color="transparent"
          brand="في منامي"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax filter image={require('assets/img/landing-bg.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}> مرحبا بكم في موقع الدرس </h1>
                <h4 className={classes.subtitle}>
                  Добро пожаловать на этот ресурс, который не является полноценным учебником, а лишь хранит в себе основные концепции
                  Мединского Курса. Львинная доля материалов была взята и перенесена в текстовый вид с этого плейлиста
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/user/abusyliman/playlists"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fas fa-play" />
                  Перейти к плэйлисту
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <h1 clssName="title"> Дополнительная информация </h1>
            <div className="desc">
              Так как этот ресурс <b>не является учебником</b>, но является некиим <b>справочником Мединского Курса</b>, то к нему возможно
              обращатся в процессе обучения самому Мединскому Курсу
            </div>
            <div className="desc">
              Ниже будет представлена дополнительная информация по изучению арабского языка или ссылки на тех, через кого вы можете узнать
              об этом прекрасном языке. Данные ссылки не являются рекламой, это <b>контакты мусульман преподователей</b>. С кем и как
              заниматься решайте сами, всё сугубо индивидуально, у учителей разные подходы. Уникальной технологии для обучения не
              существует. Пробуйте, решайте, изучайте, узнавайте. Самое главное это брать и делать (практика все решает)
            </div>
            <div className={classes.section}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Школа арабского языка"
                    description="Эта школа на каторую ссылается плэйлист в YouTube, с которого я брал материлы"
                    icon={Explore}
                    iconColor="info"
                    vertical
                    link={() => (
                      <a target="blank" href="http://nuruliman.ru/">
                        Ссылка на сайт
                      </a>
                    )}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Изучение Арабского с Носителем"
                    description="Брат из Сирии который знает несколько языков имеет огромный опыт в преподовании и работе переводчиком"
                    icon={VerifiedUser}
                    iconColor="warning"
                    vertical
                    link={() => (
                      <a target="blank" href="https://vk.com/arabskiyazik">
                        Ссылка на его вк группу
                      </a>
                    )}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Онлайн Школа Арабского Языка"
                    description="С онлайн школой арабского языка вы можете познакомиться с командой учителей"
                    icon={Language}
                    iconColor="info"
                    vertical
                    link={() => (
                      <a target="blank" href="https://arabic-school.org/">
                        Ссылка на сайт
                      </a>
                    )}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Арабский Язык с Арабом"
                    description="Брат с Египта научит вас различным фразам, поговоркам, хадисам. Делает уклон на разговорный"
                    icon={Brightness3}
                    iconColor="success"
                    vertical
                    link={() => (
                      <a href="https://www.youtube.com/channel/UCa6GjWb8qEKQQCimkEWbTLQ" target="blank">
                        Ссылка канал в ютубе
                      </a>
                    )}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Учебник Асмия"
                    description="В этом небольшой учебнике собран словообразовательные
                    и словоизменительные
                    парадигмы"
                    icon={Book}
                    iconColor="primary"
                    vertical
                    link={() => (
                      <a href="https://drive.google.com/file/d/13OTkM3n16ce4kDNobxPheUFVTnA4GCZp/view?usp=sharing" target="blank">
                        Ссылка на учебник
                      </a>
                    )}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Культурно-Просветительский Центр"
                    description="Преподование арабского языка и других языков в Культурно-Просветительском Центре"
                    icon={Today}
                    iconColor="gray"
                    vertical
                    link={() => (
                      <a
                        href="http://tenishcenter.ru/%D0%B0%D1%80%D0%B0%D0%B1%D1%81%D0%BA%D0%B8%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA/"
                        target="blank">
                        Ссылка на программу центра
                      </a>
                    )}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(AboutPageStyle)(Page)
