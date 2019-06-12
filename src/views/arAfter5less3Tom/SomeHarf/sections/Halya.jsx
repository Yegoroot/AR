import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title">
        {' '}
        هَلّا{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>
      <div className="desc">
        Частица <b>побуждения действию</b> или частицы <b>сожаления</b>. Если приходит перед глаголом настоящего времени, то
        <i> побуждает к действию</i>, если приходит перед глаголом прошедшего времени, то <i> выражает сожаление</i>.
      </div>
      <div className="desc">
        Существуют так же другие частицы для выражения побуждения или сожаления
        <b className="desc__ar"> أَلّا, أَلا, لَوْما, لَوْلا </b>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> هَلّا </span>
          <span> تَزُورُنِي </span>
        </div>
        <div className="arsent__translate">Ну почему же ты не придешь ко мне в гости (призыв)</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> هَلّا </span>
          <span> اجْتَهَدْتَ </span>
        </div>
        <div className="arsent__translate"> Ну почему ты старался (сожаление) </div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> أَلا </span>
          <span> تَتُوبُ مِن ذَنْبِك </span>
        </div>
        <div className="arsent__translate">Почему бы тебе не покаяться в грехах</div>
      </div>
    </>
  )
}
