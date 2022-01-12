/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.11
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
    define(['../ApiClient', '../model/Allotment', '../model/LicenseFormat', '../model/Price', '../model/SubscriptionMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Allotment'), require('./LicenseFormat'), require('./Price'), require('./SubscriptionMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Subscription = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Allotment, root.ShutterstockApiReference.LicenseFormat, root.ShutterstockApiReference.Price, root.ShutterstockApiReference.SubscriptionMetadata);
  }
}(this, function(ApiClient, Allotment, LicenseFormat, Price, SubscriptionMetadata) {
  'use strict';




  /**
   * The Subscription model module.
   * @module model/Subscription
   * @version 1.1.11
   */

  /**
   * Constructs a new <code>Subscription</code>.
   * Subscription information
   * @alias module:model/Subscription
   * @class
   * @param id {String} Unique internal identifier for the subscription
   */
  var exports = function(id) {
    var _this = this;





    _this['id'] = id;




  };

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allotment')) {
        obj['allotment'] = Allotment.constructFromObject(data['allotment']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('expiration_time')) {
        obj['expiration_time'] = ApiClient.convertToType(data['expiration_time'], 'Date');
      }
      if (data.hasOwnProperty('formats')) {
        obj['formats'] = ApiClient.convertToType(data['formats'], [LicenseFormat]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = ApiClient.convertToType(data['license'], 'String');
      }
      if (data.hasOwnProperty('asset_type')) {
        obj['asset_type'] = ApiClient.convertToType(data['asset_type'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = SubscriptionMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('price_per_download')) {
        obj['price_per_download'] = Price.constructFromObject(data['price_per_download']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Allotment} allotment
   */
  exports.prototype['allotment'] = undefined;
  /**
   * Description of the subscription
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Date the subscription ends
   * @member {Date} expiration_time
   */
  exports.prototype['expiration_time'] = undefined;
  /**
   * List of formats that are licensable for the subscription
   * @member {Array.<module:model/LicenseFormat>} formats
   */
  exports.prototype['formats'] = undefined;
  /**
   * Unique internal identifier for the subscription
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Internal identifier for the type of subscription
   * @member {String} license
   */
  exports.prototype['license'] = undefined;
  /**
   * Identifier for the type of assets associated with this subscription (images, videos, audio, editorial)
   * @member {String} asset_type
   */
  exports.prototype['asset_type'] = undefined;
  /**
   * @member {module:model/SubscriptionMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:model/Price} price_per_download
   */
  exports.prototype['price_per_download'] = undefined;



  return exports;
}));


