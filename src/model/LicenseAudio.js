/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.39
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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseAudio = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LicenseAudio model module.
   * @module model/LicenseAudio
   * @version 1.1.39
   */

  /**
   * Constructs a new <code>LicenseAudio</code>.
   * An audio track in a licensing request
   * @alias module:model/LicenseAudio
   * @class
   * @param audio_id {String} ID of the track being licensed
   */
  var exports = function(audio_id) {
    var _this = this;

    _this['audio_id'] = audio_id;


  };

  /**
   * Constructs a <code>LicenseAudio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseAudio} obj Optional instance to populate.
   * @return {module:model/LicenseAudio} The populated <code>LicenseAudio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audio_id')) {
        obj['audio_id'] = ApiClient.convertToType(data['audio_id'], 'String');
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = ApiClient.convertToType(data['license'], 'String');
      }
      if (data.hasOwnProperty('search_id')) {
        obj['search_id'] = ApiClient.convertToType(data['search_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the track being licensed
   * @member {String} audio_id
   */
  exports.prototype['audio_id'] = undefined;
  /**
   * Type of license
   * @member {module:model/LicenseAudio.LicenseEnum} license
   */
  exports.prototype['license'] = undefined;
  /**
   * ID of the search that led to this licensing event
   * @member {String} search_id
   */
  exports.prototype['search_id'] = undefined;


  /**
   * Allowed values for the <code>license</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LicenseEnum = {
    /**
     * value: "audio_platform"
     * @const
     */
    "audio_platform": "audio_platform",
    /**
     * value: "premier_music_basic"
     * @const
     */
    "premier_music_basic": "premier_music_basic",
    /**
     * value: "premier_music_extended"
     * @const
     */
    "premier_music_extended": "premier_music_extended",
    /**
     * value: "premier_music_pro"
     * @const
     */
    "premier_music_pro": "premier_music_pro",
    /**
     * value: "premier_music_comp"
     * @const
     */
    "premier_music_comp": "premier_music_comp",
    /**
     * value: "asset_all_music"
     * @const
     */
    "asset_all_music": "asset_all_music"  };


  return exports;
}));


