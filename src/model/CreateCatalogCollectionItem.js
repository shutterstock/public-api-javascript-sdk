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
    define(['../ApiClient', '../model/V2catalogcollectionsAsset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2catalogcollectionsAsset'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CreateCatalogCollectionItem = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.V2catalogcollectionsAsset);
  }
}(this, function(ApiClient, V2catalogcollectionsAsset) {
  'use strict';




  /**
   * The CreateCatalogCollectionItem model module.
   * @module model/CreateCatalogCollectionItem
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>CreateCatalogCollectionItem</code>.
   * @alias module:model/CreateCatalogCollectionItem
   * @class
   * @param asset {module:model/V2catalogcollectionsAsset} 
   */
  var exports = function(asset) {
    var _this = this;

    _this['asset'] = asset;
  };

  /**
   * Constructs a <code>CreateCatalogCollectionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCatalogCollectionItem} obj Optional instance to populate.
   * @return {module:model/CreateCatalogCollectionItem} The populated <code>CreateCatalogCollectionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('asset')) {
        obj['asset'] = V2catalogcollectionsAsset.constructFromObject(data['asset']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/V2catalogcollectionsAsset} asset
   */
  exports.prototype['asset'] = undefined;



  return exports;
}));


