import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title"> إِنَّ و أنَّ</h2>
      <div className="desc">
        Частица
        <span className="desc__ar"> إِنَّ </span> обозначает усиление
        <b> "Поистине" </b>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> إنَّ </span>
          <span> الله شَديدُ العِقَابِ </span>
        </div>
        <div className="arsent__translate"> Поистине Аллахъ силён в наказании </div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span> و اعْلَمُوا </span>
          <span className="contrast"> أنَّ </span>
          <span> الله شديدُ العِقاب </span>
        </div>
        <div className="arsent__translate"> Знайте же Что Аллахъ силён в наказании </div>
      </div>
    </>
  )
}
