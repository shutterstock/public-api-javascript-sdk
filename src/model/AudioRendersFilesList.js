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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AudioRendersFilesList = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AudioRendersFilesList model module.
   * @module model/AudioRendersFilesList
   * @version 1.1.32
   */

  /**
   * Constructs a new <code>AudioRendersFilesList</code>.
   * Files associated with the render
   * @alias module:model/AudioRendersFilesList
   * @class
   * @param filename {String} The user-specified file name suggestion from the render request; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
   * @param bits_sample {Number} The bit depth of the audio files in bits/sample
   * @param content_type {String} The content-type of the file
   * @param download_url {String} The internet-accessible URL from which the file can be downloaded. Any redirects encountered when using this URL must be followed
   * @param frequency_hz {Number} The Sample rate of the audio files in Hertz (Hz)
   * @param kbits_second {Number} The data rate of the audio files in kilobits/second
   * @param size_bytes {Number} Size of the file in bytes
   * @param tracks {Array.<String>} An array of track names included in the file
   */
  var exports = function(filename, bits_sample, content_type, download_url, frequency_hz, kbits_second, size_bytes, tracks) {
    var _this = this;

    _this['filename'] = filename;
    _this['bits_sample'] = bits_sample;
    _this['content_type'] = content_type;
    _this['download_url'] = download_url;
    _this['frequency_hz'] = frequency_hz;
    _this['kbits_second'] = kbits_second;
    _this['size_bytes'] = size_bytes;
    _this['tracks'] = tracks;
  };

  /**
   * Constructs a <code>AudioRendersFilesList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioRendersFilesList} obj Optional instance to populate.
   * @return {module:model/AudioRendersFilesList} The populated <code>AudioRendersFilesList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('bits_sample')) {
        obj['bits_sample'] = ApiClient.convertToType(data['bits_sample'], 'Number');
      }
      if (data.hasOwnProperty('content_type')) {
        obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
      }
      if (data.hasOwnProperty('download_url')) {
        obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
      }
      if (data.hasOwnProperty('frequency_hz')) {
        obj['frequency_hz'] = ApiClient.convertToType(data['frequency_hz'], 'Number');
      }
      if (data.hasOwnProperty('kbits_second')) {
        obj['kbits_second'] = ApiClient.convertToType(data['kbits_second'], 'Number');
      }
      if (data.hasOwnProperty('size_bytes')) {
        obj['size_bytes'] = ApiClient.convertToType(data['size_bytes'], 'Number');
      }
      if (data.hasOwnProperty('tracks')) {
        obj['tracks'] = ApiClient.convertToType(data['tracks'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The user-specified file name suggestion from the render request; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * The bit depth of the audio files in bits/sample
   * @member {Number} bits_sample
   */
  exports.prototype['bits_sample'] = undefined;
  /**
   * The content-type of the file
   * @member {String} content_type
   */
  exports.prototype['content_type'] = undefined;
  /**
   * The internet-accessible URL from which the file can be downloaded. Any redirects encountered when using this URL must be followed
   * @member {String} download_url
   */
  exports.prototype['download_url'] = undefined;
  /**
   * The Sample rate of the audio files in Hertz (Hz)
   * @member {Number} frequency_hz
   */
  exports.prototype['frequency_hz'] = undefined;
  /**
   * The data rate of the audio files in kilobits/second
   * @member {Number} kbits_second
   */
  exports.prototype['kbits_second'] = undefined;
  /**
   * Size of the file in bytes
   * @member {Number} size_bytes
   */
  exports.prototype['size_bytes'] = undefined;
  /**
   * An array of track names included in the file
   * @member {Array.<String>} tracks
   */
  exports.prototype['tracks'] = undefined;



  return exports;
}));


