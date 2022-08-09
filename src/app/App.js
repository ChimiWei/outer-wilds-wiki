import { Nav, Footer } from '../layouts/index'
import { Route, Routes} from 'react-router-dom'
import { Home, BrittleHollow, DarkBramble, GiantsDeep, 
  HourglassTwins, QuantumMoon, TheEye  } from '../pages'
import { useState, createContext, useEffect } from 'react';

export const FadeOutContext = createContext();

function App() {
  const [fadeOut, setFadeOut] = useState(false);
  const contextValue = {fadeOut, setFadeOut};

  useEffect(() => { // resets fadeOut state
    if(fadeOut) {
      setTimeout(() => {
        setFadeOut(false)
      }, 900)
    } 
  }
  , [fadeOut])
  return (
    <>
    <FadeOutContext.Provider value={contextValue}>
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
      </ FadeOutContext.Provider>
      <Footer> footer </Footer>
    
    </>
  );
}

export default App;
