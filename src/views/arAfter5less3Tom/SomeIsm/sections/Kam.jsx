import React from 'react'
import Word from 'components/word'

function Kam() {
  return (
    <>
      <h2 className="h2ar title">
        كَمْ{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>
      <div className="desc">
        Приходит как вопрос и как восклицание. <br />
        <br />
        <b>Когда приходит как вопрос</b>, то ставит имя в винительный падеж. Если приходит как вопрос но с предлогом родительного падежа то
        может ставить имя и в родительный падеж и в винительный. При этом имя должно быть в единственном числе (мы ведь не знаем количество
        исчесляемого)
        <br />
        <br />
        <b>Когда приходит как восклицание</b> то ставит имя в родительный падеж.
      </div>

      <h3 className="title">Восклицание</h3>

      <div className="arsent">
        <div className="arsent__original">
          <span> كَم </span>
          <Word root="رِيا" suffix="لٍ" />
          <span> أعطيتَني! </span>
        </div>
        <div className="arsent__translate">Сколько же риялов ты мне дал! (как много)</div>
      </div>

      <h3 className="title">Вопрос</h3>

      <div className="arsent">
        <div className="arsent__original">
          <span> كَم </span>
          <Word root="رِيال" suffix="اً" />
          <span> أعطيتَني؟</span>
        </div>
        <div className="arsent__translate">Сколько риялов ты мне дал?</div>
      </div>

      <h3 className="title">Вопрос с предлогом родительного падежа</h3>

      <div className="arsent">
        <div className="arsent__original">
          <Word prefix="بِ" root="كَم" />
         &nbsp;
          <Word root="رِيا" suffix="لٍ" />
          <span> هذا القلم؟ </span>
        </div>
        <div className="arsent__translate">Сколько риялов стоит эта ручка? (в род. пад.)</div>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          <Word prefix="بِ" root="كَم" />
         &nbsp;
          <Word root="رِيال" suffix="اً" />
          <span> هذا القلم؟ </span>
        </div>
        <div className="arsent__translate">Сколько риялов стоит эта ручка? (в вин. пад.)</div>
      </div>
    </>
  )
}

export default Kam
