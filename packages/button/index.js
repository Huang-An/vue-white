import WButton from './src/main';

WButton.install = function (Vue) {
    if (WButton.name) {
        Vue.component(WButton.name, WButton);
    }
};

export default WButton;
