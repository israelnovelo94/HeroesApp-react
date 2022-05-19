import { Routes, Route } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroeScreen } from '../components/heroe/HeroeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';

import { Navbar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="hero/:heroeId" element={<HeroeScreen />} />

              <Route path="/" element={<MarvelScreen />} />
          </Routes>

        </div>
    </>
  )
}
