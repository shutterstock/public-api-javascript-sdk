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
    define(['../ApiClient', '../model/EditorialVideoContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EditorialVideoContent'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialVideoResults = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.EditorialVideoContent);
  }
}(this, function(ApiClient, EditorialVideoContent) {
  'use strict';




  /**
   * The EditorialVideoResults model module.
   * @module model/EditorialVideoResults
   * @version 1.1.41
   */

  /**
   * Constructs a new <code>EditorialVideoResults</code>.
   * List of editorial videos
   * @alias module:model/EditorialVideoResults
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>EditorialVideoResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditorialVideoResults} obj Optional instance to populate.
   * @return {module:model/EditorialVideoResults} The populated <code>EditorialVideoResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [EditorialVideoContent]);
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
   * @member {Array.<module:model/EditorialVideoContent>} data
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


