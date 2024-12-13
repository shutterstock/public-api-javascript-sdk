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
    define(['../ApiClient', '../model/InlineResponse20020CoverItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20020CoverItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.InlineResponse20020Data = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse20020CoverItem);
  }
}(this, function(ApiClient, InlineResponse20020CoverItem) {
  'use strict';




  /**
   * The InlineResponse20020Data model module.
   * @module model/InlineResponse20020Data
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>InlineResponse20020Data</code>.
   * Metadata about editorial livefeed
   * @alias module:model/InlineResponse20020Data
   * @class
   * @param id {String} Livefeed ID
   * @param name {String} Name of the livefeed
   * @param total_item_count {Number} Total count of items in the livefeed
   */
  var exports = function(id, name, total_item_count) {
    var _this = this;



    _this['id'] = id;
    _this['name'] = name;
    _this['total_item_count'] = total_item_count;
  };

  /**
   * Constructs a <code>InlineResponse20020Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20020Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse20020Data} The populated <code>InlineResponse20020Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cover_item')) {
        obj['cover_item'] = InlineResponse20020CoverItem.constructFromObject(data['cover_item']);
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('total_item_count')) {
        obj['total_item_count'] = ApiClient.convertToType(data['total_item_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse20020CoverItem} cover_item
   */
  exports.prototype['cover_item'] = undefined;
  /**
   * When the livefeed was initially created
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * Livefeed ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the livefeed
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Total count of items in the livefeed
   * @member {Number} total_item_count
   */
  exports.prototype['total_item_count'] = undefined;



  return exports;
}));


