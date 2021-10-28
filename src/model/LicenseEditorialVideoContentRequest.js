/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.9
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
    define(['../ApiClient', '../model/LicenseEditorialVideoContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicenseEditorialVideoContent'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseEditorialVideoContentRequest = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.LicenseEditorialVideoContent);
  }
}(this, function(ApiClient, LicenseEditorialVideoContent) {
  'use strict';




  /**
   * The LicenseEditorialVideoContentRequest model module.
   * @module model/LicenseEditorialVideoContentRequest
   * @version 1.1.9
   */

  /**
   * Constructs a new <code>LicenseEditorialVideoContentRequest</code>.
   * License editorial video content request
   * @alias module:model/LicenseEditorialVideoContentRequest
   * @class
   * @param country {Object} Mandatory country code for where the editorial content will be distributed; this value is used for rights checks
   * @param editorial {Array.<module:model/LicenseEditorialVideoContent>} Editorial content to license
   */
  var exports = function(country, editorial) {
    var _this = this;

    _this['country'] = country;
    _this['editorial'] = editorial;
  };

  /**
   * Constructs a <code>LicenseEditorialVideoContentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseEditorialVideoContentRequest} obj Optional instance to populate.
   * @return {module:model/LicenseEditorialVideoContentRequest} The populated <code>LicenseEditorialVideoContentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], Object);
      }
      if (data.hasOwnProperty('editorial')) {
        obj['editorial'] = ApiClient.convertToType(data['editorial'], [LicenseEditorialVideoContent]);
      }
    }
    return obj;
  }

  /**
   * Mandatory country code for where the editorial content will be distributed; this value is used for rights checks
   * @member {Object} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Editorial content to license
   * @member {Array.<module:model/LicenseEditorialVideoContent>} editorial
   */
  exports.prototype['editorial'] = undefined;



  return exports;
}));


