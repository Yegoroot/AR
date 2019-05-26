import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title"> لَعَلَّ </h2>
      <div className="desc">
        Частица <span className="desc__ar"> لَعَلَّ </span> указывает на надежду (<span className="desc__ar"> التَرَجِّيَ </span>) или
        боязнь (<span className="desc__ar"> الإِشْفَاق </span>)<b> "Надеюсь", "Боюсь" </b>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> لعلَّ </span>
          <span> اللهَ يغفرُ لي </span>
        </div>
        <div className="arsent__translate"> Надеюсь Аллахъ простит меня </div>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> لعلَّ </span>
          <span> الجَرِيحَ يَمُوت </span>
        </div>
        <div className="arsent__translate"> Боюсь раненый может умереть </div>
      </div>
    </>
  )
}
