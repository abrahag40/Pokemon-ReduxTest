import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction'

// //Función sin hooks
// function comprarPokemon(props) {
//     console.log('--',props);
//     return (
//         <div>
//             <button className="btn btn-dark btn-sm mb-2" onClick={() => props.buy_pokemon_action(1)}>Comprar Pokemon</button>
//             <button className="btn btn-dark btn-sm" onClick={() => props.return_pokemon_action(1)}>Regresar</button>
//         </div>
//     )
// }
// const mapDispatchToProps = {
//     buy_pokemon_action,
//     return_pokemon_action
// }
// export default connect(null, mapDispatchToProps)(comprarPokemon)

// //Funcion con hooks
const ComprarPokemon = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={() => dispatch(buy_pokemon_action(1))}>Comprar Pokemon</button>
            <button className="btn btn-dark btn-sm" onClick={() => dispatch(return_pokemon_action(1))}>Regresar</button>
        </div>
    )
}
const mapDispatchToProps = {
    buy_pokemon_action,
    return_pokemon_action
}

export default (ComprarPokemon)
