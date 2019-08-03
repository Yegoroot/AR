import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title">
        {' '}
        لَكِنَّ{' '}
        <span role="img" aria-label="Writing Hand">
          {' '}
          ✍️{' '}
        </span>{' '}
      </h2>
      <div className="desc">
        Частица <span className="desc__ar"> لَكِنَّ </span> указывает на исправление (<span className="desc__ar"> الاسْتِدْراك </span>)
        <b> "Но", "Однако", "Тем не менее" </b>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span> حامد ذَكِيٌ </span>
          <span className="contrast"> ولَكِنَّ </span>
          <span> كَسْلان </span>
        </div>
        <div className="arsent__translate"> Хамид умный, однако ленивый </div>
      </div>
    </>
  )
}
