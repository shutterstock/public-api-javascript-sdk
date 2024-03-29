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
    define(['../ApiClient', '../model/AudioRenderResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioRenderResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AudioRendersListResults = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioRenderResult);
  }
}(this, function(ApiClient, AudioRenderResult) {
  'use strict';




  /**
   * The AudioRendersListResults model module.
   * @module model/AudioRendersListResults
   * @version 1.1.32
   */

  /**
   * Constructs a new <code>AudioRendersListResults</code>.
   * Audio render data
   * @alias module:model/AudioRendersListResults
   * @class
   * @param audio_renders {Array.<module:model/AudioRenderResult>} Audio render results
   */
  var exports = function(audio_renders) {
    var _this = this;

    _this['audio_renders'] = audio_renders;
  };

  /**
   * Constructs a <code>AudioRendersListResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRendersListResults} obj Optional instance to populate.
   * @return {module:model/AudioRendersListResults} The populated <code>AudioRendersListResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audio_renders')) {
        obj['audio_renders'] = ApiClient.convertToType(data['audio_renders'], [AudioRenderResult]);
      }
    }
    return obj;
  }

  /**
   * Audio render results
   * @member {Array.<module:model/AudioRenderResult>} audio_renders
   */
  exports.prototype['audio_renders'] = undefined;



  return exports;
}));


