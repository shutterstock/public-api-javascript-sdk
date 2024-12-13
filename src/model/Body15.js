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
    define(['../ApiClient', '../model/InlineResponse2005CoverItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2005CoverItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Body15 = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse2005CoverItem);
  }
}(this, function(ApiClient, InlineResponse2005CoverItem) {
  'use strict';




  /**
   * The Body15 model module.
   * @module model/Body15
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>Body15</code>.
   * Request to get a list of items in a collection
   * @alias module:model/Body15
   * @class
   * @param items {Array.<module:model/InlineResponse2005CoverItem>} List of items
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>Body15</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body15} obj Optional instance to populate.
   * @return {module:model/Body15} The populated <code>Body15</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [InlineResponse2005CoverItem]);
      }
    }
    return obj;
  }

  /**
   * List of items
   * @member {Array.<module:model/InlineResponse2005CoverItem>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


