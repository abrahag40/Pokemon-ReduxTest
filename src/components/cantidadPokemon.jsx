import React from 'react'
import { connect, useSelector } from "react-redux";


// Inicia sin hooks
// function cantidadPokemon(props) {
//     return (
//         <React.Fragment>
//             Unidades: {props.game_shop.pokemon}
//         </React.Fragment>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         game_shop: state.game_shop
//     }
// }
//export default connect(mapStateToProps)(cantidadPokemon)


const CantidadPokemon = () => {
    const game_shop = useSelector((state) => state.game_shop)
    return (
        <React.Fragment>
            Unidades: {game_shop.pokemon}
        </React.Fragment>
    )
}
export default (CantidadPokemon)
