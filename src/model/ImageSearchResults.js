/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.25
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
    define(['../ApiClient', '../model/Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.ImageSearchResults = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Image);
  }
}(this, function(ApiClient, Image) {
  'use strict';




  /**
   * The ImageSearchResults model module.
   * @module model/ImageSearchResults
   * @version 1.0.25
   */

  /**
   * Constructs a new <code>ImageSearchResults</code>.
   * Image search results
   * @alias module:model/ImageSearchResults
   * @class
   * @param data {Array.<module:model/Image>} List of images
   * @param search_id {String} Unique identifier for the search request
   * @param total_count {Number} Total count of all results across all pages
   */
  var exports = function(data, search_id, total_count) {
    var _this = this;

    _this['data'] = data;



    _this['search_id'] = search_id;

    _this['total_count'] = total_count;
  };

  /**
   * Constructs a <code>ImageSearchResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageSearchResults} obj Optional instance to populate.
   * @return {module:model/ImageSearchResults} The populated <code>ImageSearchResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Image]);
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
      if (data.hasOwnProperty('search_id')) {
        obj['search_id'] = ApiClient.convertToType(data['search_id'], 'String');
      }
      if (data.hasOwnProperty('spellcheck_info')) {
        obj['spellcheck_info'] = ApiClient.convertToType(data['spellcheck_info'], Object);
      }
      if (data.hasOwnProperty('total_count')) {
        obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * List of images
   * @member {Array.<module:model/Image>} data
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
   * Unique identifier for the search request
   * @member {String} search_id
   */
  exports.prototype['search_id'] = undefined;
  /**
   * Returns information if search phrase has potentially been mistyped or another query would lead to better search results
   * @member {Object} spellcheck_info
   */
  exports.prototype['spellcheck_info'] = undefined;
  /**
   * Total count of all results across all pages
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;



  return exports;
}));


