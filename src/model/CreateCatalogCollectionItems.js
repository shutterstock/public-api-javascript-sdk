/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.29
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
    root.ShutterstockApiReference.CreateCatalogCollectionItems = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CreateCatalogCollectionItem);
  }
}(this, function(ApiClient, CreateCatalogCollectionItem) {
  'use strict';




  /**
   * The CreateCatalogCollectionItems model module.
   * @module model/CreateCatalogCollectionItems
   * @version 1.1.29
   */

  /**
   * Constructs a new <code>CreateCatalogCollectionItems</code>.
   * @alias module:model/CreateCatalogCollectionItems
   * @class
   * @param items {Array.<module:model/CreateCatalogCollectionItem>} 
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>CreateCatalogCollectionItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCatalogCollectionItems} obj Optional instance to populate.
   * @return {module:model/CreateCatalogCollectionItems} The populated <code>CreateCatalogCollectionItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [CreateCatalogCollectionItem]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CreateCatalogCollectionItem>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


