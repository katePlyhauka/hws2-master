import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
           if (action.payload === 'up') {
               const newArr=[...state]
               return newArr.sort((a, b) => a.name > b.name ? 1 : -1 )
           }
            else  {
               const newArr=[...state]
                return  newArr.sort((a, b) => a.name < b.name ? 1 : -1 )
            }
           // need to fix

        }
        case 'check': {
            const newArr=[...state]
               return newArr.filter((x) => x.age >= action.payload)
        }
        default:
            return state
    }
}
