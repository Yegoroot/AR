import React from 'react'

function LyaNafia() {
  return (
    <div id="liWithVerbs">
      <h2 className="title">لا в прошедшем времени</h2>

      <div className="desc">
        Частица لا настоящего времени, кроме случая, если в одном предложениии <b> два глагола которые мы хотим отрицать </b> . Действия
        прошедшего времени. Например:
      </div>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> لا </span> أكلتُ <span className="contrast"> و </span> <span className="contrast"> لا </span> شربتُ
        </div>
        <div className="arsent__translate">Не пил и не кушал</div>
      </div>

      <div className="desc">Необходимое условие: два глагола, две لا и между ними و</div>
      <div className="arsent">
        <div className="arsent__original">
          <span pan className="contrast">
            لا
          </span>
          ضَرَبَنِي <span className="contrast"> و </span> <span className="contrast"> لا </span>
          ضَرَبْتُهُ
        </div>
        <div className="arsent__translate">Он не бил меня и я его не бил</div>
      </div>
    </div>
  )
}

export default LyaNafia
