/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.41
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
    define(['../ApiClient', '../model/EditorialContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EditorialContent'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialImageResults = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.EditorialContent);
  }
}(this, function(ApiClient, EditorialContent) {
  'use strict';




  /**
   * The EditorialImageResults model module.
   * @module model/EditorialImageResults
   * @version 1.1.41
   */

  /**
   * Constructs a new <code>EditorialImageResults</code>.
   * List of editorial images
   * @alias module:model/EditorialImageResults
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>EditorialImageResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditorialImageResults} obj Optional instance to populate.
   * @return {module:model/EditorialImageResults} The populated <code>EditorialImageResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [EditorialContent]);
      }
      if (data.hasOwnProperty('search_id')) {
        obj['search_id'] = ApiClient.convertToType(data['search_id'], 'String');
      }
      if (data.hasOwnProperty('total_count')) {
        obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/EditorialContent>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {String} search_id
   */
  exports.prototype['search_id'] = undefined;
  /**
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;



  return exports;
}));


