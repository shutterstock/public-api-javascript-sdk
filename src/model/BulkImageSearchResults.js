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
    define(['../ApiClient', '../model/ImageSearchResults'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImageSearchResults'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.BulkImageSearchResults = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.ImageSearchResults);
  }
}(this, function(ApiClient, ImageSearchResults) {
  'use strict';




  /**
   * The BulkImageSearchResults model module.
   * @module model/BulkImageSearchResults
   * @version 1.1.41
   */

  /**
   * Constructs a new <code>BulkImageSearchResults</code>.
   * List of search results for each given query
   * @alias module:model/BulkImageSearchResults
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>BulkImageSearchResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkImageSearchResults} obj Optional instance to populate.
   * @return {module:model/BulkImageSearchResults} The populated <code>BulkImageSearchResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [ImageSearchResults]);
      }
      if (data.hasOwnProperty('bulk_search_id')) {
        obj['bulk_search_id'] = ApiClient.convertToType(data['bulk_search_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * List of image search results
   * @member {Array.<module:model/ImageSearchResults>} results
   */
  exports.prototype['results'] = undefined;
  /**
   * Unique identifier for the search request
   * @member {String} bulk_search_id
   */
  exports.prototype['bulk_search_id'] = undefined;



  return exports;
}));


