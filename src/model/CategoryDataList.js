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
    define(['../ApiClient', '../model/AudioDataListErrors', '../model/InlineResponse200Categories'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioDataListErrors'), require('./InlineResponse200Categories'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CategoryDataList = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioDataListErrors, root.ShutterstockApiReference.InlineResponse200Categories);
  }
}(this, function(ApiClient, AudioDataListErrors, InlineResponse200Categories) {
  'use strict';




  /**
   * The CategoryDataList model module.
   * @module model/CategoryDataList
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>CategoryDataList</code>.
   * List of categories that images can belong to
   * @alias module:model/CategoryDataList
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CategoryDataList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CategoryDataList} obj Optional instance to populate.
   * @return {module:model/CategoryDataList} The populated <code>CategoryDataList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse200Categories]);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [AudioDataListErrors]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('total_count')) {
        obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Categories
   * @member {Array.<module:model/InlineResponse200Categories>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Error list; appears only if there was an error
   * @member {Array.<module:model/AudioDataListErrors>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * Server-generated message, if any
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The current page of results
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * The number of results per page
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * The total number of results across all pages
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;



  return exports;
}));


