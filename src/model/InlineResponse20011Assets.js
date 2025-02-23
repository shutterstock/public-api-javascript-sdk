/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InlineResponse20011AssetsPreviewMp3'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20011AssetsPreviewMp3'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.InlineResponse20011Assets = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse20011AssetsPreviewMp3);
  }
}(this, function(ApiClient, InlineResponse20011AssetsPreviewMp3) {
  'use strict';




  /**
   * The InlineResponse20011Assets model module.
   * @module model/InlineResponse20011Assets
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse20011Assets</code>.
   * Files that are available as part of an sound effect asset
   * @alias module:model/InlineResponse20011Assets
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse20011Assets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20011Assets} obj Optional instance to populate.
   * @return {module:model/InlineResponse20011Assets} The populated <code>InlineResponse20011Assets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('preview_mp3')) {
        obj['preview_mp3'] = InlineResponse20011AssetsPreviewMp3.constructFromObject(data['preview_mp3']);
      }
      if (data.hasOwnProperty('waveform')) {
        obj['waveform'] = InlineResponse20011AssetsPreviewMp3.constructFromObject(data['waveform']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse20011AssetsPreviewMp3} preview_mp3
   */
  exports.prototype['preview_mp3'] = undefined;
  /**
   * @member {module:model/InlineResponse20011AssetsPreviewMp3} waveform
   */
  exports.prototype['waveform'] = undefined;



  return exports;
}));


