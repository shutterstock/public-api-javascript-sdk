/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.25
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
    root.ShutterstockApiReference.Thumbnail = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Thumbnail model module.
   * @module model/Thumbnail
   * @version 1.1.25
   */

  /**
   * Constructs a new <code>Thumbnail</code>.
   * Image thumbnail information
   * @alias module:model/Thumbnail
   * @class
   * @param height {Number} Height in pixels of the image thumbnail
   * @param url {String} Direct URL to the image
   * @param width {Number} Width in pixels of the image thumbnail
   */
  var exports = function(height, url, width) {
    var _this = this;

    _this['height'] = height;
    _this['url'] = url;
    _this['width'] = width;
  };

  /**
   * Constructs a <code>Thumbnail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Thumbnail} obj Optional instance to populate.
   * @return {module:model/Thumbnail} The populated <code>Thumbnail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Height in pixels of the image thumbnail
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * Direct URL to the image
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Width in pixels of the image thumbnail
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;



  return exports;
}));


