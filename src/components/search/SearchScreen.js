import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroe/HeroCard';
import { getHeroeByName } from '../selectors/getHeroeByName';
import queryString from 'query-string';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const {q = ''} = queryString.parse(location.search);



  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFileted =  useMemo( () => getHeroeByName(q), [q] );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`)

  }
  return (
    
    <>
        <h1>Busquedas</h1>
        <hr />

        <div className="row">

            <div className="col-5">
                <h4>Buscar</h4>
                <hr />

                <form onSubmit={ handleSearch }>
                    <input 
                        type="text"
                        placeholder="Buscar un heroe"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={ searchText }
                        onChange={ handleInputChange }
                    />


                    <button 
                        className="btn btn-outline-primary mt-1"
                        type="submit">
                        Buscar...
                    </button>

                </form>


            </div>

            <div className="col-7">
                <h4>Resultados</h4>
                <hr />
                {
                    (q === '')
                        ? <div className="alert alert-info"> Buscar un heroe </div>
                        : ( heroesFileted.length === 0 ) 
                            && <div className="alert alert-danger"> No hay resultados: { q } </div>
                }


                {
                    heroesFileted.map(hero => (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />
                    ))
                }
                


            </div>

            

        </div>

    </>
  )
}
