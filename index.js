import { Platform, StyleSheet } from 'react-native';

const localCreate = StyleSheet.create;

StyleSheet.create = function createStyle(styles){
    const platformStyles = {};
    Object.keys(styles).forEach((name) => {
        let {ios, android, ...style} = {...styles[name]};
        if (ios && Platform.OS === 'ios') {
            style = {...style, ...ios};
        }
        if (android && Platform.OS === 'android') {
            style = {...style, ...android};
        }
        platformStyles[name] = style;
    });
    return localCreate(platformStyles);
};

module.exports = StyleSheet;