## aframe-gltf-exporter-component

![](https://github.com/fernandojsg/aframe-gltf-exporter-component/raw/master/examples/basic/basic.png)

[![Version](http://img.shields.io/npm/v/aframe-gltf-exporter-component.svg?style=flat-square)](https://npmjs.org/package/aframe-gltf-exporter-component)
[![License](http://img.shields.io/npm/l/aframe-gltf-exporter-component.svg?style=flat-square)](https://npmjs.org/package/aframe-gltf-exporter-component)

A GLTF Exporter component for A-Frame.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-gltf-exporter-component/dist/aframe-gltf-exporter-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity gltf-exporter="foo: bar"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-gltf-exporter-component
```
-->

#### npm

Install via npm:

```bash
npm install aframe-gltf-exporter-component
```

Then require and use.

```js
require('aframe');
require('aframe-gltf-exporter-component');
```
