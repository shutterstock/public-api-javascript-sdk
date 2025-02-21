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
    define(['../ApiClient', '../model/LicenseSFXResultDownload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicenseSFXResultDownload'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseSFXResultDataListData = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.LicenseSFXResultDownload);
  }
}(this, function(ApiClient, LicenseSFXResultDownload) {
  'use strict';




  /**
   * The LicenseSFXResultDataListData model module.
   * @module model/LicenseSFXResultDataListData
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>LicenseSFXResultDataListData</code>.
   * The response to a licensing request for an sound effects
   * @alias module:model/LicenseSFXResultDataListData
   * @class
   * @param sfx_id {String} Sound effects ID that was licensed
   */
  var exports = function(sfx_id) {
    var _this = this;




    _this['sfx_id'] = sfx_id;

  };

  /**
   * Constructs a <code>LicenseSFXResultDataListData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseSFXResultDataListData} obj Optional instance to populate.
   * @return {module:model/LicenseSFXResultDataListData} The populated <code>LicenseSFXResultDataListData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allotment_charge')) {
        obj['allotment_charge'] = ApiClient.convertToType(data['allotment_charge'], 'Number');
      }
      if (data.hasOwnProperty('download')) {
        obj['download'] = LicenseSFXResultDownload.constructFromObject(data['download']);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('sfx_id')) {
        obj['sfx_id'] = ApiClient.convertToType(data['sfx_id'], 'String');
      }
      if (data.hasOwnProperty('license_id')) {
        obj['license_id'] = ApiClient.convertToType(data['license_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Number of credits that this licensing event used
   * @member {Number} allotment_charge
   */
  exports.prototype['allotment_charge'] = undefined;
  /**
   * @member {module:model/LicenseSFXResultDownload} download
   */
  exports.prototype['download'] = undefined;
  /**
   * Error message, appears only if there was an error
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Sound effects ID that was licensed
   * @member {String} sfx_id
   */
  exports.prototype['sfx_id'] = undefined;
  /**
   * ID of the license event
   * @member {String} license_id
   */
  exports.prototype['license_id'] = undefined;



  return exports;
}));


