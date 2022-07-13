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
    define(['../ApiClient', '../model/Video'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Video'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.VideoSearchResults = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Video);
  }
}(this, function(ApiClient, Video) {
  'use strict';




  /**
   * The VideoSearchResults model module.
   * @module model/VideoSearchResults
   * @version 1.1.25
   */

  /**
   * Constructs a new <code>VideoSearchResults</code>.
   * Video search results
   * @alias module:model/VideoSearchResults
   * @class
   * @param data {Array.<module:model/Video>} List of videos
   * @param total_count {Number} Total count of all results across all pages
   * @param search_id {String} Unique identifier for the search request
   */
  var exports = function(data, total_count, search_id) {
    var _this = this;

    _this['data'] = data;



    _this['total_count'] = total_count;
    _this['search_id'] = search_id;
  };

  /**
   * Constructs a <code>VideoSearchResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoSearchResults} obj Optional instance to populate.
   * @return {module:model/VideoSearchResults} The populated <code>VideoSearchResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Video]);
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
      if (data.hasOwnProperty('search_id')) {
        obj['search_id'] = ApiClient.convertToType(data['search_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * List of videos
   * @member {Array.<module:model/Video>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Server-generated message, if any
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Current page that is returned
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * Number of results per page
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * Total count of all results across all pages
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;
  /**
   * Unique identifier for the search request
   * @member {String} search_id
   */
  exports.prototype['search_id'] = undefined;



  return exports;
}));


