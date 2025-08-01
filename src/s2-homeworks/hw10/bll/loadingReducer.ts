const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: Actions): boolean => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":
           return action.isLoading// пишет студент  // need to fix

        default:
            return state.isLoading
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})


export type loadingAction = ReturnType<typeof loadingAC>


type Actions = loadingAction

