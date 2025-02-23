/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.2.0
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
    define(['../ApiClient', '../model/LicenseEditorialContentResultDownload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicenseEditorialContentResultDownload'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseEditorialContentResult = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.LicenseEditorialContentResultDownload);
  }
}(this, function(ApiClient, LicenseEditorialContentResultDownload) {
  'use strict';




  /**
   * The LicenseEditorialContentResult model module.
   * @module model/LicenseEditorialContentResult
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>LicenseEditorialContentResult</code>.
   * The response to a licensing request for editorial content
   * @alias module:model/LicenseEditorialContentResult
   * @class
   * @param editorial_id {String} Editorial ID
   */
  var exports = function(editorial_id) {
    var _this = this;



    _this['editorial_id'] = editorial_id;

  };

  /**
   * Constructs a <code>LicenseEditorialContentResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseEditorialContentResult} obj Optional instance to populate.
   * @return {module:model/LicenseEditorialContentResult} The populated <code>LicenseEditorialContentResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allotment_charge')) {
        obj['allotment_charge'] = ApiClient.convertToType(data['allotment_charge'], 'Number');
      }
      if (data.hasOwnProperty('download')) {
        obj['download'] = LicenseEditorialContentResultDownload.constructFromObject(data['download']);
      }
      if (data.hasOwnProperty('editorial_id')) {
        obj['editorial_id'] = ApiClient.convertToType(data['editorial_id'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
    }
    return obj;
  }

  /**
   * For pre-paid plans, how many credits were used for the item license
   * @member {Number} allotment_charge
   */
  exports.prototype['allotment_charge'] = undefined;
  /**
   * @member {module:model/LicenseEditorialContentResultDownload} download
   */
  exports.prototype['download'] = undefined;
  /**
   * Editorial ID
   * @member {String} editorial_id
   */
  exports.prototype['editorial_id'] = undefined;
  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


