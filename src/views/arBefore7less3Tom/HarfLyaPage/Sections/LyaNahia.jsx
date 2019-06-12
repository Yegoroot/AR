import React from 'react'

function LyaNahia() {
  return (
    <div id="liWithVerbs">
      <h2 className="title h2ar">
        لا الناهية{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>

      <div className="desc">
        Частица запрета, употребляется <span className="contrast">только во втором лице</span>.
      </div>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> لا </span> تضربْنِي
        </div>
        <div className="arsent__translate">Не бей меня</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          يا عمر <span className="contrast"> لا </span> يشربْ القهوة
        </div>
        <div className="arsent__translate">Умар, ни пей кофе!</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          أنتم <span className="contrast"> لا </span> تدرسوُا اللغة الفرنسية
        </div>
        <div className="arsent__translate">Не учите французкий язык</div>
      </div>

      <p className="desc">Как вы заметели ن множественного числа пропала, потому что это одна из частиц أدْوَات الجَزْم</p>
    </div>
  )
}

export default LyaNahia
