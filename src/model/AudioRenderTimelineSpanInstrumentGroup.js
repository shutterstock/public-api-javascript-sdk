/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.0
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
    define(['../ApiClient', '../model/AudioRenderTimelineSpanInstrumentGroupStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioRenderTimelineSpanInstrumentGroupStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AudioRenderTimelineSpanInstrumentGroup = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioRenderTimelineSpanInstrumentGroupStatus);
  }
}(this, function(ApiClient, AudioRenderTimelineSpanInstrumentGroupStatus) {
  'use strict';




  /**
   * The AudioRenderTimelineSpanInstrumentGroup model module.
   * @module model/AudioRenderTimelineSpanInstrumentGroup
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>AudioRenderTimelineSpanInstrumentGroup</code>.
   * An instrument and the status objects that specify when that instrument plays
   * @alias module:model/AudioRenderTimelineSpanInstrumentGroup
   * @class
   * @param instrument_group {String} The instrument ID
   */
  var exports = function(instrument_group) {
    var _this = this;

    _this['instrument_group'] = instrument_group;

  };

  /**
   * Constructs a <code>AudioRenderTimelineSpanInstrumentGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRenderTimelineSpanInstrumentGroup} obj Optional instance to populate.
   * @return {module:model/AudioRenderTimelineSpanInstrumentGroup} The populated <code>AudioRenderTimelineSpanInstrumentGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('instrument_group')) {
        obj['instrument_group'] = ApiClient.convertToType(data['instrument_group'], 'String');
      }
      if (data.hasOwnProperty('statuses')) {
        obj['statuses'] = ApiClient.convertToType(data['statuses'], [AudioRenderTimelineSpanInstrumentGroupStatus]);
      }
    }
    return obj;
  }

  /**
   * The instrument ID
   * @member {String} instrument_group
   */
  exports.prototype['instrument_group'] = undefined;
  /**
   * An array of status objects
   * @member {Array.<module:model/AudioRenderTimelineSpanInstrumentGroupStatus>} statuses
   */
  exports.prototype['statuses'] = undefined;



  return exports;
}));


