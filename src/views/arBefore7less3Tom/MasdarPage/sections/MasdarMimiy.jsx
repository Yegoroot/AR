import React from 'react'
// import Word from 'components/word'

export default function() {
  return (
    <>
      <h2 className="title h2ar"> مصدر الميمي </h2>

      <div className="desc">
        Масдар у которого первая <span className="desc__ar"> م </span> служебная. В зависимости от контекста эта модель так же может
        указывать на место действия
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span className="contrast"> مَضْرَب </span>
        </div>
        <div className="arsent__translate">Битьё (в зависимости от контекста мы можем сказать что это место битья)</div>
      </div>

      <h4 className="title"> От трёхбуквенного первообразного </h4>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span className="contrast"> مَمات </span>
        </div>
        <div className="arsent__translate">Смерть</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span className="contrast"> مَعْرِفَة </span>
        </div>
        <div className="arsent__translate">Познание</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span className="contrast"> مَقْدِرَة </span>
        </div>
        <div className="arsent__translate">Возможности</div>
      </div>

      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span className="contrast"> مَوْعِد </span>
        </div>
        <div className="arsent__translate">Обещание</div>
      </div>

      <h4 className="title"> Не от трёхбуквенного первообразного по модели اسم المفعول </h4>
      <div className="arsent">
        <div className="arsent__original" dir="rtl">
          <span> فَجَعَلْناهُمْ أَحَادِيثَ وَ مَزَّقْناهُمْ كُلَّ </span>
          <span className="contrast"> مُمَزَّقٍ </span>...
        </div>
        <div className="arsent__translate">34 Сура 19 Аят</div>
      </div>
    </>
  )
}
