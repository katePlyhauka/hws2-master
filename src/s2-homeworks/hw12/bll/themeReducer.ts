const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ReturnType<typeof changeThemeId>): typeof initState=> { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeActionType => ({type: 'SET_THEME_ID', id}) // fix any

type changeThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}