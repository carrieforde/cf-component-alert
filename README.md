# cf-alert

A simple alert web component.

## Usage

In an HTML file:

```html
<!DOCTYPE html><html lang="en"><head>
    <script type="module" src="cf-alert.js"></script>

    <!-- 
        Use CSS custom properties to alter styles within the component.
    -->
    <style>
        --alert-bg-default: hotpink;
    </style>
</head>

<body>
    <cf-alert>
        This is the default alert.
    </cf-alert>

    <cf-alert type="info">
        This is an info alert.
    </cf-alert>

    <cf-alert type="tip">
        This is a tip / success alert.
    </cf-alert>

    <cf-alert type="warning">
        This is a warning alert.
    </cf-alert>

    <cf-alert type="danger">
        This is a danger alert.
    </cf-alert>
</body></html>
```

With npm:

```
npm install cf-alert
```

```js
import 'cf-alert';
```

## Configurable styles

Each type of alert can be customized by changing the background color or the text color. Use the following custom properties for customization:

```css
/* Default */
--alert-bg-default: #f0f4f8; /* background-color */
--alert-color-default: #334e68; /* text color */

/* Info */
--alert-bg-info: #e3f8ff;
--alert-color-info: #035388;

/* Tip / Success */
--alert-bg-tip: #effcf6;
--alert-color-tip: #014d40;

/* Warning */
--alert-bg-warning: #fffbea;
--alert-color-warning: #8d2b0b;

/* Danger */
--alert-bg-danger: #ffe3e3;
--alert-color-danger: #610316;
```
