import React from 'react'

function MaAndFriends() {
  return (
    <>
      <h2 className="title">ما с друзьями</h2>

      <div className="desc">
        Скажи кто твой друг и тебе скажут кто ты, частица ما не является исключением, и в зависимоти от того с кем она дружит, ведет себя по
        разному
      </div>

      <div className="items">
        <div className="item">
          <h3 className="title">
            مِنْ + ما = <span className="contrast">مِمَّ</span>؟
          </h3>
          <div className="arsent">
            <div className="arsent__original">
              <span className="contrast">مِمَّ </span> خَلَقَ اللّه الانسان؟
            </div>
            <div className="arsent__translate">
              <span className="contrast">Из чего </span> создал Аллахъ человека?
            </div>
          </div>
        </div>
        <div className="item">
          <h3 className="title">
            بِ + ما = <span className="contrast">بِمَ</span>؟
          </h3>
          <div className="arsent">
            <div className="arsent__original">
              <span className="contrast">بِمَ </span> قتلتُ الحَيَّة؟
            </div>
            <div className="arsent__translate">
              <span className="contrast">(С помощью чего) Чем </span> ты убил змею?
            </div>
          </div>
        </div>
        <div className="item">
          <h3 className="title">
            لِ + ما = <span className="contrast"> لِمَ </span>؟
          </h3>
          <div className="arsent">
            <div className="arsent__original">
              <span className="contrast">لِمَ </span> خَرجُْتَ مِن الفصلِ؟
            </div>
            <div className="arsent__translate">
              <span className="contrast">(Почему?, Для чего?, За чем?) Для какой цели </span> ты вышел из класса?
            </div>
          </div>
        </div>
        <div className="item">
          <h3 className="title">
            عَنْ + ما = <span className="contrast"> عَمَّ </span>؟
          </h3>
          <div className="arsent">
            <div className="arsent__original">
              <span className="contrast"> عَمَّ </span> بَحثْتَ في المدرسةِ؟
            </div>
            <div className="arsent__translate">
              <span className="contrast"> Что </span> ты искал в школе? ( ... بَحثَ عن )
            </div>
          </div>
          <div className="arsent">
            <div className="arsent__original">
              <span className="contrast"> عَمَّ </span> سألْتَ المدرسَ؟
            </div>
            <div className="arsent__translate">
              <span className="contrast"> О чем </span> спросил учитель?
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MaAndFriends
