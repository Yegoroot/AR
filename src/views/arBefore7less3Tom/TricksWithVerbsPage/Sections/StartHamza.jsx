import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

import Word from 'components/word'

class StartHamza extends React.Component {
  render() {
    return (
      <div id="dual">
        <h2 className="title">Глагол начинается с хамзы ✍️ </h2>

        <div className="desc">
          Если глагол начинается с хамзы, например <span className="contrast"> أكَلَ </span>,<span className="contrast"> أخَذَ </span>, то в
          настоящем времени добавляем васла "~"
        </div>

        <div className="arsent">
          <div className="arsent__original">
            <Word root="كُلُ" prefix="آ" />
            <span>, </span>
            <Word root="خُذُ" prefix="آ" />
          </div>
          <div className="arsent__translate">Я кушаю, я беру</div>
        </div>

        <div className="arsent">
          <div className="arsent__original">
            كُلْ
            <span>, </span>
            خُذْ
          </div>
          <div className="arsent__translate">Ешь, возьми</div>
        </div>
      </div>
    )
  }
}

export default withStyles(arabicPage)(StartHamza)
