import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title">
        لَيْتَ{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>
      <div className="desc">
        Частица
        <span className="desc__ar"> لَيْتَ </span> обозначает несбыточное желание или почти не сбыточное
        <b> "О если бы" </b>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> لَيْتَ </span>
          <span> الشَّبابَ يَعُود </span>
        </div>
        <div className="arsent__translate"> Эх если бы молодость вернулась</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> لَيْتَني </span>
          <span> طَائِرٌ اَطِيرُ في الجّو </span>
        </div>
        <div className="arsent__translate"> Эх если бы я был птицей порящей в небе </div>
      </div>
    </>
  )
}
