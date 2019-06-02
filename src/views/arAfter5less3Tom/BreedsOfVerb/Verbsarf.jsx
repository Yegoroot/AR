import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import AnimateCard from 'components/AnimateCard/AnimateCard'
// import Word from 'components/word'
import verbsarf from 'assets/img/verbsarf.png'

class Intr extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="Сарф для глагола"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque3.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <img src={verbsarf} style={{ width: '100%' }} alt="Схема глаголов" />
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">Сарф глаголов</h1>

              <div className="desc">
                В арабскоя языке есть <b>трёхбуквенные</b> глаголы и <b>четырёхбуквенные</b> (некоторые ученые утверждают что 81% приходится
                на трёхбуквенные). Эти глаголы могут быть двух видов <span className="desc__ar"> مُجَرَّدٌ </span>
                (первообразный) или <span className="desc__ar"> مَزِيدٌ </span> (производный)
              </div>

              <div className="desc">
                <b>Первообразный</b> содержит в себе только коренные, к <b>производному (порода глагола)</b> добавлены служебные буквы одна
                или больше. Востоковеды арабские глаголы нумеруют при помощи римских цифр а арабы говорят "Этот глагол с одной служебной
                буквой, этот с двумя"
              </div>

              <div className="desc">
                <b>Породы</b> (производные глаголы) это особоые свойственные арабскому языку глагольные образования, которые меняют
                первичное значение корня (трех или четерые буквенного) глагола в смысле <b> качества </b>, <b> количества </b>,{' '}
                <b> направления </b>
                или <b> состояния </b>.
              </div>

              <h2 className="title"> Трехбуквенные </h2>
              <h3 className="title"> Первообразный </h3>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> فَعَلَ - يَفْعُلُ </span>:<span> كتب - يَكتُب </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> فَعَلَ - يَفْعِلُ </span>:<span> جلس - يَجْلِسُ </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> فَعَلَ - يَفْعَلُ </span>:<span> ذَهَبَ - يَذْهَبُ </span>
                </div>
                <div className="arsent__translate">
                  Если серединная или конечная буква горловая <b> ا ء ع غ ح خ </b>, то велика вероятность этого шаблона
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> فَعِلَ - يَفْعَلُ </span>:<span> شَرِبَ - يَشْرَبُ</span>
                </div>
                <div className="arsent__translate">Если в прошедшем времени кясра то в настоящем времени практически всегда фатха</div>
              </div>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> فَعَلَ - يَفْعُلُ </span>:<span> كَثُرَ - يَكْثُرُ </span>
                </div>
                <div className="arsent__translate">Если в прошедшем времени с даммой то и настоящем времени дамма (без вариантов)</div>
              </div>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> فَعِلَ - يَفْعِلُ </span>:<span> وَرِثَ - يَرِثُ </span>
                </div>
                <div className="arsent__translate">Очень редкий глагол, их считают исключениями</div>
              </div>

              <h3 className="title"> Производный </h3>
              <div className="desc">
                В производном глаголе трехбуквенном три группы:
                <br />
                <br />
                <span className="desc"> مزيد فيه حرف واحد </span> [<b> с одной буквой</b>] это породы II, III, IV
                <br />
                <br />
                <span className="desc"> مزيد فيه حرفان </span> [<b>с двумя буквами</b>] это породы V, VI, VII, VIII, IX
                <br />
                <br />
                <span className="desc"> مزيد فيه ثلاثة أحرف </span> [<b>с тремя буквами</b>] это X порода
              </div>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__translate">
                    <span className="contrast_2">Масдары </span> для трёхбуквенных глаголов основываются на усных традициях. Но у
                    <span className="contrast_2"> производных глаголов</span> есть
                    <span className="contrast"> определенные шаблоны </span>
                  </div>
                </div>
              </AnimateCard>

              {/* -------------------------------- */}
              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__translate">
                    <span className="contrast_2">Приставки </span> настоящего времени в
                    <span className="contrast_2"> четырёх буквенных </span> глаголах ВСЕГДА
                    <span className="contrast"> приходят с Даммой </span>
                  </div>
                </div>
              </AnimateCard>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__translate">
                    У производных глаголов имя деятеля (причастие действительного залога) и мафъуль (причастие страдательного залога)
                    образуються по одному принципу
                  </div>
                </div>
              </AnimateCard>

              <h2 className="title"> Четырёхбуквенные </h2>
              <div className="desc">Смотрите раздел "Четырёхбуквенный глагол"</div>

              {/* -------------------------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Intr)
