/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.22
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
    define(['../ApiClient', '../model/CreateCatalogCollectionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateCatalogCollectionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CreateCatalogCollection = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CreateCatalogCollectionItem);
  }
}(this, function(ApiClient, CreateCatalogCollectionItem) {
  'use strict';




  /**
   * The CreateCatalogCollection model module.
   * @module model/CreateCatalogCollection
   * @version 1.1.22
   */

  /**
   * Constructs a new <code>CreateCatalogCollection</code>.
   * @alias module:model/CreateCatalogCollection
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;


  };

  /**
   * Constructs a <code>CreateCatalogCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCatalogCollection} obj Optional instance to populate.
   * @return {module:model/CreateCatalogCollection} The populated <code>CreateCatalogCollection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [CreateCatalogCollectionItem]);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/CreateCatalogCollection.VisibilityEnum} visibility
   * @default 'private'
   */
  exports.prototype['visibility'] = 'private';
  /**
   * @member {Array.<module:model/CreateCatalogCollectionItem>} items
   */
  exports.prototype['items'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: "private"
     * @const
     */
    "_private": "private",
    /**
     * value: "public"
     * @const
     */
    "_public": "public"  };


  return exports;
}));


