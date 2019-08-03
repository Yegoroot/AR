import React from 'react'
// import Word from 'components/word'

export default function() {
  return (
    <>
      <h2 className="title h2ar">
        {' '}
        مصدر الهيئة{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>

      <div className="desc">
        <b> Масдар образа </b> (مصدر الهَيْئَةِ) это тот масдар, который указывает на
        <b> образ действия или его свойства </b>. Образуется по модели <span className="desc__ar"> فِعْلَة </span>. Образуеться только от
        трёхбуквенного первообразного глагола
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> و في الحَدِيث: "فإذا قَتَلْتَم فأَحْسِنوا </span>
          <span className="contrast"> القِتْلَةَ </span>"
        </div>
        <div className="arsent__translate">Если вам приходится забивать животное, то забивате его хорошо</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> مَشَيْنا </span>
          <span className="contrast"> مِشْيَةَ </span>
          <span> اللَّيْثِ غَدا, و اللَّيْثُ غَضْبَانُ </span>
        </div>
        <div className="arsent__translate"> Мы шли походкой льва с утреца (утром), и этот лев явно был разневан</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span className="contrast"> جِلْسَةً </span>
          <span> مِن جَلَسَ </span>
        </div>
        {/* <div className="arsent__translate">Я ударил его один раз</div> */}
      </div>
    </>
  )
}
