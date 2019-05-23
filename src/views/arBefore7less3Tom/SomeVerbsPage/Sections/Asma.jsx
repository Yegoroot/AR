import React from 'react'
import Word from 'components/word'

export default function() {
  return (
    <>
      <h2 className="title h2ar"> أَمْسَى </h2>
      <div className="desc">
        Глагол <span className="desc__ar"> أَمْسَى </span> относится к сестрам <span className="desc__ar"> كان </span>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <Word root="أَمْسَيْ" suffix="تُ" negative />
          <span> مريضاً </span>
        </div>
        <div className="arsent__translate"> Вечером я заболел [настиг меня вечер и я уже болен]</div>
      </div>
    </>
  )
}
