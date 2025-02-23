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
    define(['../ApiClient', '../model/V2catalogcollectionsItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2catalogcollectionsItems'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Body22 = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.V2catalogcollectionsItems);
  }
}(this, function(ApiClient, V2catalogcollectionsItems) {
  'use strict';




  /**
   * The Body22 model module.
   * @module model/Body22
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Body22</code>.
   * @alias module:model/Body22
   * @class
   * @param items {Array.<module:model/V2catalogcollectionsItems>} 
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>Body22</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body22} obj Optional instance to populate.
   * @return {module:model/Body22} The populated <code>Body22</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [V2catalogcollectionsItems]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/V2catalogcollectionsItems>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


