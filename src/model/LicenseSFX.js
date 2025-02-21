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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseSFX = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LicenseSFX model module.
   * @module model/LicenseSFX
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>LicenseSFX</code>.
   * 
   * @alias module:model/LicenseSFX
   * @class
   * @param sfx_id {String} ID of the sounds effect being licensed
   * @param subscription_id {String} ID of the subscription to use for the download.
   */
  var exports = function(sfx_id, subscription_id) {
    var _this = this;

    _this['sfx_id'] = sfx_id;



    _this['subscription_id'] = subscription_id;
  };

  /**
   * Constructs a <code>LicenseSFX</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseSFX} obj Optional instance to populate.
   * @return {module:model/LicenseSFX} The populated <code>LicenseSFX</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sfx_id')) {
        obj['sfx_id'] = ApiClient.convertToType(data['sfx_id'], 'String');
      }
      if (data.hasOwnProperty('audio_layout')) {
        obj['audio_layout'] = ApiClient.convertToType(data['audio_layout'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('search_id')) {
        obj['search_id'] = ApiClient.convertToType(data['search_id'], 'String');
      }
      if (data.hasOwnProperty('subscription_id')) {
        obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the sounds effect being licensed
   * @member {String} sfx_id
   */
  exports.prototype['sfx_id'] = undefined;
  /**
   * @member {module:model/LicenseSFX.AudioLayoutEnum} audio_layout
   */
  exports.prototype['audio_layout'] = undefined;
  /**
   * @member {module:model/LicenseSFX.FormatEnum} format
   */
  exports.prototype['format'] = undefined;
  /**
   * ID of the search that led to this licensing event
   * @member {String} search_id
   */
  exports.prototype['search_id'] = undefined;
  /**
   * ID of the subscription to use for the download.
   * @member {String} subscription_id
   */
  exports.prototype['subscription_id'] = undefined;


  /**
   * Allowed values for the <code>audio_layout</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AudioLayoutEnum = {
    /**
     * value: "ambisonic"
     * @const
     */
    "ambisonic": "ambisonic",
    /**
     * value: "5.1"
     * @const
     */
    "_5_1": "5.1",
    /**
     * value: "stereo"
     * @const
     */
    "stereo": "stereo"  };

  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "wav"
     * @const
     */
    "wav": "wav",
    /**
     * value: "mp3"
     * @const
     */
    "mp3": "mp3"  };


  return exports;
}));


