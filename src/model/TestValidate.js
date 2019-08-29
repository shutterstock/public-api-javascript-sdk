/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.15
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TestValidateHeader', 'model/TestValidateQuery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TestValidateHeader'), require('./TestValidateQuery'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.TestValidate = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.TestValidateHeader, root.ShutterstockApiReference.TestValidateQuery);
  }
}(this, function(ApiClient, TestValidateHeader, TestValidateQuery) {
  'use strict';




  /**
   * The TestValidate model module.
   * @module model/TestValidate
   * @version 1.0.15
   */

  /**
   * Constructs a new <code>TestValidate</code>.
   * Validation results
   * @alias module:model/TestValidate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TestValidate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestValidate} obj Optional instance to populate.
   * @return {module:model/TestValidate} The populated <code>TestValidate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('header')) {
        obj['header'] = TestValidateHeader.constructFromObject(data['header']);
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = TestValidateQuery.constructFromObject(data['query']);
      }
    }
    return obj;
  }

  /**
   * Headers as included in the request
   * @member {module:model/TestValidateHeader} header
   */
  exports.prototype['header'] = undefined;
  /**
   * Query as included in the request
   * @member {module:model/TestValidateQuery} query
   */
  exports.prototype['query'] = undefined;



  return exports;
}));


