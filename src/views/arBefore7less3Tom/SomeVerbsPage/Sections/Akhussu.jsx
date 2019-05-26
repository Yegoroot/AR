import React from 'react'

export default function() {
  return (
    <>
      <h2 className="title h2ar"> أَخُصُّ </h2>
      <div className="desc">
        Подразумеваемый глагол <span className="desc__ar"> المَخصُوص </span> в данном случае <div className="desc__ar"> أَخُصُّ </div>
        <b> (я имею ввиду, подразумеваю)</b> ставит существительное в насб (винительный падеж), а сам глагол мы удаляем за ненадобностью (он
        ясен из контекста)
      </div>

      <div className="arsent">
        <div className="arsent__original">غداً نَذْهب نحنُ المُتَفَوِّقِينَ</div>
        <div className="arsent__translate"> Завтра, поедим мы (я имею ввиду отличников) отличники (тот кто учится хорошо) </div>
      </div>
      <div className="arsent">
        <div className="arsent__original"> نحن المسلمين لا نخافُ إلاّ الله </div>
        <div className="arsent__translate"> Мы (я имею ввиду мусульман ) мусульмане не боимся никого, кроме Аллахъа </div>
      </div>
    </>
  )
}
