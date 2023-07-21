import { useEffect, useState } from 'react';
import Api from '../../api';
import {  Link, useParams, useNavigate } from 'react-router-dom';
import './pokemon.css';





 function Pokemon (){

    const [info, setInfo] = useState({})
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    

    useEffect(()=>{
        async function loadInfo(){
            await Api.get(`pokemon/${id}`)

            .then((response)=>{
                setInfo(response.data)
            })

            .catch((err)=>{
                navigate("/", {replace: true});
                console.log(err)
                return;
            })
            setLoading(false)
            console.log(info);
        }
        loadInfo()
        
        
        
    },[info.name, navigate ])

    if(!loading){
        return(
            <div className='pokeContainer'>
                <div className='pokeContent'>
                    <h1>N°Dex: {info.id}</h1>
                    <h1>{info.name}</h1>
                    <div className='sprites'>
                        <div className='imgText'>
                            <img alt={info.name +'normal form'} className='pokeSprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.id}.png`}/>
                            <p>Normal</p>
                        </div>
                        <div className='imgText'>
                            <img alt={info.name +'shiny form'} className='pokeSprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${info.id}.png`}/>
                            <p>shiny</p>
                        </div>
                    </div>

                    
                        <h3>Habilidades:</h3>
                        {
                            info.abilities.map((item, index)=>{
                                return(
                                    <div>
                                        <p key={index}>{item.ability.name} {item.is_hidden ? '(hidden)' : ''}</p>
                                    
                                    </div>
                                )
                            })
                        }
                        

                        <h3>Altura:</h3>
                        {<p>{info.height} metros</p>}
                        <h3>Peso:</h3>
                        {<p>{info.weight} Kg</p>}

                        <h3>Tipo:</h3>
                            {
                                info.types.map((item, index)=>{
                                    return(
                                        <p key={index}>{item.type.name}</p>
                                        
                                    )
                                })
                            }

                        <div>
                            <h3>Status Base:</h3>
                            {
                                info.stats.map((item, index)=>{
                                    return(
                                        <div>
                                            <p key={index}>{item.stat.name}:</p> 
                                            <progress  value={item.base_stat} max="200" /> {item.base_stat}
                                            
                                        </div>
                                    )
                                })  
                            }
                        </div>
                        <Link className='back' to='/'>Voltar</Link>
                    
                        


                    
                </div>

            </div>
        )
    }else{
        return(

            <p>loading...</p>
        )
    }
}
 
export default Pokemon;
