import React from 'react'

function MainAboutMa() {
  return (
    <>
      <div className="desc">
        Частица <span className="desc__ar"> ما </span> приходит в разных ситуациях
      </div>

      <h2 className="title">Отрицание</h2>

      <h3 className="title"> Отрицание глаголов </h3>
      <div className="arsent">
        <div className="arsent__original">
          ... <span className="contrast"> ما </span> رأيْتُ
        </div>
        <div className="arsent__translate">
          Я <span className="contrast"> не </span> видел...
        </div>
      </div>

      <div> ما может отрицать и настоящее время, но только если текущий момент </div>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> ما </span> أشْربُ القهوة الان
        </div>
        <div className="arsent__translate">
          Я <span className="contrast">сейчас не</span> пью кофе
        </div>
      </div>

      <h3 className="title">Отрицание именных предложений ما الحِجَازِية</h3>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> ما </span> المسلمُ كَذَّابًا
        </div>
        <div className="arsent__translate">
          Мусульмане <span className="contrast"> не </span> лгут
        </div>
      </div>

      <p>где المسلمُ это اسم а كَذَّابًا это خبر (в насб)</p>
      <p>Чтоб усилить отрицание можно добавить частицу ب</p>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> ما </span> المسلمُ بِكَذَّابٍ
        </div>
        <div className="arsent__translate">
          Мусульмане вообще никогда <span className="contrast"> не </span> лгут!
        </div>
      </div>

      <h2 className="title">Вопрос</h2>
      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> ما </span> هذا؟
        </div>
        <div className="arsent__translate">
          <span className="contrast"> Что </span> это?
        </div>
      </div>

      <h2 className="title">Восклицание</h2>
      <div className="arsent">
        <div className="arsent__original">
          ! ... <span className="contrast"> ما </span> أجْمَلُ
        </div>
        <div className="arsent__translate">Какое красивое ...!</div>
      </div>

      <h2 className="title">Относительная "что (и)"</h2>
      <div className="arsent">
        <div className="arsent__original">
          أكُل <span className="contrast"> ما </span> تاكل
        </div>
        <div className="arsent__translate">
          Кушаю то, <span className="contrast"> что (и) </span> ты
        </div>
      </div>
      <div className="arsent">
        <div className="arsent__original">
          ...شَهدتُ <span className="contrast"> ما </span> فعل محمد
        </div>
        <div className="arsent__translate">
          Я видел <span className="contrast"> что </span> Мухаммад делает...
        </div>
      </div>
    </>
  )
}

export default MainAboutMa
