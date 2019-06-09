import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title">إِنَّما</h2>
      <div className="desc">
        Предлог винительного падежа <span className="desc__ar"> إِنَّ </span> к нему прибавлена &nbsp;
        <span className="desc__ar" dir="rtl">
          ما الزَائِدة
        </span>
        &nbsp; и эта <span className="desc__ar"> ما </span> останавливает действие предлога <span className="desc__ar"> إِنَّ </span>.
        Смысл:
        <b> только, (и не чего другого)</b>. Разграничивает смысл заявления и отвергает всё что не входит в рамки этого заявления
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> إِنَّما </span>
          <span> الصَّدَقاتُ لِلْفُقّرَاءِ </span>
        </div>
        <div className="arsent__translate"> Милостыня предназначаеться тОолько бедным (никому другому) [Сура Покаяние / 60 Аят]</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> إِنَّما </span>
          <span> الأعْمالُ بِالنِيَّاتِ </span>
        </div>
        <div className="arsent__translate"> Деяния (оцениваются) тОолько по намерению </div>
      </div>
    </>
  )
}
