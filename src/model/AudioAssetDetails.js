/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.28
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
    root.ShutterstockApiReference.AudioAssetDetails = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AudioAssetDetails model module.
   * @module model/AudioAssetDetails
   * @version 1.1.28
   */

  /**
   * Constructs a new <code>AudioAssetDetails</code>.
   * Information about a file that is part of an audio asset
   * @alias module:model/AudioAssetDetails
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AudioAssetDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioAssetDetails} obj Optional instance to populate.
   * @return {module:model/AudioAssetDetails} The populated <code>AudioAssetDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('file_size')) {
        obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * File size of the track
   * @member {Number} file_size
   */
  exports.prototype['file_size'] = undefined;
  /**
   * URL the track is available at
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


