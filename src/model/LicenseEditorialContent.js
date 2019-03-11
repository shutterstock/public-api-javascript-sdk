/**
 * shutterstock
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Shutterstock) {
      root.Shutterstock = {};
    }
    root.Shutterstock.LicenseEditorialContent = factory(root.Shutterstock.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LicenseEditorialContent model module.
   * @module model/LicenseEditorialContent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LicenseEditorialContent</code>.
   * Individual editorial content to license
   * @alias module:model/LicenseEditorialContent
   * @class
   * @param editorialId {String} Editorial ID
   * @param license {String} License agreement to use for licensing
   */
  var exports = function(editorialId, license) {
    var _this = this;

    _this['editorial_id'] = editorialId;
    _this['license'] = license;


  };

  /**
   * Constructs a <code>LicenseEditorialContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseEditorialContent} obj Optional instance to populate.
   * @return {module:model/LicenseEditorialContent} The populated <code>LicenseEditorialContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('editorial_id')) {
        obj['editorial_id'] = ApiClient.convertToType(data['editorial_id'], 'String');
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = ApiClient.convertToType(data['license'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
    }
    return obj;
  }

  /**
   * Editorial ID
   * @member {String} editorial_id
   */
  exports.prototype['editorial_id'] = undefined;
  /**
   * License agreement to use for licensing
   * @member {String} license
   */
  exports.prototype['license'] = undefined;
  /**
   * Optional custom metdata to attach to the license
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Asset size to download, default is original
   * @member {module:model/LicenseEditorialContent.SizeEnum} size
   * @default 'original'
   */
  exports.prototype['size'] = 'original';


  /**
   * Allowed values for the <code>size</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SizeEnum = {
    /**
     * value: "small"
     * @const
     */
    "small": "small",
    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",
    /**
     * value: "original"
     * @const
     */
    "original": "original"  };


  return exports;
}));


