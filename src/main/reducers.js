import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Read Book',
        list: [{
            _id: 1,
            description: 'Card payment',
            done: true
        },
        {
            _id: 2,
            description: 'Meeting with the team at 10',
            done: false
        },
        {
            _id: 3,
            description: 'Medical consultation on tuesdays after lunch',
            done: false
        }]
    })
})

export default rootReducer