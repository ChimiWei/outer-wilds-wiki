import { Nav, Footer } from '../layouts/index'
import { Route, Routes} from 'react-router-dom'
import { Home, TimberHearth, BrittleHollow, DarkBramble, GiantsDeep, 
  HourglassTwins, QuantumMoon, TheEye  } from '../pages'
import { useState, createContext, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

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
        <Route path='/TimberHearth' element={<TimberHearth />}>
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
      <Footer> 
        
        <div> <FontAwesomeIcon icon={brands('linkedin')} /> </div> 
        <div> outer wilds </div>
        <div> github </div> 
        
      </Footer>
    
    </>
  );
}

export default App;
