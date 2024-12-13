/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.42
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
    define(['../ApiClient', '../model/V2catalogcollectionscollectionIditemsItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2catalogcollectionscollectionIditemsItems'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Body23 = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.V2catalogcollectionscollectionIditemsItems);
  }
}(this, function(ApiClient, V2catalogcollectionscollectionIditemsItems) {
  'use strict';




  /**
   * The Body23 model module.
   * @module model/Body23
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>Body23</code>.
   * @alias module:model/Body23
   * @class
   * @param items {Array.<module:model/V2catalogcollectionscollectionIditemsItems>} 
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>Body23</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body23} obj Optional instance to populate.
   * @return {module:model/Body23} The populated <code>Body23</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [V2catalogcollectionscollectionIditemsItems]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/V2catalogcollectionscollectionIditemsItems>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


