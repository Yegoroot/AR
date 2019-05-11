https://coursehunters.net/course/prodvinutyy-kurs-po-react-js // первый урок установки от сюда

## About

В проекте настроен manifest для PWA

## Установка

- работать в vscode
- установить расширение eslint в vscode
- установить расширение prettier в vscode

> npm ci

## Подключено

- router
- redux
- saga
- redux
- loader
- redux-thunk
- redux-form https://redux-form.com/8.0.4/docs/gettingstarted.md/
- immutable
- connected-react-router - для хранения роутов в redux
- четкая библиотека classNames

## Для разработки

- подключена тема триал [material-UI](#https://demos.creative-tim.com/material-kit-react/#/)
- интегрированно с имеющимся проектом, убраны лишние файлы, в основе лежит основной проект, а тема лишь дополнет \*(натягиваеться, подстраивается)
- подключил redux tools для расширения
- настроил es-lint/prettier and precommit

## Если вам нужен build в подкаталог домена

Что касаеться роутов то я выложил у себя на сайте в директорию domen.com/ar
и соответсвенно добавил в **history** basename={'/ar'}> а если не в connected-react-router то <BrowserRouter basename={'/ar'}> И index.jsx и **<Redirect to='/'/>** в switcher in App.js
a так же в **package.json** "homepage": "https://domen.com/ar",

https://demos.creative-tim.com/material-kit-react/?_ga=2.258220812.7221223.1546690794-784790524.1546690794#/

## Ducks используется как концепция для Redux

Обычно в разных файлах redux всего приложения: **action** отдельно, **reducer** в сторонке отдельно
**action creators** отдельно. И чтоб не дробить так на части используем [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
Ducks позволяет нам:

- Константы, sagas и reducerы храним в одном месте - и получаеться полноценный виджет, который содержит все необходимое
- И появляется возможность поместить такой виджет в отдельную библиотеку и использовать в различных проектах
