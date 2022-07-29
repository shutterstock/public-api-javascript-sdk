/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.28
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
    define(['../ApiClient', '../model/AudioRenderTimeline', '../model/AudioRendersFilesList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioRenderTimeline'), require('./AudioRendersFilesList'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AudioRenderResult = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioRenderTimeline, root.ShutterstockApiReference.AudioRendersFilesList);
  }
}(this, function(ApiClient, AudioRenderTimeline, AudioRendersFilesList) {
  'use strict';




  /**
   * The AudioRenderResult model module.
   * @module model/AudioRenderResult
   * @version 1.1.28
   */

  /**
   * Constructs a new <code>AudioRenderResult</code>.
   * The output of an audio render in WAV or MP3 format
   * @alias module:model/AudioRenderResult
   * @class
   * @param id {String} The alphanumeric ID of the simple render
   * @param timeline {module:model/AudioRenderTimeline} 
   * @param status {module:model/AudioRenderResult.StatusEnum} A coarse progress indicator
   */
  var exports = function(id, timeline, status) {
    var _this = this;

    _this['id'] = id;
    _this['timeline'] = timeline;
    _this['status'] = status;





  };

  /**
   * Constructs a <code>AudioRenderResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRenderResult} obj Optional instance to populate.
   * @return {module:model/AudioRenderResult} The populated <code>AudioRenderResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('timeline')) {
        obj['timeline'] = AudioRenderTimeline.constructFromObject(data['timeline']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('preset')) {
        obj['preset'] = ApiClient.convertToType(data['preset'], 'String');
      }
      if (data.hasOwnProperty('progress_percent')) {
        obj['progress_percent'] = ApiClient.convertToType(data['progress_percent'], 'Number');
      }
      if (data.hasOwnProperty('files')) {
        obj['files'] = ApiClient.convertToType(data['files'], [AudioRendersFilesList]);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Date');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The alphanumeric ID of the simple render
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/AudioRenderTimeline} timeline
   */
  exports.prototype['timeline'] = undefined;
  /**
   * A coarse progress indicator
   * @member {module:model/AudioRenderResult.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The file format preset
   * @member {module:model/AudioRenderResult.PresetEnum} preset
   */
  exports.prototype['preset'] = undefined;
  /**
   * The current progress of the render as a percentage
   * @member {Number} progress_percent
   */
  exports.prototype['progress_percent'] = undefined;
  /**
   * The files associated with the render
   * @member {Array.<module:model/AudioRendersFilesList>} files
   */
  exports.prototype['files'] = undefined;
  /**
   * The time the render was submitted to the API
   * @member {Date} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The time that the audio output was uploaded
   * @member {Date} updated_date
   */
  exports.prototype['updated_date'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "WAITING_COMPOSE"
     * @const
     */
    "WAITING_COMPOSE": "WAITING_COMPOSE",
    /**
     * value: "RUNNING_COMPOSE"
     * @const
     */
    "RUNNING_COMPOSE": "RUNNING_COMPOSE",
    /**
     * value: "WAITING_RENDER"
     * @const
     */
    "WAITING_RENDER": "WAITING_RENDER",
    /**
     * value: "RUNNING_RENDER"
     * @const
     */
    "RUNNING_RENDER": "RUNNING_RENDER",
    /**
     * value: "CREATED"
     * @const
     */
    "CREATED": "CREATED",
    /**
     * value: "FAILED_CREATE"
     * @const
     */
    "FAILED_CREATE": "FAILED_CREATE"  };

  /**
   * Allowed values for the <code>preset</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PresetEnum = {
    /**
     * value: "MASTER_MP3"
     * @const
     */
    "master_mp3": "MASTER_MP3",
    /**
     * value: "MASTER_WAV"
     * @const
     */
    "MASTER_WAV": "MASTER_WAV",
    /**
     * value: "STEMS_WAV"
     * @const
     */
    "STEMS_WAV": "STEMS_WAV"  };


  return exports;
}));


