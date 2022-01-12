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
    define(['../ApiClient', '../model/AudioRenderTimelineSpanRegionEndType', '../model/AudioRenderTimelineSpanRegionKey'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioRenderTimelineSpanRegionEndType'), require('./AudioRenderTimelineSpanRegionKey'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AudioRenderTimelineSpanRegion = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioRenderTimelineSpanRegionEndType, root.ShutterstockApiReference.AudioRenderTimelineSpanRegionKey);
  }
}(this, function(ApiClient, AudioRenderTimelineSpanRegionEndType, AudioRenderTimelineSpanRegionKey) {
  'use strict';




  /**
   * The AudioRenderTimelineSpanRegion model module.
   * @module model/AudioRenderTimelineSpanRegion
   * @version 1.1.11
   */

  /**
   * Constructs a new <code>AudioRenderTimelineSpanRegion</code>.
   * A period of music or silence, measured in beats
   * @alias module:model/AudioRenderTimelineSpanRegion
   * @class
   * @param id {Number} An identifier which must be unique within the parent span
   * @param region {module:model/AudioRenderTimelineSpanRegion.RegionEnum} The type of region
   * @param descriptor {String} The descriptor ID needed to compose the music
   * @param beat {Number} The beat, relative to the span, at which the region object's music begins
   */
  var exports = function(id, region, descriptor, beat) {
    var _this = this;

    _this['id'] = id;
    _this['region'] = region;
    _this['descriptor'] = descriptor;
    _this['beat'] = beat;


  };

  /**
   * Constructs a <code>AudioRenderTimelineSpanRegion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRenderTimelineSpanRegion} obj Optional instance to populate.
   * @return {module:model/AudioRenderTimelineSpanRegion} The populated <code>AudioRenderTimelineSpanRegion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('descriptor')) {
        obj['descriptor'] = ApiClient.convertToType(data['descriptor'], 'String');
      }
      if (data.hasOwnProperty('beat')) {
        obj['beat'] = ApiClient.convertToType(data['beat'], 'Number');
      }
      if (data.hasOwnProperty('end_type')) {
        obj['end_type'] = AudioRenderTimelineSpanRegionEndType.constructFromObject(data['end_type']);
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = AudioRenderTimelineSpanRegionKey.constructFromObject(data['key']);
      }
    }
    return obj;
  }

  /**
   * An identifier which must be unique within the parent span
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The type of region
   * @member {module:model/AudioRenderTimelineSpanRegion.RegionEnum} region
   */
  exports.prototype['region'] = undefined;
  /**
   * The descriptor ID needed to compose the music
   * @member {String} descriptor
   */
  exports.prototype['descriptor'] = undefined;
  /**
   * The beat, relative to the span, at which the region object's music begins
   * @member {Number} beat
   */
  exports.prototype['beat'] = undefined;
  /**
   * @member {module:model/AudioRenderTimelineSpanRegionEndType} end_type
   */
  exports.prototype['end_type'] = undefined;
  /**
   * @member {module:model/AudioRenderTimelineSpanRegionKey} key
   */
  exports.prototype['key'] = undefined;


  /**
   * Allowed values for the <code>region</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RegionEnum = {
    /**
     * value: "music"
     * @const
     */
    "music": "music",
    /**
     * value: "silence"
     * @const
     */
    "silence": "silence"  };


  return exports;
}));


