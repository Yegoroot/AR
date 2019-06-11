import React from 'react'
// import Word from 'components/word'

export default function() {
  return (
    <>
      <h2 className="title h2ar"> مصدر الميمي ✍️ </h2>

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
        <div>
          <span className="arsent__original contrast"> مَمات </span>
          <span className="arsent__translate"> Смерть </span>
        </div>

        <div>
          <span className="arsent__original contrast"> مَعْرِفَة </span>
          <span className="arsent__translate"> Познание </span>
        </div>

        <div>
          <span className="arsent__original contrast"> مَقْدِرَة </span>
          <span className="arsent__translate"> Возможности </span>
        </div>

        <div>
          <span className="arsent__original contrast"> مَوْعِد </span>
          <span className="arsent__translate"> Обещание </span>
        </div>
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
