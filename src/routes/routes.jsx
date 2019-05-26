// import AdminPage from 'views/AdminPage'
import Components from 'views/Components/Components.jsx'
import Home from 'views/Home/Home.jsx'
import LandingPage from 'views/LandingPage/LandingPage.jsx'
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx'
import LoginPage from 'views/LoginPage/LoginPage.jsx'
// --------------------
import WeakLettersPage from 'views/arBefore7less3Tom/WeakLettersPage/WeakLettersPage'
import JumlatuHaalPage from 'views/arBefore7less3Tom/JumlatuHaalPage/JumlatuHaalPage'
import AdwatulDjazmPage from 'views/arBefore7less3Tom/AdwatulDjazmPage/AdwatulDjazmPage'
import IdafaPage from 'views/arBefore7less3Tom/IdafaPage/IdafaPage'
import SoglasovOprPage from 'views/arBefore7less3Tom/SoglasovOprPage/SoglasovOprPage'
import JumlatuIsmPage from 'views/arBefore7less3Tom/JumlatuIsmPage/JumlatuIsmPage'
import TricksWithVerbsPage from 'views/arBefore7less3Tom/TricksWithVerbsPage/TricksWithVerbsPage'
import HarfLyaPage from 'views/arBefore7less3Tom/HarfLyaPage/HarfLyaPage'
import MasdarPage from 'views/arBefore7less3Tom/MasdarPage/MasdarPage'
import AbjectDegrees from 'views/arBefore7less3Tom/AbjectDegrees/AbjectDegrees'
import HarfMaPlusPage from 'views/arBefore7less3Tom/HarfMaPlusPage/HarfMaPlusPage'
import AccentPage from 'views/arBefore7less3Tom/AccentPage/AccentPage'
import HarfDenyPage from 'views/arBefore7less3Tom/HarfDenyPage/HarfDenyPage'
import HarfWaPage from 'views/arBefore7less3Tom/HarfWaPage/HarfWaPage'
import ShaddaVerbPage from 'views/arBefore7less3Tom/ShaddaVerbPage/ShaddaVerbPage'
import AffectionateWordPage from 'views/arBefore7less3Tom/AffectionateWordPage/AffectionateWordPage'
import Ism5Page from 'views/arBefore7less3Tom/Ism5Page/Ism5Page'
import SomeVerbsPage from 'views/arBefore7less3Tom/SomeVerbsPage/SomeVerbsPage'
import Asmaulafal from 'views/arBefore7less3Tom/Asmaulafal/Asmaulafal'
import DuaPage from 'views/arBefore7less3Tom/DuaPage/DuaPage'
import HarfManAzzoidatuPage from 'views/arBefore7less3Tom/HarfManAzzoidatuPage/HarfManAzzoidatuPage'
import FialMabniLilmajhun from 'views/arBefore7less3Tom/FialMabniLilmajhun/FialMabniLilmajhun'

// недоделанный (начатый эпизод)
import Pages from 'views/Pages/Pages'

/** new level 3 tom */
import HarfSobirPage from 'views/arBefore7less3Tom/HarfSobirPage/HarfSobirPage'
import HarfHalPage from 'views/arBefore7less3Tom/HarfHalPage/HarfHalPage'
import IsmChislitelPage from 'views/arBefore7less3Tom/IsmChislitelPage/IsmChislitelPage'
import SimilarityMaful from 'views/arBefore7less3Tom/SimilarityMaful/SimilarityMaful'
import IsmaMaful from 'views/arBefore7less3Tom/IsmaMaful/IsmaMaful'
import IsmaFial from 'views/arBefore7less3Tom/IsmaFial/IsmaFial'

