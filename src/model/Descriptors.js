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
    define(['../ApiClient', '../model/Bands', '../model/Instruments', '../model/Preview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Bands'), require('./Instruments'), require('./Preview'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Descriptors = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Bands, root.ShutterstockApiReference.Instruments, root.ShutterstockApiReference.Preview);
  }
}(this, function(ApiClient, Bands, Instruments, Preview) {
  'use strict';




  /**
   * The Descriptors model module.
   * @module model/Descriptors
   * @version 1.1.32
   */

  /**
   * Constructs a new <code>Descriptors</code>.
   * Information about a descriptor
   * @alias module:model/Descriptors
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Descriptors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Descriptors} obj Optional instance to populate.
   * @return {module:model/Descriptors} The populated <code>Descriptors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('average_render_speed')) {
        obj['average_render_speed'] = ApiClient.convertToType(data['average_render_speed'], 'Number');
      }
      if (data.hasOwnProperty('bands')) {
        obj['bands'] = ApiClient.convertToType(data['bands'], [Bands]);
      }
      if (data.hasOwnProperty('instruments')) {
        obj['instruments'] = ApiClient.convertToType(data['instruments'], [Instruments]);
      }
      if (data.hasOwnProperty('max_tempo')) {
        obj['max_tempo'] = ApiClient.convertToType(data['max_tempo'], 'Number');
      }
      if (data.hasOwnProperty('min_tempo')) {
        obj['min_tempo'] = ApiClient.convertToType(data['min_tempo'], 'Number');
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
   * The ID of the descriptor
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The average ratio of the length of the music to the time it takes to render; for example, a render speed of 3.0 generates 30 seconds of music in about 10 seconds
   * @member {Number} average_render_speed
   */
  exports.prototype['average_render_speed'] = undefined;
  /**
   * The bands that are available to use this descriptor
   * @member {Array.<module:model/Bands>} bands
   */
  exports.prototype['bands'] = undefined;
  /**
   * The instruments that can play with this descriptor
   * @member {Array.<module:model/Instruments>} instruments
   */
  exports.prototype['instruments'] = undefined;
  /**
   * The maximum beats per minute that the descriptor is intended to be used with
   * @member {Number} max_tempo
   */
  exports.prototype['max_tempo'] = undefined;
  /**
   * The minimum beats per minute that the descriptor is intended to be used with
   * @member {Number} min_tempo
   */
  exports.prototype['min_tempo'] = undefined;
  /**
   * The name of the descriptor
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Preview of the descriptor
   * @member {Array.<module:model/Preview>} previews
   */
  exports.prototype['previews'] = undefined;
  /**
   * Tags that describe the descriptor
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


