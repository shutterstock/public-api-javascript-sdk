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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.V2imageslicensesiddownloadsAuthCookie = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V2imageslicensesiddownloadsAuthCookie model module.
   * @module model/V2imageslicensesiddownloadsAuthCookie
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>V2imageslicensesiddownloadsAuthCookie</code>.
   * (Deprecated)
   * @alias module:model/V2imageslicensesiddownloadsAuthCookie
   * @class
   * @param name {String} The name of the cookie
   * @param value {String} The value of the cookie
   */
  var exports = function(name, value) {
    var _this = this;

    _this['name'] = name;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>V2imageslicensesiddownloadsAuthCookie</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2imageslicensesiddownloadsAuthCookie} obj Optional instance to populate.
   * @return {module:model/V2imageslicensesiddownloadsAuthCookie} The populated <code>V2imageslicensesiddownloadsAuthCookie</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the cookie
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The value of the cookie
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