/**  after 3 tom 5lesson  */
import IsmulMakanWaZamanPage from 'views/arAfter5less3Tom/IsmulMakanWaZamanPage/IsmulMakanWaZamanPage'
import IsmaAlatiPage from 'views/arAfter5less3Tom/IsmaAlatiPage/IsmaAlatiPage'
import PuralDualPage from 'views/arAfter5less3Tom/PuralDualPage/PuralDualPage'
import AlMafuluFihi from 'views/arAfter5less3Tom/AlMafuluFihi/AlMafuluFihi'
import HarfulAw from 'views/arAfter5less3Tom/HarfulAw/HarfulAw'
import MinQoblu from 'views/arAfter5less3Tom/MinQoblu/MinQoblu'
import ThorfItha from 'views/arAfter5less3Tom/ThorfItha/ThorfItha'
import AdatuShart from 'views/arAfter5less3Tom/AdatuShart/AdatuShart'
import SomeIsm from 'views/arAfter5less3Tom/SomeIsm/SomeIsm'
import SomeHarf from 'views/arAfter5less3Tom/SomeHarf/SomeHarf'
import LamIbtidaa from 'views/arAfter5less3Tom/LamIbtidaa/LamIbtidaa'
import VerbTransitiveAndNo from 'views/arAfter5less3Tom/VerbTransitiveAndNo/VerbTransitiveAndNo'
import InnaWithSisters from 'views/arAfter5less3Tom/InnaWithSisters/InnaWithSisters'
import Breed2 from 'views/arAfter5less3Tom/BreedsOfVerb/Breed2/Breed2'
import Breed3 from 'views/arAfter5less3Tom/BreedsOfVerb/Breed3/Breed3'
import Breed4 from 'views/arAfter5less3Tom/BreedsOfVerb/Breed4/Breed4'
import Breed5 from 'views/arAfter5less3Tom/BreedsOfVerb/Breed5/Breed5'
import Breed6 from 'views/arAfter5less3Tom/BreedsOfVerb/Breed6/Breed6'

var indexRoutes = [
  /** after 16 less 3tom and 4tom
   */
  { path: '/breed2', name: 'Breed2', component: Breed2 },
  { path: '/breed3', name: 'Breed3', component: Breed3 },
  { path: '/breed4', name: 'Breed4', component: Breed4 },
  { path: '/breed5', name: 'Breed5', component: Breed5 },
  { path: '/breed6', name: 'Breed6', component: Breed6 },

  /**
   *
   *
   *
   */
  /** after 3 tom 5lesson */
  { path: '/ismulmakanwazaman', name: 'IsmulMakanWaZamanPage', component: IsmulMakanWaZamanPage },
  { path: '/ismaalati', name: 'IsmaAlatiPage', component: IsmaAlatiPage },
  { path: '/puraldual', name: 'PuralDualPage', component: PuralDualPage },
  { path: '/almafulufihi', name: 'AlMafuluFihi', component: AlMafuluFihi },
  { path: '/harfulaw', name: 'HarfulAw', component: HarfulAw },
  { path: '/minqoblu', name: 'MinQoblu', component: MinQoblu },
  { path: '/thorfitha', name: 'ThorfItha', component: ThorfItha },
  { path: '/adatushart', name: 'AdatuShart', component: AdatuShart },
  { path: '/someism', name: 'SomeIsm', component: SomeIsm },
  { path: '/someharf', name: 'SomeHarf', component: SomeHarf },
  { path: '/lamibtidaa', name: 'LamIbtidaa', component: LamIbtidaa },
  { path: '/verbtransitive', name: 'VerbTransitiveAndNo', component: VerbTransitiveAndNo },
  { path: '/innawithsisters', name: 'InnaWithSisters', component: InnaWithSisters },

  /****************************
   *
   *
   *
   *
   */
  /** new level 3 tom */
  { path: '/pages/:id', name: 'Pages', component: Pages },
  { path: '/harfsobir', name: 'HarfSobirPage', component: HarfSobirPage },
  { path: '/harfhal', name: 'HarfHalPage', component: HarfHalPage },
  { path: '/chislitel100', name: 'IsmChislitelPage', component: IsmChislitelPage },
  { path: '/similarity', name: 'SimilarityMaful', component: SimilarityMaful },
  { path: '/ismumaful', name: 'IsmaMaful', component: IsmaMaful },
  { path: '/ismafial', name: 'IsmaFial', component: IsmaFial },

  /** 2 tom and 1  в ОСНОВЕ //
   *  и чуть чуть из третьего (незначительно)  */
  { path: '/fialmabnililmajhun', name: 'FialMabniLilmajhun', component: FialMabniLilmajhun },
  { path: '/harfazzoidatu', name: 'HarfManAzzoidatuPage', component: HarfManAzzoidatuPage },
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
  { path: '/', name: 'Home', component: Home }
]

export default indexRoutes
