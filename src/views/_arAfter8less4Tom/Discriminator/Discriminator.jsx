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

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Для различения предмета рассмотрения из общего смысла используется Различитель (التمييز) </title>
          <meta
            name="description"
            content="Различитель содержит смысл مِن (из) для того, чтоб разъяснить, объяснить то, что пришло из общего смысла, различитель конкретизатор. 
                Имеется разделитель предмета, и разделитель отношений"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Различитель"
          // isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque26.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Различитель (التمييز)
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>
              <div className="desc">
                <b>Различитель</b> (<b className="desc__ar"> التمييز </b>) содержит смысл
                <span className="desc__ar"> مِن </span> (из) для того, чтоб <b> разъяснить </b> , <b> объяснить </b> то, что пришло из
                общего смысла, различитель конкретизатор. <br /> <br />
                Имеем <b> разделитель предмета </b>, и <b> разделитель отношений </b>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> عِنْدي مِتْرٌ </span>
                  <span className="contrast"> حَرِيراً </span>
                </div>
                <div className="arsent__translate">
                  У меня есть метр шёлка
                  <br />
                  <span> عندي مترٌ </span>
                  <span className="contrast"> مِنْ حريرٍ </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> حَسُنَ حامِدٌ </span>
                  <span className="contrast"> خُلُقاً </span>
                </div>
                <div className="arsent__translate">
                  Хамид стал хорош, в отношении своего нрава (улучшил нрав)
                  <br />
                  <span> حَسُنَ حامد </span>
                  <span className="contrast"> مِنْ جِهَةِ خُلُقِهِ </span>
                </div>
              </div>
              <h2 className="title h2ar">
                {' '}
                تَمْيِيز الذَّاتِ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                <b> Различитель предмета </b> используется для
                <b> указания измеренного вещества </b>. Приходит после названий меры, веса, длины и числительных. Его иногда называют
                название у него <i> различитель одного слова</i>
              </div>

              <h3 className="title ">Как с ним обращатся. حُكْمُهُ (хукм)</h3>
              <div className="desc">
                Основа для нас ставить его <b> в винительный падеж</b>.
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> عِنْدي مِتْرٌ </span>
                  <span className="contrast"> حَرِيراً </span>
                </div>
                <div className="arsent__translate">У меня есть метр шёлка</div>
              </div>

              <div className="desc">
                <b>Разрешаеться ставить в родительный падеж</b>, но тогда нужно добавить предлог родительного падежа, например
                <span className="desc__ar"> مِن </span>.
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> عندي مترٌ </span>
                  <span className="contrast"> مِنْ حريرٍ </span>
                </div>
                <div className="arsent__translate">У меня есть метр шёлка</div>
              </div>

              <div className="desc">
                Родительный падеж так же возможен из за <b> изофетной связки </b>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> عِندي </span>
                  <span className="contrast"> مِتْرُ حَرِيرٍ </span>
                </div>
                <div className="arsent__translate">У меня есть метр шёлка</div>
              </div>

              <div className="desc">
                Иногда бывает что, то что указывает на какую то меру присоединяется не к <b className="desc__ar"> تَمْيِيز </b>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> ما في السَّماءِ </span>
                  <span className="contrast"> قَدْرُ راحةٍ </span>
                  <span> سحاباً </span>
                </div>
                <div className="arsent__translate">На небе нет облочка хотя бы с лодошку</div>
              </div>

              <h2 className="title h2ar">
                تَمْيِيز النِّسْبَة{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                <b> Различитель отношения </b> <b> разъясняет предложение </b> у которого не ясно отношение к чему либо (в каком отношении
                применён глагол или имя). <br /> Его иногда называют
                <i> различитель предложений </i> (<span className="desc__ar">تَمْيِيز الجملة</span>)
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> حَسُنَ هذا الطالبُ </span>
                  <span className="contrast"> خُلُقاً </span>
                </div>
                <div className="arsent__translate">Улучшился этот студент (чем?) нравом</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> حَسُنَ خُلُقُ الطالبِ </span>
                </div>
                <div className="arsent__translate">Улучшился нрав студента [сказали другими словами]</div>
              </div>

              <div className="desc">Основой может быть и прямое дополнение</div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> وفَجَّرْنا الأرضَ </span>
                  <span className="contrast"> عُيوناً </span>
                </div>
                <div className="arsent__translate">Мы взорвали землю родниками (выбили родники из под земли) [из Аята]</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> فجَّرْنا عُيُون الأرضِ </span>
                </div>
                <div className="arsent__translate">Взорвались родники земли [перефразировали]</div>
              </div>
              <h3 className="title ">Как с ним обращатся. حُكْمُهُ (хукм)</h3>
              <div className="desc">
                Обязательно ставить <b> в винительный падеж</b>.
              </div>

              <h2 className="title ">
                {' '}
                Дополнительные примеры{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  <span> أنا أكْبَر مِنْكَ </span>
                  <span className="contrast"> سِنّاً </span>
                </div>
                <div className="arsent__translate">Я больше тебя возрастом (старше)</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> اِشتَرِ كيلوغراماً </span>
                  <span className="contrast"> سُكَّراً </span>,<span> ولِتْرينِ </span>
                  <span className="contrast"> لَبَناً </span>
                </div>
                <div className="arsent__translate">Купи киллограмм сахара и два литра молока</div>
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
