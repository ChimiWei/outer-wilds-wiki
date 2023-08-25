import { Nav, Footer } from '../layouts/index'
import { GridContainer, GridItem } from '../components';
import { Route, Routes} from 'react-router-dom'
import { Home, TimberHearth, BrittleHollow, DarkBramble, GiantsDeep, 
  HourglassTwins, QuantumMoon, TheEye  } from '../pages'
import { useState, createContext, useEffect } from 'react';
import styled from 'styled-components';
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
    <MobileBody>
    <FadeOutContext.Provider value={contextValue}>
      <Nav />
      <Routes>
        <Route path='/outer-wilds-wiki/' element={<Home />}>
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
        <Route path='/QuantumMoon' element={<QuantumMoon />}>
        </Route>
      </Routes>
      </ FadeOutContext.Provider>
      <Footer> 
        <GridContainer>
        <GridItem href='https://www.linkedin.com/in/wei-oliveira' > <FontAwesomeIcon icon={brands('linkedin')} /> </GridItem> 
        <GridItem> outer wilds </GridItem>
        <GridItem href='https://github.com/ChimiWei'> <FontAwesomeIcon icon={brands('github')} /> </GridItem> 
        </GridContainer>
      </Footer>
    
    </ MobileBody>
  );
}


const MobileBody = styled.div`
  @media screen and (max-width: 920px) {
      overflow-x: hidden;
      position: relative;
      }
  
`
export default App;
