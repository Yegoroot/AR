import React from 'react'

export default function() {
  return (
    <>
      <h2 className="h2ar title"> كَأنَّ </h2>
      <div className="desc">
        Частица <span className="desc__ar"> كَأنَّ </span> указывает на уподобление (<span className="desc__ar"> التَّشْبيه </span>)
        <b> "Как будто" </b>. Иногда указывает на предположение
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> كَأنَّ </span>
          <span> العِلْمَ نُورٌ </span>
        </div>
        <div className="arsent__translate"> Как будто знания свет </div>
      </div>

      <div className="arsent">
        <div className="arsent__original">
          <span className="contrast"> كَأنَّنِي </span>
          <span> أعْرِفُكَ </span>
        </div>
        <div className="arsent__translate"> Как будто я знаю тебя </div>
      </div>
    </>
  )
}
