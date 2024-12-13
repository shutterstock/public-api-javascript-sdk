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
    define(['../ApiClient', '../model/V2catalogcollectionscollectionIdCoverAsset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2catalogcollectionscollectionIdCoverAsset'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Body21 = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.V2catalogcollectionscollectionIdCoverAsset);
  }
}(this, function(ApiClient, V2catalogcollectionscollectionIdCoverAsset) {
  'use strict';




  /**
   * The Body21 model module.
   * @module model/Body21
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>Body21</code>.
   * @alias module:model/Body21
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Body21</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body21} obj Optional instance to populate.
   * @return {module:model/Body21} The populated <code>Body21</code> instance.
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
      if (data.hasOwnProperty('cover_asset')) {
        obj['cover_asset'] = V2catalogcollectionscollectionIdCoverAsset.constructFromObject(data['cover_asset']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Body21.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;
  /**
   * @member {module:model/V2catalogcollectionscollectionIdCoverAsset} cover_asset
   */
  exports.prototype['cover_asset'] = undefined;


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

