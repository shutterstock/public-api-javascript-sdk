/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.39
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
    define(['../ApiClient', '../model/Error', '../model/LicenseSFXResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./LicenseSFXResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseSFXResultDataList = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Error, root.ShutterstockApiReference.LicenseSFXResult);
  }
}(this, function(ApiClient, Error, LicenseSFXResult) {
  'use strict';




  /**
   * The LicenseSFXResultDataList model module.
   * @module model/LicenseSFXResultDataList
   * @version 1.1.39
   */

  /**
   * Constructs a new <code>LicenseSFXResultDataList</code>.
   * List of information about licensed sound effects
   * @alias module:model/LicenseSFXResultDataList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>LicenseSFXResultDataList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseSFXResultDataList} obj Optional instance to populate.
   * @return {module:model/LicenseSFXResultDataList} The populated <code>LicenseSFXResultDataList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [LicenseSFXResult]);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * Sound effects license results
   * @member {Array.<module:model/LicenseSFXResult>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Error list; appears only if there was an error
   * @member {Array.<module:model/Error>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * Server-generated message, if any
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


