import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title"> مِنْ </h2>
      <div className="desc">
        Одна из вариаций частицы <span className="desc__ar"> مِنْ </span> это &nbsp;
        <span className="desc__ar" dir="rtl">
          مِن التَّبْعِيضِيَّةُ
        </span>
        &nbsp; которая приходит со значением <b> из, часть, некоторые </b> (часть) .
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span className="contrast"> مِنّا </span>
          <span> مَنْ يُرِيد</span>...
        </div>
        <div className="arsent__translate"> Из нас есть те (не которые из нас), кто хочет... </div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> كَلْ </span>
          <span className="contrast"> مِنْ </span>
          <span> هذا </span>
        </div>
        <div className="arsent__translate"> Скушай часть (этой еды)</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> وَ </span>
          <span className="contrast"> مِنْ </span>
          <span> النّاسِ مَنْ يَقُولُ آمنّا بِالله وَ باليَوْمِ الآخِرِ و ما هم بِمُؤمِنِينَ </span>
        </div>
        <div className="arsent__translate">
          Среди людей есть такие кто говорит "Мы уверовали во Всевышнего и в Судный день", но они не являются уверовавшими [Сура Корова / 8
          Аят]
        </div>
      </div>
    </>
  )
}
