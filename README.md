react-native-hybrid-stylesheet
=========
Allow you to create different styles for Android and iOS.

## Installation
 `npm install @diegoprates/react-react-native-hybrid-stylesheet`


## Usage
```javascript

import StyleSheet from 'react-native-hybrid-css';

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        ios: {
            backgroundColor: '#F5FCFF'
        },
        android: {
            backgroundColor: '#f234f1'
        }
    }    
});
```
### Note
This module is based on [this project.](http://makeitopen.com/tutorials/building-the-f8-app/design/)