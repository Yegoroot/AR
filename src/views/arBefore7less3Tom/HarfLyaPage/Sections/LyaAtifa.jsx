import React from 'react'

export default function() {
  return (
    <>
      <h2 className="title h2ar">لا العاطِفَةُ ✍️ </h2>

      <div className="desc">
        Союзная <span className="desc__ar"> لا </span>. Используется чтоб <b> вывести второе из того на что указывает первая часть </b> .
        Для использование этой частицы необходимо: 1) После <span className="desc__ar"> لا </span> должно прийти одно слово, не предложение
        (прям как в тут). 2) То что приходит после <span className="desc__ar"> لا </span> приходит после утвердительного предложения или
        после приказа.
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> سافَرَ بِلالٌ </span>,<span className="contrast"> لا </span>
          <span> محمد </span>
        </div>
        <div className="arsent__translate">Уехал Биляль, не Хамид</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> اِسْأَلِْ المديرَ, </span>
          <span className="contrast"> لا </span>
          <span> المدرسَ </span>
        </div>
        <div className="arsent__translate">Спроси директора, не учителя</div>
      </div>
    </>
  )
}
