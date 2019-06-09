import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Word from 'components/word'

import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Samaha extends React.Component {
  render() {
    return (
      <div id="samaha">
        <h2 className="title h2ar">سَمَحَ</h2>

        <div className="desc">
          Это фразовый глагол, который требует два условия: Первое <b> тот кто разрешает</b>, второе <b> что разрешают</b>, и то что
          разрешают является масдаром
        </div>
        <div className="arsent">
          <div className="arsent__original">
            أبِي <span className="contrast"> سَمَحَ </span> <Word prefix="لِ" root="ي" />
            &nbsp;
            <span className="contrast_2">
              <Word prefix="بِ" root="اذهاب" />
            </span>
            <span> مع الصْدِقَائي </span>
          </div>
          <div className="arsent__translate">
            Мой отец <span className="contrast"> разрешил </span> мне
            <span className="contrast_2"> играть </span> с моими друзьями
          </div>
        </div>

        <div className="arsent">
          <div className="arsent__original">
            المدرّس <span className="contrast"> سَمَحَ </span> <Word prefix="لِ" root="الطلاب" />
            &nbsp;
            <span className="contrast_2">
              <Word prefix="بِ" root="كِتَابَة" />
            </span>
            <span> بِقلمِ أحْمرِ </span>
          </div>
          <div className="arsent__translate">
            Учитель <span className="contrast"> разрешил </span> студентам
            <span className="contrast_2"> писать </span> красной ручкой
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(arabicPage)(Samaha)
