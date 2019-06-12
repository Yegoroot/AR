import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title">
        {' '}
        بَلْ{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>
      <div className="desc">
        Если приходит в начале предложения, то это <b> частица начинания </b> и эта частица <b> указывает на протест </b>. Этот протест
        выглядит как протест полного опровержения. Иногда этот <i>протест переходной</i> (для перехода на другую тему)
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> بَلْ </span>
          <span> تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا </span>
        </div>
        <div className="arsent__translate">Но нет! Вы отдаете предпочтение мирской жизни [ Сура Всевышний Аят 16]</div>
      </div>
    </>
  )
}
