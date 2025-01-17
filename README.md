# README

# VBot Web Plugin

[English](./README.md) | [Tiếng Việt](./README-vi.md)

## Introduction

VBot Web Plugin is built using HTML, CSS, and JavaScript. It provides a dial pad interface, call screen, and call history functionality.

## Integration Guide

Add the following code below the **body** tag in your index.html:

```jsx
<script type="module">
    import {VBotWebCall} from "https://plugin.vbot.vn/v1.0.1/vbot-web-plugin.js";
    const setting = {                
        floatingDialPad: {
            right: 10,
            bottom: 10,
            // Optional: top, left
        },        
        floatingButton: {
            enable: true,
            right: 10,
            bottom: 200,     
            backgroundColor: '#20C55A',
            width: 60,
            height: 60,
            icon: 'HTML svg tag',
            // Optional: top, left
        },
        access_token: 'Your Token',
    };
   
    VBotWebCall.init(setting);        
</script>
```

## Configuration Details

### 1. Dial Pad Configuration

Configure the dial pad position using `floatingDialPad` properties:

- `top`: Distance (px) from page top
- `bottom`: Distance (px) from page bottom
- `right`: Distance (px) from page right
- `left`: Distance (px) from page left

### 2. Button Configuration

Configure the dial pad button using `floatingButton` properties:

- `enable`: Toggle button visibility (true/false)
- `top`: Distance (px) from page top
- `bottom`: Distance (px) from page bottom
- `right`: Distance (px) from page right
- `left`: Distance (px) from page left
- `backgroundColor`: Button background color
- `width`: Button width (px)
- `height`: Button height (px)
- `icon`: HTML svg tag

Note: When position values are not specified, `top` and `left` take precedence.

### 3. Authentication Token

Contact VBot support to create an SDK account and obtain your authentication token. Set the token in the `access_token` property.

### 4. Custom Integration Options

To use your own button instead of VBot’s default button:

1. Set `floatingButton.enable` to `false`
2. Call `VBotWebCall.openDialPad()` in your button’s event handler

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>VBot Plugin Demo</title>           
  </head>
  <body>
    <div style="display: flex; flex-direction: column; width: fit-content; gap: 20px;">
      <span id="clickToCallBtn">0375856xxx</span>
      <button id="customCallBtn">
        <svg viewBox="0 0 1285 1024" width="30" height="30">
          <!-- SVG path data -->
        </svg>
        <span>Dial Pad</span>
      </button>
    </div>          
  </body>
  
  <script type="module">
        import {VBotWebCall} from "https://plugin.vbot.vn/v1.0.1/vbot-web-plugin.js";     
        const setting = {
            floatingDialPad: {
                right: 10,
                bottom: 10,
            },        
            floatingButton: {
                enable: false
            },
            access_token: 'Your Token',
        };

        VBotWebCall.init(setting);

        function clickToCall(phone) {
            VBotWebCall.makeCall(phone);
        }
        
        function openDialPad() {
            VBotWebCall.openDialPad();
        }
        
        document.getElementById('clickToCallBtn').addEventListener('click', 
            () => clickToCall(document.getElementById('clickToCallBtn').innerHTML)
        );
        document.getElementById('customCallBtn').addEventListener('click', 
            () => openDialPad()
        );
    </script> 
</html>
```

## ReactJS Integration

Create a new component to integrate VBot plugin into your React application:

```jsx
// App.jsx
import React from 'react';
import './App.css';

function App({ onClickHandler, onClickOpenDialPad }) {
    return (
        <div>
            <span onClick={() => onClickHandler('0383956xxx')}>
                Click to Call
            </span>
            <button onClick={() => onClickOpenDialPad()}>
                <svg viewBox="0 0 1285 1024" width="20" height="20">
                    <!-- SVG path data -->
                </svg>
                <span>Dial Pad</span>
            </button>
        </div>
    );
}

export default App;

// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { VBotWebCall } from "https://plugin.vbot.vn/v1.0.1/vbot-web-plugin.js";

const ClickToCall = (phone) => {
    VBotWebCall.makeCall(phone);
};

const OpenDialPad = () => {
    VBotWebCall.openDialPad();
};

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App onClickHandler={ClickToCall} onClickOpenDialPad={OpenDialPad} />
    </React.StrictMode>
);

const setting = {
    floatingDialPad: {
        right: 10,
        bottom: 10,
    },        
    floatingButton: {
        enable: true,
        right: 0,
        bottom: 200,      
        backgroundColor: '#20C55A',
        width: 60,
        height: 60,
        icon: 'HTML svg tag',      
    },
    access_token: 'Your Token',    
};

VBotWebCall.init(setting);
```

## ReactJS Webpack Integration

Edit setting in file webpack.config.js:
```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  experiments: {
    outputModule: true, // Allow Webpack create file ESM
    topLevelAwait: true, // Allow `await import()`
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    environment: {
      module: true, // Enable EcmaScript Module support
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
  },
};

``` 
Create new components:
```javascript
// App.js

import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = ({ title, openDialPad, clickToCall }) => {
  return (
    <div className='BtnGroup'>
      <span className='title'>{title}</span>
      <button className='CustomCallBtn' onClick={openDialPad}>
            <svg viewBox="0 0 1285 1024" width="20" height="20">
                <!-- Data path SVG -->
            </svg>
            <span>Bàn phím</span>
      </button>
      <button className='CustomCallBtn' onClick={clickToCall}>
            <svg viewBox="0 0 1285 1024" width="20" height="20">
                <!-- Data path SVG -->
            </svg>
            <span>Bấm để gọi</span>
      </button>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired, 
};

App.defaultProps = {
  title: 'Default Title', 
};

export default App;

// index.js (Uses dynamic import)
import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';

import App from './App';

const title = 'My VBot Web Plugin demo use React and Webpack';

const setting = {                
  floatingDialPad: {
    right: 10,
    bottom: 10,
    // Optional: top, left
  },        
  floatingButton: {
    enable: true,
    right: 10,
    bottom: 200,     
    backgroundColor: '#20C55A',
    width: 60,
    height: 60,
    icon: 'Thẻ HTML svg',
    // Optional: top, left
  },
  access_token: 'Token của bạn',
};
let VBotWebCallGlobal; 
(async () => {
  const { VBotWebCall } = await import('https://plugin.vbot.vn/v1.0.1/vbot-web-plugin.js');
  VBotWebCall.init(setting);
  VBotWebCallGlobal = VBotWebCall;

  const clickToCallHandler = (phone) => {
    console.log("clicked!", VBotWebCallGlobal);
    VBotWebCallGlobal.makeCall(phone);
  };
  
  const openDialPadHandler = () => {
    VBotWebCallGlobal.openDialPad();
  };
  
  ReactDOM.render(
    <App title={title} openDialPad={openDialPadHandler} clickToCall={() => clickToCallHandler('0365778xxx')} />,
    document.getElementById('app')
  );

  module.hot.accept();
})();

```

## Usage

1. After integration, rebuild your project (for Node.js projects) or refresh the page (Ctrl + F5)
2. The dial pad button will appear at the configured position
3. Click to open the dial pad, select a hotline, and start dialing

Note: Contact VBot support to purchase and configure hotlines for your SDK account if needed.