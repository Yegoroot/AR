import React from 'react'
// import Word from 'components/word'

export default function() {
  return (
    <>
      <h2 className="h2ar title"> مصدر المرَّةِ </h2>

      <div className="desc">
        <b> Масдар еденичности </b> (مَصدر المَرَّةِ) это тот масдар, который упоминается для указания (разъяснения)
        <b> количесвтва совершённого действия </b>
      </div>

      <h4 className="title">От трёхбеквенного первообразного по модели (فَعْلَة)</h4>
      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> ضَرَبْتُهُ </span>
          <span className="contrast"> ضَرْبَةً </span>
        </div>
        <div className="arsent__translate">Я ударил его один раз</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> ضَرَبْتُهُ </span>
          <span className="contrast"> ضَرْبَتَيْنِ </span>
        </div>
        <div className="arsent__translate">Я ударил его два раза</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> ضَرَبْتُهُ </span>
          <span className="contrast"> ضَرَبَاتٍ </span>
        </div>
        <div className="arsent__translate">Я ударил его много раз</div>
      </div>

      <h4 className="title">
        К не трёхбуквенным и не первообразным присоединяется
        <span className="desc__ar"> ة </span> (та марбута)
      </h4>
      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> كبّر </span>
          <span className="contrast"> تَكْبِيرةً </span>
        </div>
        <div className="arsent__translate">Возвеличивать такбиром один раз</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> نُكَبِّر أربعَ </span>
          <span className="contrast"> تكبيرات </span>
          <span> في الصلاة على المَيِّت </span>
        </div>
        <div className="arsent__translate">В заупокойной молитве мы произносим такбир четыре раза</div>
      </div>

      <h4 className="title">
        Если основной масдар образуется
        <span className="desc__ar"> ة </span> в конце, то для указания количества указываем числительное
      </h4>
      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> رَحَلْتُ </span>
          <span className="contrast_2"> رِحْلَةً </span>
          <span className="contrast"> واحدةً </span>
        </div>
        <div className="arsent__translate">Отправился я в первую поездку</div>
      </div>
      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> أَقَمْتُ </span>
          <span className="contrast_2"> إقْامةً </span>
          <span className="contrast"> واحدةً </span>
        </div>
        <div className="arsent__translate">Я произнёс один икамат, или я прописывался один раз (по этому месту жительства)</div>
      </div>
      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> تَرجَمتُ الكِتاب </span>
          <span className="contrast_2"> تَرْجَمَةً </span>
          <span className="contrast"> واحِدةً </span>
        </div>
        <div className="arsent__translate">Я сделал один перевод этой книги</div>
      </div>
    </>
  )
}
