/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.34
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
    define(['../ApiClient', '../model/RemoveCatalogCollectionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RemoveCatalogCollectionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.RemoveCatalogCollectionItems = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.RemoveCatalogCollectionItem);
  }
}(this, function(ApiClient, RemoveCatalogCollectionItem) {
  'use strict';




  /**
   * The RemoveCatalogCollectionItems model module.
   * @module model/RemoveCatalogCollectionItems
   * @version 1.1.34
   */

  /**
   * Constructs a new <code>RemoveCatalogCollectionItems</code>.
   * @alias module:model/RemoveCatalogCollectionItems
   * @class
   * @param items {Array.<module:model/RemoveCatalogCollectionItem>} 
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>RemoveCatalogCollectionItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveCatalogCollectionItems} obj Optional instance to populate.
   * @return {module:model/RemoveCatalogCollectionItems} The populated <code>RemoveCatalogCollectionItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [RemoveCatalogCollectionItem]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/RemoveCatalogCollectionItem>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


