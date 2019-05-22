import React from 'react'
import Word from 'components/word'

export default function() {
  return (
    <div id="samaha">
      <h2 className="title h2ar"> أَرى </h2>
      <div className="desc">
        Глагол <span className="desc__ar contrast"> أَرى </span> (показал) это глагол из четвертой породы образованный от глагола
        <span className="desc__ar contrast_2"> رَأَى </span> (смотрел). Глагол этот должен быть как
        <span className="desc__ar"> أَرْأَى </span>, но вторая коренная удалена. В настоящем времени
        <span className="desc__ar contrast"> يُرِى </span> (покажет). В приказе
        <span className="desc__ar contrast"> أَرِ </span>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <Word root="أَرِ" suffix="نِي" negative />
          <span> هذا الكتاب يا علي </span>
        </div>
        <div className="arsent__translate">Али, покажи мне эту книгу</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <Word root="أَرُوْ" suffix="نِي" negative />
          <span> هذا الكتابَ يا إخوان </span>
        </div>
        <div className="arsent__translate">Братья, покажите мне эту книгу</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <Word root="أَرِيْ" suffix="نِي" negative />
          <span> هذا الكِتابَ يا مريم </span>
        </div>
        <div className="arsent__translate">Марьям, покажи мне эту книгу </div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <Word root="أَرِيْنَ" suffix="نِي" negative />
          <span> هذا الكتابَ يا أخوات </span>
        </div>
        <div className="arsent__translate">О сёстры, покажите мне эту книгу </div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span> غَداً سآخذكم إلى المكتبة العامة و </span>
          <Word root="أُرِي" suffix="كم" negative />
          <span> المعاجمَ كلَّها </span>
        </div>
        <div className="arsent__translate"> Завтра я возьму вас в общественную библиотеку и покажу вам все словари</div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <Word root="أرا" suffix="نا" negative />
          <span> المدرسُ كتابَ نحوٍ جديداً</span>
        </div>
        <div className="arsent__translate"> Показал нам учитель новую книгу по грамматике </div>
      </div>
    </div>
  )
}
