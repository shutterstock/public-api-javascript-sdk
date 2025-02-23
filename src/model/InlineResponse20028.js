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
    root.ShutterstockApiReference.InlineResponse20028 = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20028 model module.
   * @module model/InlineResponse20028
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse20028</code>.
   * User details
   * @alias module:model/InlineResponse20028
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>InlineResponse20028</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20028} obj Optional instance to populate.
   * @return {module:model/InlineResponse20028} The populated <code>InlineResponse20028</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contributor_id')) {
        obj['contributor_id'] = ApiClient.convertToType(data['contributor_id'], 'String');
      }
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('full_name')) {
        obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_premier')) {
        obj['is_premier'] = ApiClient.convertToType(data['is_premier'], 'Boolean');
      }
      if (data.hasOwnProperty('is_premier_parent')) {
        obj['is_premier_parent'] = ApiClient.convertToType(data['is_premier_parent'], 'Boolean');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('only_enhanced_license')) {
        obj['only_enhanced_license'] = ApiClient.convertToType(data['only_enhanced_license'], 'Boolean');
      }
      if (data.hasOwnProperty('only_sensitive_use')) {
        obj['only_sensitive_use'] = ApiClient.convertToType(data['only_sensitive_use'], 'Boolean');
      }
      if (data.hasOwnProperty('organization_id')) {
        obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
      }
      if (data.hasOwnProperty('premier_permissions')) {
        obj['premier_permissions'] = ApiClient.convertToType(data['premier_permissions'], ['String']);
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique internal identifier of the user, as a contributor
   * @member {String} contributor_id
   */
  exports.prototype['contributor_id'] = undefined;
  /**
   * Unique internal identifier of the user, as a purchaser
   * @member {String} customer_id
   */
  exports.prototype['customer_id'] = undefined;
  /**
   * Email address of the user
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * First name of the user
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * Full name including first, middle, and last name of the user
   * @member {String} full_name
   */
  exports.prototype['full_name'] = undefined;
  /**
   * Unique internal identifier for the user, not tied to contributor or purchasing customer
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * True if the user has access to the Premier collection, false otherwise
   * @member {Boolean} is_premier
   */
  exports.prototype['is_premier'] = undefined;
  /**
   * True if the user has access to the Premier collection and also has child users
   * @member {Boolean} is_premier_parent
   */
  exports.prototype['is_premier_parent'] = undefined;
  /**
   * Main language of the user account
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Last name of the user
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * True if the user has an enterprise license, false otherwise
   * @member {Boolean} only_enhanced_license
   */
  exports.prototype['only_enhanced_license'] = undefined;
  /**
   * True if the user has access to sensitive use only, false otherwise
   * @member {Boolean} only_sensitive_use
   */
  exports.prototype['only_sensitive_use'] = undefined;
  /**
   * Unique internal identifier for the user's organization, specific to Premier users
   * @member {String} organization_id
   */
  exports.prototype['organization_id'] = undefined;
  /**
   * List of permissions allowed through the Premier client
   * @member {Array.<String>} premier_permissions
   */
  exports.prototype['premier_permissions'] = undefined;
  /**
   * User name associated to the user
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


