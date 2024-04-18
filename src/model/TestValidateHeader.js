/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.40
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
    root.ShutterstockApiReference.TestValidateHeader = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TestValidateHeader model module.
   * @module model/TestValidateHeader
   * @version 1.1.40
   */

  /**
   * Constructs a new <code>TestValidateHeader</code>.
   * Validation results
   * @alias module:model/TestValidateHeader
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TestValidateHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestValidateHeader} obj Optional instance to populate.
   * @return {module:model/TestValidateHeader} The populated <code>TestValidateHeader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user-agent')) {
        obj['user-agent'] = ApiClient.convertToType(data['user-agent'], 'String');
      }
    }
    return obj;
  }

  /**
   * User agent to expect in the response
   * @member {String} user-agent
   */
  exports.prototype['user-agent'] = undefined;



  return exports;
}));


