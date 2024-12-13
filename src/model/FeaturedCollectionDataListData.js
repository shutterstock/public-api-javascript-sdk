/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.42
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
    define(['../ApiClient', '../model/InlineResponse2006CoverItem', '../model/InlineResponse2006HeroItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2006CoverItem'), require('./InlineResponse2006HeroItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.FeaturedCollectionDataListData = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse2006CoverItem, root.ShutterstockApiReference.InlineResponse2006HeroItem);
  }
}(this, function(ApiClient, InlineResponse2006CoverItem, InlineResponse2006HeroItem) {
  'use strict';




  /**
   * The FeaturedCollectionDataListData model module.
   * @module model/FeaturedCollectionDataListData
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>FeaturedCollectionDataListData</code>.
   * Metadata about a featured collection
   * @alias module:model/FeaturedCollectionDataListData
   * @class
   * @param id {String} Collection ID
   * @param name {String} Name of the collection
   * @param total_item_count {Number} Total number of items in the collection
   */
  var exports = function(id, name, total_item_count) {
    var _this = this;




    _this['id'] = id;

    _this['name'] = name;

    _this['total_item_count'] = total_item_count;

  };

  /**
   * Constructs a <code>FeaturedCollectionDataListData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeaturedCollectionDataListData} obj Optional instance to populate.
   * @return {module:model/FeaturedCollectionDataListData} The populated <code>FeaturedCollectionDataListData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cover_item')) {
        obj['cover_item'] = InlineResponse2006CoverItem.constructFromObject(data['cover_item']);
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('hero_item')) {
        obj['hero_item'] = InlineResponse2006HeroItem.constructFromObject(data['hero_item']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('items_updated_time')) {
        obj['items_updated_time'] = ApiClient.convertToType(data['items_updated_time'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('share_url')) {
        obj['share_url'] = ApiClient.convertToType(data['share_url'], 'String');
      }
      if (data.hasOwnProperty('total_item_count')) {
        obj['total_item_count'] = ApiClient.convertToType(data['total_item_count'], 'Number');
      }
      if (data.hasOwnProperty('updated_time')) {
        obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2006CoverItem} cover_item
   */
  exports.prototype['cover_item'] = undefined;
  /**
   * Date that the collection was created
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * @member {module:model/InlineResponse2006HeroItem} hero_item
   */
  exports.prototype['hero_item'] = undefined;
  /**
   * Collection ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date that an item in the collection was last added or removed
   * @member {Date} items_updated_time
   */
  exports.prototype['items_updated_time'] = undefined;
  /**
   * Name of the collection
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Unique share url for the collection
   * @member {String} share_url
   */
  exports.prototype['share_url'] = undefined;
  /**
   * Total number of items in the collection
   * @member {Number} total_item_count
   */
  exports.prototype['total_item_count'] = undefined;
  /**
   * Date that the collection was last modified
   * @member {Date} updated_time
   */
  exports.prototype['updated_time'] = undefined;



  return exports;
}));

