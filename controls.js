export default {
    jump: new KeyboardEvent('keydown', {key:'Space', keycode: 22}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}