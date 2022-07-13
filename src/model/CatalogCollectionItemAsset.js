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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CatalogCollectionItemAsset = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CatalogCollectionItemAsset model module.
   * @module model/CatalogCollectionItemAsset
   * @version 1.1.25
   */

  /**
   * Constructs a new <code>CatalogCollectionItemAsset</code>.
   * @alias module:model/CatalogCollectionItemAsset
   * @class
   * @param type {module:model/CatalogCollectionItemAsset.TypeEnum} 
   */
  var exports = function(type) {
    var _this = this;


    _this['type'] = type;

  };

  /**
   * Constructs a <code>CatalogCollectionItemAsset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCollectionItemAsset} obj Optional instance to populate.
   * @return {module:model/CatalogCollectionItemAsset} The populated <code>CatalogCollectionItemAsset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/CatalogCollectionItemAsset.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "image"
     * @const
     */
    "image": "image",
    /**
     * value: "video"
     * @const
     */
    "video": "video",
    /**
     * value: "audio"
     * @const
     */
    "audio": "audio",
    /**
     * value: "editorial-image"
     * @const
     */
    "editorial_image": "editorial-image",
    /**
     * value: "editorial-video"
     * @const
     */
    "editorial_video": "editorial-video"  };


  return exports;
}));


