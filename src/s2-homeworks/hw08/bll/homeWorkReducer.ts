import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
           if (action.payload === 'up') {
               const newState=[...state]
               return newState.sort((a, b) => a.name > b.name ? 1 : -1 )
           }
            if (action.payload === 'down') {
                const newState=[...state]
                return  newState.sort((a, b) => a.name < b.name ? 1 : -1 )
            }
            return [...state] // need to fix

        }
        case 'check': {
               return state.filter((x) => x.age >= action.payload)

        }
        default:
            return state
    }
}
