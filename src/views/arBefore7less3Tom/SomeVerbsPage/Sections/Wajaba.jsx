import React from "react";

function Wajaba() {
  return (
    <div id="Wajaba">
      <h2 className="title h2ar contrast">وَجَبَ - يَجِبُ</h2>
      <div className="desc">
        Имеет вид ТОЛЬКО в 3 лице, мужском роде, прошедшем или настоящем времени
      </div>

      <h3 className="title">Структура 1</h3>

      <div className="arsent">
        <div className="arsent__original contrast_2">يَجِبُ + أن + الفعْل في الماضارع</div>
      </div>

      <p>Например:</p>
      <div className="arsent">
        <div className="arsent__original">يَجِبُ أن نَذهَبُ الي العَمل</div>
        <div className="arsent__translate">Нам нужно (ваджиб) идти на работу</div>
      </div>
      <div className="arsent">
        <div className="arsent__original">يَجِبُ أن تَخْرُجْنَ من الغرفة</div>
        <div className="arsent__translate">Вам (женьщины) нужно выйдти из комнаты</div>
      </div>

      <h3 className="title">Структура 2 (более популярная)</h3>
      <div className="arsent">
        <div className="arsent__original contrast_2">
          يَجِبُ + على (ي - كَ - كِ - ..) + أن + الفعْل في الماضارع
        </div>
      </div>
    </div>
  );
}

export default Wajaba;
