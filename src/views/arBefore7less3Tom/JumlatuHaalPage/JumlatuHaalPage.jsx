import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'
import AnimateCard from 'components/AnimateCard/AnimateCard.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class JumlatuHaalPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="الحال"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque2.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">الحال</h1>

              <div className="desc">
                <b>
                  Состояние (<span className="desc__ar">الحال</span>)
                </b>
                &nbsp;- обстоятельство образа действия или дополнение, которое
                <b>
                  &nbsp; проясняет состояние владельца (<span className="desc__ar">صاحِبُ الحال</span>)
                </b>
                . Отвечает на вопрос
                <b> "как?"</b>. Само слово
                <span className="desc__ar"> الحال </span> буквально означает "ситуация" или "положение. (В каком положении пребывает объект,
                в каком состоянии)
                {/* <br />
                Перед
                <span className="desc__ar"> جملة الحال </span> приходит глагольное предложение в то время как само оно именное */}
              </div>

              <h2 className="h2ar title">صاحِبُ الحال</h2>

              <div className="desc">Владелец (صاحِبُ الحال) может быть выражен через:</div>
              <h3 className="title">
                Имя деятеля (<span className="h3ar"> فاعل </span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> دخل </span>
                  <span className="contrast_2"> المدرس </span>
                  <span> الفصل </span>
                  <span className="contrast">غَضِبًا </span>
                </div>
                <div className="arsent__translate">
                  Пришел учитель в класс <span className="contrast">злым </span>(пришёл в состоянии злости)
                </div>
              </div>

              <h3 className="title ">
                Глагол страдательного залога (<span className="h3ar">نَائِبُ فاعل</span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> يُؤْكَلُ </span>
                  <span> اللحمُ </span>
                  <span className="contrast"> مَطْبوخاً </span>
                </div>
                <div className="arsent__translate">
                  Мясо кушается <span className="contrast"> приготовленным </span>
                </div>
              </div>

              <h3 className="title ">
                Прямое дополнение (<span className="h3ar">مفعول به</span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> اِشْتَرَيتُ </span>
                  <span className="contrast_2"> الكِتَابَ </span>
                  <span className="contrast"> مُجَلَّداً </span>
                </div>
                <div className="arsent__translate">
                  Купил книгу <span className="contrast"> переплетённую </span> (в переплёте)
                </div>
              </div>

              <h3 className="title ">
                Сказуемое (<span className="h3ar">خَبَر</span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> هذا </span>
                  <span className="contrast_2"> الهِلالُ </span>
                  <span className="contrast"> طالِعاً </span>
                </div>
                <div className="arsent__translate">
                  Этот серпик луны <span className="contrast"> восходящий </span>
                </div>
              </div>

              <h3 className="title">
                Подлежащее (<span className="h3ar"> مُبْتَدأ </span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> دَخَلْتُ على المدير, و عنده </span>
                  <span className="contrast_2"> مدرسُنا </span>
                  <span className="contrast"> جالِساً </span>
                </div>
                <div className="arsent__translate">
                  Пришёл к директору, а там наш учитель <span className="contrast"> сядящий </span> (сидит)
                </div>
              </div>

              <h2 className=" title"> Состояние صاحِبِ الحالِ </h2>
              <div className="desc">
                В основе <span className="desc__ar"> صاحِبِ الحالِ </span> владелец <span className="desc__ar"> الحالِ </span> приходит в
                определённом состоянии, кроме случев когда есть какой то разрешитель (<span className="desc__ar"> مُسَوِّغ </span>).
              </div>

              <h2 className="h2ar title">جملة الحال </h2>

              <div className="desc">
                <span className="desc__ar">جملة الحال</span> соединяется с помощью
                <span className="desc__ar contrast_2"> واو الحال </span>. <br />
                Но если в предложении глагол прошедшего времени в утвердительной форме то нужно ставить с
                <span className="desc__ar"> واو الحال </span> частицу
                <span className="desc__ar contrast_2"> قد </span>.
              </div>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">
                    <span className="contrast"> واو الحال </span>
                    <span> + </span>
                    <span> الجملة الاسمية </span>
                    <br />
                    <span className="contrast"> واو الحال </span>
                    <span> + </span>
                    <span className="contrast_2"> قَدْ </span>
                    <span> + </span>
                    <span> الجملة الفعلية فعلها ماضٍ مُثْبَتٌ </span>
                  </div>
                  <div className="arsent__translate"> </div>
                </div>
              </AnimateCard>

              <div className="arsent">
                <div className="arsent__original">
                  دخلتُ المسجد
                  <span className="contrast_2"> و </span>
                  <span className="contrast"> الإمام يُسَلِّمُ </span>
                </div>
                <div className="arsent__translate">Я зашел в мечеть в то время когда имам давал салям</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  دخلتُ المسجد
                  <span className="contrast_2"> وقد </span>
                  <span className="contrast"> سَلَّمَ الإمامُ </span>
                </div>
                <div className="arsent__translate">Я зашел в мечеть когда имам уже дал салям</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  قرأ الكتاب
                  <span className="contrast">
                    <span className="contrast_2"> و </span> أنا جالِس
                  </span>
                </div>
                <div className="arsent__translate">
                  Читал книгу
                  <span className="contrast"> сидя </span>(в состоянии сидения)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  شربت الشاي و القهوة
                  <span className="contrast">
                    <span className="contrast_2"> و </span> أنا في العَمل
                  </span>
                </div>
                <div className="arsent__translate">
                  Пил чай и кофе
                  <span className="contrast"> когда был на работе</span> (в состоянии нахождения на работе)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  أكل أخي تفاحتي
                  <span className="contrast">
                    <span className="contrast_2"> و </span> أنا نائِم
                  </span>
                </div>
                <div className="arsent__translate">
                  Мой брат ел мои яблоки
                  <span className="contrast"> пока я спал </span> (был в состоянии сна)
                </div>
              </div>

              <h2 className=" title"> Дополнительные примеры </h2>
              <div className="arsent">
                <div className="arsent__original">
                  <span> شرب اِبني </span>
                  <span className="contrast_2"> الماء </span>
                  <span className="contrast"> صافِيًا </span>
                </div>
                <div className="arsent__translate">
                  Мой сын пил воду <span className="contrast"> чистой </span> (в момент пития вода была чистой, в чистом виде)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">شرب اِبني الماء الصافِي</div>
                <div className="arsent__translate">
                  Мой сын пил чистую воду [ Если хотим сказать что вода и была чистой, то используем простое прилагательное ]
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جَاءَني </span>
                  <span className="contrast"> سائلاً </span>
                  <span className="contrast_2"> طالبٌ </span>
                </div>
                <div className="arsent__translate">
                  Пришёл ко мне <span className="contrast"> спрашивающий </span> студент [ صاحِبُ الحال пришёл перед الحال ]
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جَاءَني </span>
                  <span className="contrast_2"> طالبٌ مُواظِبٌ </span>
                  <span className="contrast"> مُسْتَأذِناً </span>
                  <span> في الخُرُوج </span>
                </div>
                <div className="arsent__translate">
                  Пришёл ко мне <span className="contrast"> просящийся </span> войти, старательный студент [ صاحِبُ الحال пришёл с
                  определением ]
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جَاءَني </span>
                  <span className="contrast_2"> طَبيبُ الأسْنَانٍ </span>
                  <span className="contrast"> مُسْتَفْتِياً </span>
                </div>
                <div className="arsent__translate">
                  Пришёл ко мне дантист <span className="contrast"> спрашивая совета </span> [ صاحِبُ الحال пришёл в идафе ]
                </div>
              </div>

              {/* --------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(JumlatuHaalPage)
