import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Word from "components/word";
import arabicPage from "assets/jss/material-kit-react/views/arabicPage.jsx";

class LiWithVerb extends React.Component {
  render() {
    return (
      <div id="liWithVerbs">
        <h2 className="title">Частица لِ с глаголами</h2>

        <div className="desc">
          Отвечает на вопрос "Для чего?", "Почему?", "По какой причине?". И так же убирает
          <span className="desc__ar"> ن </span>
        </div>
        <div className="arsent">
          <div className="arsent__original">
            خرجتِ <Word root="تشربي" prefix="لِ" /> الماء
          </div>
          <div className="arsent__translate">
            Вышел <span className="contrast"> для того чтоб </span> попить воды
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(arabicPage)(LiWithVerb);
