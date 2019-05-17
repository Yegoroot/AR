import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Word from 'components/word'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import AnimateCard from 'components/AnimateCard/AnimateCard'

class ConcOfCond extends React.Component {
  render() {
    return (
      <div id="liWithVerbs">
        <h2 className="title">Следствие требованию</h2>
        <div className="arsent">
          <div className="arsent__original">
            <span> اِقْرأْهُ مَرَّةً أُخرى </span>
            <Word root="مْ" prefix="تَفْهَ" negative suffix="هُ" />
          </div>
          <div className="arsent__translate">Прочитай ещё раз тогда ты поймешь его</div>
        </div>
        <div className="arsent">
          <div className="arsent__original">
            <span> اِجْلِسْ </span>
            <Word root="عِْ" prefix="نَسم" negative />
            <span> الأخبارَ </span>
          </div>
          <div className="arsent__translate">Садись Послушаем новости</div>
        </div>
        <div className="arsent">
          <div className="arsent__original">
            <span> زُرْني </span>
            <Word root="رْ" prefix="أزُ" suffix="كَ" negative />
            <span> الأخبارَ </span>
          </div>
          <div className="arsent__translate">Навещай меня и я тебя буду навещать</div>
        </div>
        <div className="arsent">
          <div className="arsent__original">
            <span> تَعَالَ </span>
            <Word root="بْ" prefix="نذْه" negative />
            <span> إلى السوق </span>
          </div>
          <div className="arsent__translate">Иди сюда! Пойдем на рынок</div>
        </div>
        <div className="arsent">
          <div className="arsent__original">
            <span> اِحْفَظِْ الله </span>
            <Word root="ظْ" prefix="يَحْفَ" suffix="كَ" negative />
            <span>. اِحْفَظِْ الله </span>
            <Word root="دْ" prefix="تَجِ" suffix="هُ" negative />
            <span> تُجاهَك </span>
            <span className="contrast_2"> رواه الترمذي </span>
          </div>
          <div className="arsent__translate">
            Храни Аллахъа (исполняя его приказы) и Он сохранит тебя. Храни Аллахъа и ты найдешь его перед собой
          </div>
        </div>
        <AnimateCard>
          <div className="arsent arsent_rule">
            <div className="arsent__original">
              هنا <span className="contrast_2"> (تفهَمْ) </span> مجزومٌ لأنه وَقَعَ جواباً للطَلَبِ
            </div>
            <div className="arsent__translate">
              Здесь глагол <span className="contrast_2 desc__ar"> (تفهَمْ) </span> в усеченном наклонении потому что он пришёл как следствие
              требованию
            </div>
          </div>
        </AnimateCard>
        <AnimateCard>
          <div className="arsent arsent_rule">
            <div className="arsent__original">
              إذا وَقَعَ المضارعُ جواباً للطَّلبِ جَزمَ. و من أنواع الطَّلَبِ: الأمْرُ و النَّهْيُ, نحو: اِعْملْ عَمَلاً صالِحاً{' '}
              <span className="contrast_2"> تَدْخُلِْ </span>
              الجَنَّةَ. لا تَكْسَلْ <span className="contrast_2"> تَنْجَحْ </span> .
            </div>
            <div className="arsent__translate">
              Когда глагол настоящего времени приходит как следствие (какого либо условия), то он джахмируется (усекается). А разновидностью
              требования считается: Приказ и Запрет. Например: Совершай праведные дела
              <span className="contrast_2 "> войдешь </span> в рай. Не ленись
              <span className="contrast_2 "> добъешься успеха </span>
            </div>
          </div>
        </AnimateCard>
      </div>
    )
  }
}

export default withStyles(arabicPage)(ConcOfCond)
