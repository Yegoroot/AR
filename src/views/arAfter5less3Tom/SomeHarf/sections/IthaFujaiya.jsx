import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title">
        إذا الفُجَائِيَّةُ{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>
      <div className="desc">
        <b> إذا неожиданности </b>. Указывает на то, что произошло нечто то, чего не ожидали. Приходит перед именным предложением и
        разрешается поставить следующее за ним слово в неопределенное состояние. НИКОГДА НЕ ПРИХОДИТ В НАЧАЛЕ РЕЧИ
      </div>
      <div className="arsent">
        <div className="arsent__original">
          <span> دَخلتُ الفصل </span>
          <span className="contrast"> فإذا </span>
          <span> مدير الجامعة جالسٌ </span>
        </div>
        <div className="arsent__translate">Зашел в класс, а там директор университета сидит</div>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          <span> دَخلتُ الغرفة </span>
          <span className="contrast"> فإذا </span>
          <span> حَيّةٌ على السرير </span>
        </div>
        <div className="arsent__translate">Зашел в комнату, а там на кровати змея</div>
      </div>
    </>
  )
}
