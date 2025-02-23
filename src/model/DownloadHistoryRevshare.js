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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.DownloadHistoryRevshare = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DownloadHistoryRevshare model module.
   * @module model/DownloadHistoryRevshare
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>DownloadHistoryRevshare</code>.
   * Pricing information for revenue-sharing transactions
   * @alias module:model/DownloadHistoryRevshare
   * @class
   * @param purchase_amount {String} The amount charged for the license
   * @param purchase_currency {String} The currency the amount was charged in
   */
  var exports = function(purchase_amount, purchase_currency) {
    var _this = this;

    _this['purchase_amount'] = purchase_amount;
    _this['purchase_currency'] = purchase_currency;
  };

  /**
   * Constructs a <code>DownloadHistoryRevshare</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadHistoryRevshare} obj Optional instance to populate.
   * @return {module:model/DownloadHistoryRevshare} The populated <code>DownloadHistoryRevshare</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('purchase_amount')) {
        obj['purchase_amount'] = ApiClient.convertToType(data['purchase_amount'], 'String');
      }
      if (data.hasOwnProperty('purchase_currency')) {
        obj['purchase_currency'] = ApiClient.convertToType(data['purchase_currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * The amount charged for the license
   * @member {String} purchase_amount
   */
  exports.prototype['purchase_amount'] = undefined;
  /**
   * The currency the amount was charged in
   * @member {String} purchase_currency
   */
  exports.prototype['purchase_currency'] = undefined;



  return exports;
}));


