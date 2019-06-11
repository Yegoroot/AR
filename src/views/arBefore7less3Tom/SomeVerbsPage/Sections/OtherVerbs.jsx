import React from 'react'

import Word from 'components/word'

function OtherVerbs() {
  return (
    <div id="OtherVerbs">
      <h2 className="title h2ar">كَادَ - يَكَادُ ✍️ </h2>

      <div className="arsent">
        <div className="arsent__original">
          <Word prefix="كِدْ" root="نَا" /> نَموت من الضحِك أمسِ
        </div>
        <div className="arsent__translate">
          Мы вчера <span className="contrast"> чуть </span> не умерли от смеха
        </div>
      </div>

      <h2 className="title h2ar">رَجَا - يَرْجُو ✍️ </h2>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> أرجو </span>
          أن تَرْجَعُ الي البيت مبكراً
        </div>
        <div className="arsent__translate">
          <span className="contrast"> Надеюсь </span> ты вернешся домой рано
        </div>
      </div>

      <h2 className="title h2ar "> ليس ✍️ </h2>
      <div className="desc">
        Глагол прошедшего времени, который используется для отрицания в настоящем времени, спрягается только в прошедшем времени
      </div>
      <div className="arsent">
        <div className="arsent__original">
          لَستُ - لسْنا
          <br />
          لَسْتَ - لَسْتِ - لَسْتُمْ - لَسْتُنَّ
          <br />
          لَيْسَ - لَيْسَتْ‎ - لَيْسُوا‎ - لَسْنَ‎
        </div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          لا, أنا <span className="contrast"> لَستُ </span> من واشنطنَ‎
        </div>
      </div>
    </div>
  )
}

export default OtherVerbs
