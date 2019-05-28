import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
// import AnimateCard from 'components/AnimateCard/AnimateCard'
// import Word from 'components/word'

class Breed8 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="VIII порода"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque10.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="h1ar">(VIII) افْتَعَلَ</h1>

              <div className="desc">
                Добавлена соеденительная <span className="desc__ar"> ء </span> перед первой буквой и <span className="desc__ar"> ت </span>
                после неё
              </div>

              <div className="items items_islabel">
                <div className="item">
                  <h2 className="h2ar ">أَفْعَلَ</h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">أَرْسَلَ</div>
                    <div className="arsent__translate">Отправил</div>
                  </div>
                  <div className="arsent mobile-hid">
                    <div className="arsent__original contrast">أَجَابَ</div>
                    <div className="arsent__translate">Ответил</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">أَلْقَى</div>
                    <div className="arsent__translate">Бросил</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">آمَنَ</div>
                    <div className="arsent__translate">Уверовал</div>
                  </div>
                  <span className="item__label">الماضي</span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">يُفْعِلَ</h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">يُرْسِلُ</div>
                    <div className="arsent__translate">Отправляет</div>
                  </div>
                  <div className="arsent mobile-hid">
                    <div className="arsent__original contrast">يُجِيبُ</div>
                    <div className="arsent__translate">Отвечает</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">يُلْقِي</div>
                    <div className="arsent__translate">Бросает</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">يُؤمِنُ</div>
                    <div className="arsent__translate">Верит</div>
                  </div>
                  <span className="item__label">المُضارِع</span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُفْعِلٌ</h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> يُرْسِلُ </span>-<span className="contrast"> مُرْسِلٌ </span>
                    </div>
                    <div className="arsent__translate">Отправитель</div>
                  </div>
                  <div className="arsent mobile-hid">
                    <div className="arsent__original">
                      <span> يُجِيبُ </span>-<span className="contrast"> مُجِيبٌ </span>
                    </div>
                    <div className="arsent__translate">Отвечающий</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> يُلْقِي </span>-<span className="contrast"> مُلْقِي </span>
                    </div>
                    <div className="arsent__translate">Бросающий</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> يُسْلِمُ </span>-<span className="contrast"> مُسْلِمٌ </span>
                    </div>
                    <div className="arsent__translate">Мусульманин</div>
                  </div>
                  <span className="item__label"> اسم الفَاعِل </span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُفْعَلٌ</h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> يُرْسِلُ </span>-<span className="contrast"> مُرْسَلٌ </span>
                    </div>
                    <div className="arsent__translate">Посланный</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> يُلْقِي </span>-<span className="contrast"> مُلْقًى </span>
                    </div>
                    <div className="arsent__translate">Брошенный</div>
                  </div>
                  <span className="item__label"> اسم المَفْعُول </span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">إِفْعَالٌ</h2>
                  <div className="arsent">
                    <span className="arsent__original">
                      أَرْسَلَ - <span className="contrast"> إِرْسَالٌ </span>
                    </span>
                    <div className="arsent__translate">Отправление</div>
                  </div>
                  <div className="arsent mobile-hid">
                    <span className="arsent__original">
                      أَجابَ - <span className="contrast"> إِجابةٌ </span>
                    </span>
                    <div className="arsent__translate">Ответ</div>
                  </div>

                  <div className="arsent">
                    <span className="arsent__original">
                      أَلْقَى - <span className="contrast"> إِلْقَاءٌ </span>
                    </span>
                    <div className="arsent__translate">Бросание</div>
                  </div>
                  <div className="arsent">
                    <span className="arsent__original">
                      آمَنَ - <span className="contrast"> إِيمَانٌ </span>
                    </span>
                    <div className="arsent__translate">Вера</div>
                  </div>

                  <span className="item__label">المصدر</span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">أفْعِلْ</h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> تُرْسِلُ </span>- <span> أصْلِهُ تُأَرْسِلُ </span>- <span className="contrast"> أَرْسِلْ </span>
                    </div>
                    <div className="arsent__translate">Отправь</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> تُجِيبُ </span>- <span> أصْلِهُ تُأَجِيبُ </span>- <span className="contrast"> أَجِبْ </span>
                    </div>
                    <div className="arsent__translate">Ответь (из за двух сукунов ушла слабая буква)</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> تُؤْمِنُ </span>- <span className="contrast"> آمِنْ </span>
                    </div>
                    <div className="arsent__translate">Верь</div>
                  </div>
                  <span className="item__label">الأمر</span>
                </div>
              </div>

              <h2 className="title"> Примеры</h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span> لِما </span>
                  <span className="contrast"> أَخْرَجْتَ </span>
                  <span> السبّور يا أسامةُ؟ </span>
                  <span className="contrast"> أَدْخِلْهَا </span>
                  <span> بِسُرْعَةٍ </span>
                </div>
                <div className="arsent__translate"> Зачем ты вытащил доску? Затащи ее обратно, быстро </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> و ما </span>
                  <span className="contrast"> أَدْراكَ </span>
                  <span> أَنّهُ يَكْذِب؟ </span>
                </div>
                <div className="arsent__translate"> Что заставило тебя знать что он врёт? </div>
              </div>
              {/* -------------------------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Breed8)
