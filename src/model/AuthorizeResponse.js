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
    root.Shutterstock.AuthorizeResponse = factory(root.Shutterstock.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AuthorizeResponse model module.
   * @module model/AuthorizeResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AuthorizeResponse</code>.
   * Response to Authorize requests
   * @alias module:model/AuthorizeResponse
   * @class
   * @param body {String} HTML redirect URL that contains the application authorization 'code'
   */
  var exports = function(body) {
    var _this = this;

    _this['body'] = body;
  };

  /**
   * Constructs a <code>AuthorizeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthorizeResponse} obj Optional instance to populate.
   * @return {module:model/AuthorizeResponse} The populated <code>AuthorizeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
    }
    return obj;
  }

  /**
   * HTML redirect URL that contains the application authorization 'code'
   * @member {String} body
   */
  exports.prototype['body'] = undefined;



  return exports;
}));


