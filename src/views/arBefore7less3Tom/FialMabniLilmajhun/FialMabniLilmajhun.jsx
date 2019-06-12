import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Word from 'components/word'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import AnimateCard from 'components/AnimateCard/AnimateCard'

class FialMabniLilmajhun extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="الفعل المبني لِلمجهول"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque14.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                الفِعْل المَبْنِي لِلمَجْهُول{' '}
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>
              <div className="desc">
                Глагол страдательного залога, это действие с необозначенным лицом, бывает два варианта, <b> лицо неизвестно вовсе</b> , или
                <b> из контекста понятно кто совершил </b>. Употребляется в том случае если не имеет значение кто совершает действие, когда
                акцент идет на сам результат. Часто встречается в новостях.
                <br /> <br />
                Часто, если стоит в прошедшем времени то подразумеватся что действие происходило один раз, если не добавили дополнительную
                информацию, а в настоящем если употребляется то смысл <b> факт, инструкцаия, предписание, правило </b>
              </div>
              <h2 className="title">
                Активный залог{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                Рассмотрим пример ниже. Заметьте фокус на деятеле, деятель Хамид, обратите внимание на огласовку прямого дополнения (مفعول
                به)
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2">أَكَلَ حَامِد الخُبْزَ</span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast_2">Хамид</span> (فاعل - деятель) <span className="contrast_2"> ест </span> (فعل - глагол)
                  <span className="contrast_2"> хлеб </span> (مفعول به - прямое дополнение)
                </div>
              </div>
              <h2 className="title">
                Пример пассивного залога فُعِلَ - يُفْعَلُ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">В случае с пассивным залогом деятель неизвестен (или известен из контекста), фокус на результате.</div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> ضُرِبَ </span>
                  <span> الكلبُ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast_2">Побили </span> (فعل-глагол) <span className="contrast_2"> собаку </span> (نَائِبُ الفاعِل (с
                  огласовкой дамма)) // Собака была побита
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> يَجِبُ أن </span>
                  <span className="contrast"> يُكْتَبُ </span>
                  <span> العُنْوانُ بِخَطٍّ واضِحٍ</span>
                </div>
                <div className="arsent__translate">Писать адрес нужно разборчивым почерком</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="َفُتِح" suffix="تْ" /> &nbsp;
                  <Word root="النّافِذَ" suffix="ةُ" />
                </div>
                <div className="arsent__translate">Окна открыли</div>
              </div>
              <div className="desc">
                В примере выше подразумеваемое прямое дополнения مفعول به ("окна" мн.ч неразумное) повлиял на глагол (глагол стал женского
                рода) т.к с точки зрения грамматики множественное число неразумное расцениваеся как единственное число женского рода
              </div>
              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__translate">
                    В прошедшем времени чтоб образовать пассивный залог, необходимо над первой буквой поставить дамму, над предпоследей
                    кясру
                    <br />
                    <br />
                    <span className="contrast_2 desc__ar"> ضُرِبَ </span>
                  </div>
                </div>
              </AnimateCard>
              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__translate">
                    В настоящем времени поставить дамму над первой и фатху над предпоследней
                    <br />
                    <br />
                    <span className="contrast_2 desc__ar"> يُكْتَبَ </span>
                  </div>
                </div>
              </AnimateCard>

              <h2 className="title">
                Пассивный залог со средней больной{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <Word negative prefix="قَ" root="ا" suffix="لَ" /> - <Word negative prefix="قِ" root="يِ" suffix="لَ" />
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="يَقُولُ" /> - <Word negative prefix="يُقَ" root="ا" suffix="لُ" />
                </div>
              </div>

              <h2 className="title">
                Пассивный залог с последней больной{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="نَج" suffix="ا" /> - <Word root="نُجِ" suffix="يَ" />
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="يَنْجُو" /> - <Word root="يُنْجَ" suffix="ى" />
                </div>
              </div>

              <div className="desc">Для практики можите перевести данные глаголы в пассивный залог прошедшего и настоящего времени </div>
              <div className="arsent">
                <div className="arsent__original">جَرَى / سار / نَالَ / بَنى / دَعا / سعى / نَسِيَ / صام / ساق / زار / خاف</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(FialMabniLilmajhun)
