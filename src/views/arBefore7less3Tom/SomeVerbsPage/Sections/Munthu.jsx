import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Munthu extends React.Component {
  render() {
    return (
      <div id="munzu">
        <h2 className="title h2ar">
          مُنْذُ{' '}
          <span role="img" aria-label="Writing Hand">
            {' '}
            ✍️{' '}
          </span>{' '}
        </h2>
        <div className="desc">
          Главные смыслы <b>"тому назад", "до тех пор", "уже", "с (времени)"</b>
        </div>

        <div className="arsent">
          <div className="arsent__original">
            ما أكَلتُ <span className="contrast"> مُنْذُ </span> الصاباح
          </div>
          <div className="arsent__translate">
            Не ел <span className="contrast">с</span> утра
          </div>
        </div>
        <div className="arsent">
          <div className="arsent__original">
            ما رأيتُ محمحد <span className="contrast"> مُنْذُ </span> شهر
          </div>
          <div className="arsent__translate">
            Не видел Мухаммада <span className="contrast"> уже как </span> месяц
          </div>
        </div>

        <div className="arsent">
          <div className="arsent__original">
            ما شربتُ القهوة <span className="contrast"> مُنْذُ </span> زمن
          </div>
          <div className="arsent__translate">
            <span className="contrast"> Уже </span> давно не пил кофе
          </div>
        </div>

        <div className="arsent">
          <div className="arsent__original">
            ما تَكَلّمتُ معَ أبِي <span className="contrast"> مُنْذُ </span> رَجَعَهُ من مصرِ
          </div>
          <div className="arsent__translate">
            Не разговаривал с Отцом <span className="contrast"> с тех пор как </span> он вернулся из Египта
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(arabicPage)(Munthu)
