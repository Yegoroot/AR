// import AdminPage from 'views/AdminPage'
import Components from 'views/Components/Components.jsx'
import Home from 'views/Home/Home.jsx'
import LandingPage from 'views/LandingPage/LandingPage.jsx'
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx'
import LoginPage from 'views/LoginPage/LoginPage.jsx'
import WeakLettersPage from 'views/WeakLettersPage/WeakLettersPage'
import JumlatuHaalPage from 'views/JumlatuHaalPage/JumlatuHaalPage'
import AdwatulDjazmPage from 'views/AdwatulDjazmPage/AdwatulDjazmPage'
import IdafaPage from 'views/IdafaPage/IdafaPage'
import SoglasovOprPage from 'views/SoglasovOprPage/SoglasovOprPage'
import JumlatuIsmPage from 'views/JumlatuIsmPage/JumlatuIsmPage'
import TricksWithVerbsPage from 'views/TricksWithVerbsPage/TricksWithVerbsPage'
import TypeHarfLya from 'views/TypeHarfLya/TypeHarfLya'
import MasdarPage from 'views/MasdarPage/MasdarPage'
import AbjectDegrees from 'views/AbjectDegrees/AbjectDegrees'

var indexRoutes = [
    { path: '/abjectivedegrees', name: 'AbjectDegrees', component: AbjectDegrees },
    { path: '/masdar', name: 'MasdarPage', component: MasdarPage },
    { path: '/typeharflya', name: 'TypeHarfLya', component: TypeHarfLya },
    { path: '/tricksverbs', name: 'TricksWithVerbsPage', component: TricksWithVerbsPage },
    { path: '/jumlatuism', name: 'JumlatuIsmPage', component: JumlatuIsmPage },
    { path: '/soglasopr', name: 'SoglasovOprPage', component: SoglasovOprPage },
    { path: '/idafa', name: 'IdafaPage', component: IdafaPage },
    { path: '/adwatuldjazm', name: 'AdwatulDjazmPage', component: AdwatulDjazmPage },
    { path: '/jumlatuhaal', name: 'JumlatuHaalPage', component: JumlatuHaalPage },
    { path: '/weakLetters', name: 'WeakLettersPage', component: WeakLettersPage },
    { path: '/landing', name: 'LandingPage', component: LandingPage },
    { path: '/profile', name: 'ProfilePage', component: ProfilePage },
    { path: '/login', name: 'LoginPage', component: LoginPage },
    { path: '/components', name: 'Components', component: Components },
    { path: '/', name: 'Home', component: Home },
    // { path: '/admin', name: 'AdminPage', component: AdminPage, isWrapp: true },
]

export default indexRoutes
