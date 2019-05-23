import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title">قَدْ</h2>
      <div className="desc">
        Если приходит перед глаголом настоящего времени то означает:
        <b> изредко, иногда (неуверенность, уменьшение)</b>. Если перед глаголом прошедшего времени, то совершённость (усиление, то что оно
        уже совершилось) <b> Уже </b>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> قَد </span> يَعُودُ المُديرُ غداً
        </div>
        <div className="arsent__translate">Может быть директор вернётся завтра (сомнение)</div>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> قَد </span> فُتِحَ بابُ المكتبة
        </div>
        <div className="arsent__translate">Дверь библиотеки Уже открыта (усиление)</div>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> قَد </span> يَنْجَحُ الطالبُ الكسلانُ
        </div>
        <div className="arsent__translate">Изредко ленивый студент достигает успеха (уменьшение)</div>
      </div>
    </>
  )
}
