import React from 'react'
import Word from 'components/word'

function Asbaha() {
  return (
    <div id="samaha">
      <h2 className="title h2ar">
        {' '}
        أصْبَحَ من أخَوَاتِ كان{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>
      <div className="desc">
        Глагол <span className="desc__ar"> أصْبَحَ </span> (утром) относится к сестрам <span className="desc__ar"> كان </span> иногда этот
        глагол приходит со значением <span className="desc__ar"> صَارَ </span> (стал)
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> أصْبَحَ </span>
          <span> حامدٌ مريضاً </span>
        </div>
        <div className="arsent__translate">Хамида настигло утро и он в это время уже был болен</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span> وَ </span>
          <span className="contrast"> أصْبَحَ </span>
          <span> فُؤَادُ أُمَّ مُوسى فارِغاً </span>
        </div>
        <div className="arsent__translate">И сердце матери Мусы утром стало пустым</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span> فَأَلَّفَ بينَ قُلوبِكم </span>
          <Word prefix="فَ" negative root="أَصْبَحْ" suffix="تُمْ" />
          <span> بِنِعْمتِهِ إِخْواناً </span>
        </div>
        <div className="arsent__translate">Он сплотил ваши сердца и вы стали по его милости братьями</div>
      </div>
    </div>
  )
}

export default Asbaha
