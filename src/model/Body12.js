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
    define(['../ApiClient', '../model/V2audiolicensesAudio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2audiolicensesAudio'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Body12 = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.V2audiolicensesAudio);
  }
}(this, function(ApiClient, V2audiolicensesAudio) {
  'use strict';




  /**
   * The Body12 model module.
   * @module model/Body12
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Body12</code>.
   * Audio license request data
   * @alias module:model/Body12
   * @class
   * @param audio {Array.<module:model/V2audiolicensesAudio>} List of audio tracks to license
   */
  var exports = function(audio) {
    var _this = this;

    _this['audio'] = audio;
  };

  /**
   * Constructs a <code>Body12</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body12} obj Optional instance to populate.
   * @return {module:model/Body12} The populated <code>Body12</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audio')) {
        obj['audio'] = ApiClient.convertToType(data['audio'], [V2audiolicensesAudio]);
      }
    }
    return obj;
  }

  /**
   * List of audio tracks to license
   * @member {Array.<module:model/V2audiolicensesAudio>} audio
   */
  exports.prototype['audio'] = undefined;



  return exports;
}));


