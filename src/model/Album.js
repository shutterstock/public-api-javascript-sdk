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
    root.ShutterstockApiReference.Album = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Album model module.
   * @module model/Album
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Album</code>.
   * Album metadata
   * @alias module:model/Album
   * @class
   * @param id {String} The album ID
   * @param title {String} The album title
   */
  var exports = function(id, title) {
    var _this = this;

    _this['id'] = id;
    _this['title'] = title;
  };

  /**
   * Constructs a <code>Album</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Album} obj Optional instance to populate.
   * @return {module:model/Album} The populated <code>Album</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * The album ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The album title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


