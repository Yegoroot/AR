import React from 'react'

function LyaNafia() {
  return (
    <>
      <h2 className="title h2ar">لا النافية</h2>

      <div className="desc">Частица абсолютного отрицания</div>

      <div className="arsent">
        <div className="arsent__original">
          عمر <span className="contrast"> لا </span> يشربُ القهوة
        </div>
        <div className="arsent__translate">Умар ни когда не пьёт кофе</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          أنتم <span className="contrast"> لا </span> تدرسونَ اللغة الفرنسية
        </div>
        <div className="arsent__translate">Вы не учите французкий язык</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> لا </span> تضربُنِي
        </div>
        <div className="arsent__translate">Не бил ты меня</div>
      </div>
    </>
  )
}

export default LyaNafia
