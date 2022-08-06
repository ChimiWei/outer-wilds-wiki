import { Nav, Footer } from '../layouts/index'
import { Route, Routes} from 'react-router-dom'
import { Home, BrittleHollow, DarkBramble, GiantsDeep, 
  HourglassTwins, QuantumMoon, TheEye  } from '../pages'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/BrittleHollow' element={<BrittleHollow />}>
        </Route>
        <Route path='/DarkBramble' element={<DarkBramble />}>
        </Route>
        <Route path='/GiantsDeep' element={<GiantsDeep />}>
        </Route>
        <Route path='/HourglassTwins' element={<HourglassTwins />}>
        </Route>
        <Route path='/TheEye' element={<TheEye />}>
        </Route>
        <Route path='/QuantumMoon' element={<QuantumMoon />}>
        </Route>
      </Routes>
      <Footer> footer </Footer>
    </>
  );
}

export default App;
