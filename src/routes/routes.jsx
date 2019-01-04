import Components from 'views/Components/Components.jsx'
import Home from 'views/Home/Home.jsx'
import LandingPage from 'views/LandingPage/LandingPage.jsx'
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx'
import LoginPage from 'views/LoginPage/LoginPage.jsx'
// import AdminPage from 'views/AdminPage'
import WeakLettersPage from 'views/WeakLettersPage/WeakLettersPage'
import JumlatuHaalPage from 'views/JumlatuHaalPage/JumlatuHaalPage'
import AdwatulDjazmPage from 'views/AdwatulDjazmPage/AdwatulDjazmPage'
import Idafa from 'views/Idafa/Idafa'

var indexRoutes = [
    { path: '/idafa', name: 'Idafa', component: Idafa },
    { path: '/adwatuldjazm', name: 'AdwatulDjazmPage', component: AdwatulDjazmPage },
    { path: '/jumlatuhaal', name: 'JumlatuHaalPage', component: JumlatuHaalPage },
    { path: '/weakLetters', name: 'WeakLettersPage', component: WeakLettersPage },
    // { path: '/admin', name: 'AdminPage', component: AdminPage, isWrapp: true },
    { path: '/landing', name: 'LandingPage', component: LandingPage },
    { path: '/profile', name: 'ProfilePage', component: ProfilePage },
    { path: '/login', name: 'LoginPage', component: LoginPage },
    { path: '/components', name: 'Components', component: Components },
    { path: '/', name: 'Home', component: Home },
]

export default indexRoutes
