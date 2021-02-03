import defColor from "../def-color";

export default {
    install(Vue) {
        Vue.directive('color', {
            inserted(el, binding) {
                el.style.color = binding.arg || defColor;
            }
        })
    }
};
