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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AccessTokenDetails = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccessTokenDetails model module.
   * @module model/AccessTokenDetails
   * @version 1.1.11
   */

  /**
   * Constructs a new <code>AccessTokenDetails</code>.
   * Access token details that are currently associated with this user
   * @alias module:model/AccessTokenDetails
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>AccessTokenDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessTokenDetails} obj Optional instance to populate.
   * @return {module:model/AccessTokenDetails} The populated <code>AccessTokenDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('contributor_id')) {
        obj['contributor_id'] = ApiClient.convertToType(data['contributor_id'], 'String');
      }
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('organization_id')) {
        obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
      }
      if (data.hasOwnProperty('realm')) {
        obj['realm'] = ApiClient.convertToType(data['realm'], 'String');
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * Client ID that is associated with the user
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * Contributor ID that is associated with the user
   * @member {String} contributor_id
   */
  exports.prototype['contributor_id'] = undefined;
  /**
   * Customer ID that is associated with the user
   * @member {String} customer_id
   */
  exports.prototype['customer_id'] = undefined;
  /**
   * Number of seconds until the access token expires; no expiration if this value is null
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * Organization ID that is associated with the user
   * @member {String} organization_id
   */
  exports.prototype['organization_id'] = undefined;
  /**
   * Type of access token
   * @member {module:model/AccessTokenDetails.RealmEnum} realm
   */
  exports.prototype['realm'] = undefined;
  /**
   * Scopes that this access token provides when used as authentication
   * @member {Array.<String>} scopes
   */
  exports.prototype['scopes'] = undefined;
  /**
   * User ID that is associated with the user
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * User name that is associated with the user
   * @member {String} username
   */
  exports.prototype['username'] = undefined;


  /**
   * Allowed values for the <code>realm</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RealmEnum = {
    /**
     * value: "customer"
     * @const
     */
    "customer": "customer",
    /**
     * value: "contributor"
     * @const
     */
    "contributor": "contributor"  };


  return exports;
}));


