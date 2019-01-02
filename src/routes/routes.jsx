import Components from 'views/Components/Components.jsx'
import LandingPage from 'views/LandingPage/LandingPage.jsx'
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx'
import LoginPage from 'views/LoginPage/LoginPage.jsx'
// import AdminPage from 'views/AdminPage'
import WeakLetters from 'views/WeakLetters/WeakLetters'
import JumlatuHaal from 'views/JumlatuHaal/JumlatuHaal'

var indexRoutes = [
    { path: '/jumlatuhaal', name: 'JumlatuHaal', component: JumlatuHaal },
    { path: '/weakLetters', name: 'WeakLetters', component: WeakLetters },
    // { path: '/admin', name: 'AdminPage', component: AdminPage, isWrapp: true },
    { path: '/landing', name: 'LandingPage', component: LandingPage },
    { path: '/profile', name: 'ProfilePage', component: ProfilePage },
    { path: '/login', name: 'LoginPage', component: LoginPage },
    { path: '/', name: 'Components', component: Components },
]

export default indexRoutes
