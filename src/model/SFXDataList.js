/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.31
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
    define(['../ApiClient', '../model/SFX'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SFX'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.SFXDataList = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.SFX);
  }
}(this, function(ApiClient, SFX) {
  'use strict';




  /**
   * The SFXDataList model module.
   * @module model/SFXDataList
   * @version 1.1.31
   */

  /**
   * Constructs a new <code>SFXDataList</code>.
   * List of sound effects
   * @alias module:model/SFXDataList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SFXDataList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SFXDataList} obj Optional instance to populate.
   * @return {module:model/SFXDataList} The populated <code>SFXDataList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [SFX]);
      }
    }
    return obj;
  }

  /**
   * Sound Effects
   * @member {Array.<module:model/SFX>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


