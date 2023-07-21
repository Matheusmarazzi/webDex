import { useState, useEffect } from "react";
import api from "../../api";
import './home.css';
import { Link } from "react-router-dom";
function Home(){
    const [data, setData] = useState([]);
    const [limite, setLimite] = useState(0);
    const [pag, setPag] = useState(1)


    function handleRemove(){
        if(pag<=1){
            return
        }
        setPag(pag-1)
        if(limite>=20){
            setLimite(limite-20)
        }
        

    }
    function handleAdd(){
        if(pag>=50){
            return
        }
        setPag(pag+1)
        if(limite<1000){
            setLimite(limite+20)
        }
    }
    useEffect(()=>{
        async function loadPokemons(){
            const response = await api.get("pokemon/?",{
                params:{
                    limit: 20,
                    offset:limite,
                    
                }
            })
            //  
            setData(response.data.results)
             
        }
        loadPokemons();


    },[pag])

    return(
        <div className='container'>
            <div className="pagination">
                <h1>paginas</h1>
                <div className="button">
                    <button onClick={handleRemove} >-</button>
                    <input max={50} min={1} value={pag} type="text" disabled />
                    <button onClick={handleAdd}>+</button>
                </div>
            </div>
            
            <div className="content">
            {
                data.map((item, index)=>{
                    return(
                        <div className="card" key={parseInt(index+1)}>
                            <Link className="link"  to={`Pokemon/${parseInt(index + limite + 1)}`}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(index + limite + 1)}.png`}
                                className="sprite"
                                
                            />
                            <p className="texto">{(item.name)}</p>
                            </Link>
                        </div>
                    )
                })
            }
            </div>

        </div>
    )


}

export default Home;