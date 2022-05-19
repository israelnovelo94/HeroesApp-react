import { HeroCard } from './HeroCard';

import { getHeroeByPublisher } from '../selectors/getHeroeByPublisher';
import { useMemo } from 'react';

export const HeroList = ({publisher}) => {
    
    const heroes = useMemo( () => getHeroeByPublisher(publisher), [publisher]);
  return (
    <>
        <div className='row rows-col-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    </>
  )
}
