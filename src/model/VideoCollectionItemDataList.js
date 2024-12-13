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
    define(['../ApiClient', '../model/AudioDataListErrors', '../model/InlineResponse2005CoverItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioDataListErrors'), require('./InlineResponse2005CoverItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.VideoCollectionItemDataList = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioDataListErrors, root.ShutterstockApiReference.InlineResponse2005CoverItem);
  }
}(this, function(ApiClient, AudioDataListErrors, InlineResponse2005CoverItem) {
  'use strict';




  /**
   * The VideoCollectionItemDataList model module.
   * @module model/VideoCollectionItemDataList
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>VideoCollectionItemDataList</code>.
   * List of items in a collection
   * @alias module:model/VideoCollectionItemDataList
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>VideoCollectionItemDataList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoCollectionItemDataList} obj Optional instance to populate.
   * @return {module:model/VideoCollectionItemDataList} The populated <code>VideoCollectionItemDataList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse2005CoverItem]);
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
   * Assets in the collection
   * @member {Array.<module:model/InlineResponse2005CoverItem>} data
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


