import { act } from "react-dom/test-utils"
import { BUY_POKEMON, RETURN_POKEMON } from "../actions/gameShopAction"

const defautl_game_shop = {
    pokemon: 30
}

const game_shop = (state = defautl_game_shop, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return{
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }

        case RETURN_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }

        default: return state
    }
}

export default game_shop