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
import HarfLyaPage from 'views/HarfLyaPage/HarfLyaPage'
import MasdarPage from 'views/MasdarPage/MasdarPage'
import AbjectDegrees from 'views/AbjectDegrees/AbjectDegrees'
import HarfMaPlusPage from 'views/HarfMaPlusPage/HarfMaPlusPage'
import AccentPage from 'views/AccentPage/AccentPage'
import HarfDenyPage from 'views/HarfDenyPage/HarfDenyPage'
import HarfWaPage from 'views/HarfWaPage/HarfWaPage'
import ShaddaVerbPage from 'views/ShaddaVerbPage/ShaddaVerbPage'
import AffectionateWordPage from 'views/AffectionateWordPage/AffectionateWordPage'
import Ism5Page from 'views/Ism5Page/Ism5Page'
import SomeVerbsPage from 'views/SomeVerbsPage/SomeVerbsPage'
import Asmaulafal from 'views/Asmaulafal/Asmaulafal'
import DuaPage from 'views/DuaPage/DuaPage'

var indexRoutes = [
    { path: '/dua', name: 'DuaPage', component: DuaPage },
    { path: '/asmaulafal', name: 'Asmaulafal', component: Asmaulafal },
    { path: '/someverbs', name: 'SomeVerbsPage', component: SomeVerbsPage },
    { path: '/ism5', name: 'Ism5Page', component: Ism5Page },
    { path: '/affectionateword', name: 'AffectionateWordPage', component: AffectionateWordPage },
    { path: '/shaddaverb', name: 'ShaddaVerbPage', component: ShaddaVerbPage },
    { path: '/harfwa', name: 'HarfWaPage', component: HarfWaPage },
    { path: '/harfdeny', name: 'HarfDenyPage', component: HarfDenyPage },
    { path: '/accent', name: 'AccentPage', component: AccentPage },
    { path: '/harfmaplus', name: 'HarfMaPlusPage', component: HarfMaPlusPage },
    { path: '/abjectivedegrees', name: 'AbjectDegrees', component: AbjectDegrees },
    { path: '/masdar', name: 'MasdarPage', component: MasdarPage },
    { path: '/typeharflya', name: 'HarfLyaPage', component: HarfLyaPage },
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
