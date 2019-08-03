import React from 'react'

function MaAttama() {
  return (
    <>
      <h2 className="title h2ar">
        ما النَّكِرة التَّامة المبهَمةُ{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>

      <div className="desc">
        <b>
          <span className="desc__ar"> ما </span> абсолютной неопределённости и не ясности
        </b>
        . Приходит как описание к определению к предыдущему определяемому слову
      </div>

      <div className="arsent">
        <div className="arsent__original">
          سافرتُ إلى الرياضِ لسببٍ
          <span className="contrast"> ما </span>
        </div>
        <div className="arsent__translate"> Я поехал в Рияд по какой то причине </div>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          أعْطِنِي كتاباً
          <span className="contrast"> ما </span>
        </div>
        <div className="arsent__translate"> Дай мне любую книгу </div>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          رأيتُ في مكانٍ
          <span className="contrast"> ما </span>
        </div>
        <div className="arsent__translate"> Видел его в каком то месте </div>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          قرأتُ هذا الخبر في صحيفةٍ
          <span className="contrast"> ما </span>
        </div>
        <div className="arsent__translate"> Прочитал эту новость в какой то газете </div>
      </div>
    </>
  )
}

export default MaAttama
