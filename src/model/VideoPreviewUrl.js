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
    root.ShutterstockApiReference.VideoPreviewUrl = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoPreviewUrl model module.
   * @module model/VideoPreviewUrl
   * @version 1.1.39
   */

  /**
   * Constructs a new <code>VideoPreviewUrl</code>.
   * Video preview information
   * @alias module:model/VideoPreviewUrl
   * @class
   * @param url {String} Direct URL to the image
   */
  var exports = function(url) {
    var _this = this;

    _this['url'] = url;
  };

  /**
   * Constructs a <code>VideoPreviewUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoPreviewUrl} obj Optional instance to populate.
   * @return {module:model/VideoPreviewUrl} The populated <code>VideoPreviewUrl</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Direct URL to the image
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


