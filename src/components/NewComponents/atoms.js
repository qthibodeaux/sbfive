import { atom } from 'recoil'

const selection = atom({
    key: 'selectionVal',
    default: 0
})

const riddlePlay = atom({
    key: 'riddleVal',
    default: false
})

export { riddlePlay, selection }