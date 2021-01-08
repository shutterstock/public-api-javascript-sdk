/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.30
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
    define(['../ApiClient', '../model/AudioAssetDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioAssetDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AudioAssets = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioAssetDetails);
  }
}(this, function(ApiClient, AudioAssetDetails) {
  'use strict';




  /**
   * The AudioAssets model module.
   * @module model/AudioAssets
   * @version 1.0.30
   */

  /**
   * Constructs a new <code>AudioAssets</code>.
   * Files that are available as part of an audio asset
   * @alias module:model/AudioAssets
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AudioAssets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioAssets} obj Optional instance to populate.
   * @return {module:model/AudioAssets} The populated <code>AudioAssets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('album_art')) {
        obj['album_art'] = AudioAssetDetails.constructFromObject(data['album_art']);
      }
      if (data.hasOwnProperty('clean_audio')) {
        obj['clean_audio'] = AudioAssetDetails.constructFromObject(data['clean_audio']);
      }
      if (data.hasOwnProperty('original_audio')) {
        obj['original_audio'] = AudioAssetDetails.constructFromObject(data['original_audio']);
      }
      if (data.hasOwnProperty('preview_mp3')) {
        obj['preview_mp3'] = AudioAssetDetails.constructFromObject(data['preview_mp3']);
      }
      if (data.hasOwnProperty('preview_ogg')) {
        obj['preview_ogg'] = AudioAssetDetails.constructFromObject(data['preview_ogg']);
      }
      if (data.hasOwnProperty('waveform')) {
        obj['waveform'] = AudioAssetDetails.constructFromObject(data['waveform']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AudioAssetDetails} album_art
   */
  exports.prototype['album_art'] = undefined;
  /**
   * @member {module:model/AudioAssetDetails} clean_audio
   */
  exports.prototype['clean_audio'] = undefined;
  /**
   * @member {module:model/AudioAssetDetails} original_audio
   */
  exports.prototype['original_audio'] = undefined;
  /**
   * @member {module:model/AudioAssetDetails} preview_mp3
   */
  exports.prototype['preview_mp3'] = undefined;
  /**
   * @member {module:model/AudioAssetDetails} preview_ogg
   */
  exports.prototype['preview_ogg'] = undefined;
  /**
   * @member {module:model/AudioAssetDetails} waveform
   */
  exports.prototype['waveform'] = undefined;



  return exports;
}));


