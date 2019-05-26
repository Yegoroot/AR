import React from 'react'
import Word from 'components/word'

export default function() {
  return (
    <>
      <h2 className="h2ar title">إِيَّكَ</h2>
      <div className="desc">
        Это слово указывает на <b>предостережение</b>, предостерегаем собеседника от какого то момента. В предложении скрыт глагол
        <span className="desc__ar"> اِتَّقِ </span>, его не следует произносить потому что он явно следует из контекста. <br /> <br />
        Связывать Иййака и то от чего предостерегаем при помощи
        <span className="desc__ar"> و </span> обязательно, за исключением если приходит подразумеваемый масдар
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> إِيَّكَ </span>
          <span>
            <Word prefix="و" root="الكَذِ" />
            <span>ب</span>
            <span className="contrast">َ </span>
          </span>
          <span> - إيَّاك أن تَكْذِبَ </span>
        </div>
        <div className="arsent__translate">Бойся обманов - Не надо врать (подразумеваемый масдар)</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> إِيَّكَ </span>
          <span>
            <Word prefix="و" root="الكِلا" />
            <span>ب</span>
            <span className="contrast">َ </span>
          </span>
          <span> يا بُنَيَّ </span>
        </div>
        <div className="arsent__translate">Остерегайся собак, сыночек</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> إِياكم </span>
          <span>
            <Word prefix="و" root="الكِلا" />
            <span>ب</span>
            <span className="contrast">َ </span>
          </span>
          <span> يا أبْنَائِي </span>
        </div>
        <div className="arsent__translate">Сыновья остерегайтесь собак</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span> يا عليّ </span>
          <span className="contrast"> إيّك </span>
          <Word prefix="و" root="هذا" />
          <span>
            <span> الولد</span>
            <span className="contrast">َ </span>
          </span>
          <span> فَإِنّهُ كذَّابٌ </span>
        </div>
        <div className="arsent__translate">Али, остерегайся этого парня, он лжец</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> إيَّكم </span>
          <span>
            <Word prefix="و" root="الجُلُوس" />
            <span className="contrast">َ </span>
          </span>
          <span> بالطُّرُقَات</span>
        </div>
        <div className="arsent__translate">Остерегайтес сидеть на дорогах (хадис)</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          و<span className="contrast"> إياكم </span>
          <span>
            <Word prefix="و" root="مُحْدَثَات" />
            <span className="contrast">ِ</span>
          </span>
          <span> الأُمور فإِنَّها ضَلالَةٌ</span>
        </div>
        <div className="arsent__translate">Остерегайтесь нововведений в религии, поистине они являются заблуждениями (хадис)</div>
      </div>
    </>
  )
}
