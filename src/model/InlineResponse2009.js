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
    define(['../ApiClient', '../model/InlineResponse2009Data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2009Data'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.InlineResponse2009 = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse2009Data);
  }
}(this, function(ApiClient, InlineResponse2009Data) {
  'use strict';




  /**
   * The InlineResponse2009 model module.
   * @module model/InlineResponse2009
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>InlineResponse2009</code>.
   * Audio search results
   * @alias module:model/InlineResponse2009
   * @class
   * @param data {Array.<module:model/InlineResponse2009Data>} List of tracks
   * @param total_count {Number} Total count of all results across all pages
   * @param search_id {String} ID of the search
   */
  var exports = function(data, total_count, search_id) {
    var _this = this;

    _this['data'] = data;



    _this['total_count'] = total_count;
    _this['search_id'] = search_id;
  };

  /**
   * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse2009Data]);
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
   * List of tracks
   * @member {Array.<module:model/InlineResponse2009Data>} data
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
   * ID of the search
   * @member {String} search_id
   */
  exports.prototype['search_id'] = undefined;



  return exports;
}));


