import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

import Word from 'components/word'
class DualIsm extends React.Component {
  render() {
    return (
      <div id="dual">
        <h2 className="title">
          Глаголы для двойственных чисел{' '}
          <span role="img" aria-label="Writing Hand">
            {' '}
            ✍️{' '}
          </span>{' '}
        </h2>

        <div className="items">
          <div className="item">
            <h3>الماضى</h3>
            <div className="arsent">
              <div className="arsent__original">
                <Word root="ذهبْ" suffix="تُما" />
                <br />
                <Word root="ذهب" suffix="ا" />
                <span> - </span>
                <Word root="ذهبَ" suffix="تَا" />
              </div>
            </div>
          </div>

          <div className="item">
            <h3>المضارع</h3>
            <div className="arsent">
              <div className="arsent__original">
                <Word prefix="تَ" root="ذْهبَ" suffix="انِ" />
                <br />
                <Word prefix="يَ" root="ذْهبَ" suffix="انِ" />
                <span> - </span>
                <Word prefix="تَ" root="ذْهبَ" suffix="انِ" />
              </div>
            </div>
          </div>

          <div className="item">
            <h3>الأمر</h3>
            <div className="arsent">
              <div className="arsent__original">
                <Word prefix="اِ" root="ذْهَبَ" suffix="ا" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(arabicPage)(DualIsm)
