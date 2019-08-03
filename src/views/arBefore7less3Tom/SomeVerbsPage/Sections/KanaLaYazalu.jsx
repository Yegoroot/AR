import React from 'react'

import Word from 'components/word'
import kanaImg from 'assets/img/content/verb/kana.png'

function KanaLaYazalu() {
  return (
    <div id="samaha">
      <h2 className="title h2ar">
        كان - يزَالُ{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>
      <div className="desc">Глаголы бытия ставят в винительный падеж дополнения (то о чем речь)</div>

      <div className="items">
        <div className="item">
          <h3 className=" title h2ar">كَان - كانَتْ</h3>

          <div className="arsent">
            <div className="arsent__original">حامد مرِيض الأنَ</div>
            <div className="arsent__translate">Хамид сейчас болен</div>
          </div>

          <div className="arsent">
            <div className="arsent__original">
              <span className="contrast"> كانَ </span> حامد <Word root="مريض" suffix="اً" /> أمسِ
            </div>
            <div className="arsent__translate">
              Хамид <span className="contrast"> был</span> болен вчера
            </div>
          </div>
        </div>
        <div className="item">
          <h3 className=" title h2ar">لا يَزَالُ - لا تَزالُ</h3>
          <div className="arsent">
            <div className="arsent__original">إبرهيم نائِم</div>
            <div className="arsent__translate">Ибрахим спит</div>
          </div>
          <div className="arsent">
            <div className="arsent__original">
              <span className="contrast"> لا يَزَالُ </span> إبرهيم نائِماً
            </div>
            <div className="arsent__translate">
              <span className="contrast"> Не прекращает </span> Ибрахим спать
            </div>
          </div>
        </div>
      </div>
      <h3>كان не полноценный глагол</h3>
      <div className="desc">
        Глагол كان не является полноценным глаголом (предложение остаётся именным), но из за его внешних сходств, предложение похоже на
        глагольное, а происходит следующее
      </div>
      <img src={kanaImg} style={{ width: '100%' }} alt="Схема 1" />
    </div>
  )
}

export default KanaLaYazalu
