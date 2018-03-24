/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

require('./vendor/GLTFExporter');

/**
 * GLTF Exporter component for A-Frame.
 */
AFRAME.registerSystem('gltf-exporter', {
  schema: {
    verbose: {default: false}
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    this.link = document.createElement('a');
    this.link.style.display = 'none';
    document.body.appendChild(this.link);

    this.exporter = new THREE.GLTFExporter();
  },

  download: function (blob, filename)
  {
    this.link.href = URL.createObjectURL( blob );
    this.link.download = filename;
    this.link.click();
  },

  downloadBinary: function (value, filename) {
    this.download(new Blob([value], {type: 'application/octet-stream'}), filename);
  },

  downloadJSON: function (text, filename) {
    this.download(new Blob([text], {type: 'application/json'}), filename);
  },

  export: function ( input, options ) {

    var inputObject3D;

    // If no entity provided, use the current scene
    if (typeof input === 'undefined') {
      inputObject3D = this.sceneEl.object3D;
    } else if (input instanceof Array) {
      inputObject3D = input.map(function (entity) { return entity.object3D; });
    } else if (input instanceof NodeList) {
      inputObject3D = Array.prototype.slice.call(input).map(function (entity) { return entity.object3D; });
    } else {
      inputObject3D = input.object3D;
    }

    var self = this;
    this.exporter.parse(inputObject3D, function (result) {
      if (options && options.binary === true) {
        self.downloadBinary(result, 'scene.glb');
      } else {
        var output = JSON.stringify(result, null, 2);
        if (self.data.verbose) {
          console.log(output);
        }
  
        self.downloadJSON(output, 'scene.gltf');
      }
    }, options);
  },
});
