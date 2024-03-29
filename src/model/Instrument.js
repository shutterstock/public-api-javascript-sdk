/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.32
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
    define(['../ApiClient', '../model/Preview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Preview'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Instrument = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Preview);
  }
}(this, function(ApiClient, Preview) {
  'use strict';




  /**
   * The Instrument model module.
   * @module model/Instrument
   * @version 1.1.32
   */

  /**
   * Constructs a new <code>Instrument</code>.
   * Information about an musical instrument
   * @alias module:model/Instrument
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Instrument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Instrument} obj Optional instance to populate.
   * @return {module:model/Instrument} The populated <code>Instrument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('previews')) {
        obj['previews'] = ApiClient.convertToType(data['previews'], [Preview]);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The id of the instrument
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the instrument
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Preview of the instrument
   * @member {Array.<module:model/Preview>} previews
   */
  exports.prototype['previews'] = undefined;
  /**
   * List of tags
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


