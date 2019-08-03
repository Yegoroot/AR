import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title">
        {' '}
        ياء المُتَكَلِّم{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>
      <div className="desc">
        Усечение притяжательного местоимения первого лица. Так же
        <span className="desc__ar"> ياء المتكلِم </span> может исчезать у глаголов
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> رَبِّ </span>
          <span> أَرِنِي </span> -<span className="contrast_2"> أَصْلُهُ </span>-<span className="contrast"> يا رَبِّي </span>
          <span> أَرِنِي </span>
        </div>
        <div className="arsent__translate">
          <span className="desc__ar"> [ رَبِّ </span> в основе <span className="desc__ar"> يا رَبِّي] </span> убрана звательная частица и
          притяжательное местоимение
        </div>
      </div>

      <div className="desc">
        Существует 5 обличий <span className="desc__ar"> ياء المتكلِم </span>, самый распостранённый
        <b className="desc__ar"> يارَبِّ </b>, остальные варианты <br />
        <b className="desc__ar"> رَبِّي - رَبَّ - رَبَّا - رَبّيِّ </b>
      </div>
    </>
  )
}
