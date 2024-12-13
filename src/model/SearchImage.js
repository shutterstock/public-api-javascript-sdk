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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.SearchImage = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SearchImage model module.
   * @module model/SearchImage
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>SearchImage</code>.
   * Data required to search for an image
   * @alias module:model/SearchImage
   * @class
   */
  var exports = function() {
    var _this = this;






































  };

  /**
   * Constructs a <code>SearchImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchImage} obj Optional instance to populate.
   * @return {module:model/SearchImage} The populated <code>SearchImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('added_date')) {
        obj['added_date'] = ApiClient.convertToType(data['added_date'], 'Date');
      }
      if (data.hasOwnProperty('added_date_start')) {
        obj['added_date_start'] = ApiClient.convertToType(data['added_date_start'], 'Date');
      }
      if (data.hasOwnProperty('aspect_ratio_min')) {
        obj['aspect_ratio_min'] = ApiClient.convertToType(data['aspect_ratio_min'], 'Number');
      }
      if (data.hasOwnProperty('aspect_ratio_max')) {
        obj['aspect_ratio_max'] = ApiClient.convertToType(data['aspect_ratio_max'], 'Number');
      }
      if (data.hasOwnProperty('aspect_ratio')) {
        obj['aspect_ratio'] = ApiClient.convertToType(data['aspect_ratio'], 'Number');
      }
      if (data.hasOwnProperty('added_date_end')) {
        obj['added_date_end'] = ApiClient.convertToType(data['added_date_end'], 'Date');
      }
      if (data.hasOwnProperty('authentic')) {
        obj['authentic'] = ApiClient.convertToType(data['authentic'], 'Boolean');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('contributor')) {
        obj['contributor'] = ApiClient.convertToType(data['contributor'], ['String']);
      }
      if (data.hasOwnProperty('contributor_country')) {
        obj['contributor_country'] = ApiClient.convertToType(data['contributor_country'], Object);
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], 'String');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('height_from')) {
        obj['height_from'] = ApiClient.convertToType(data['height_from'], 'Number');
      }
      if (data.hasOwnProperty('height_to')) {
        obj['height_to'] = ApiClient.convertToType(data['height_to'], 'Number');
      }
      if (data.hasOwnProperty('image_type')) {
        obj['image_type'] = ApiClient.convertToType(data['image_type'], ['String']);
      }
      if (data.hasOwnProperty('keyword_safe_search')) {
        obj['keyword_safe_search'] = ApiClient.convertToType(data['keyword_safe_search'], 'Boolean');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = ApiClient.convertToType(data['license'], ['String']);
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], ['String']);
      }
      if (data.hasOwnProperty('orientation')) {
        obj['orientation'] = ApiClient.convertToType(data['orientation'], 'String');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('people_model_released')) {
        obj['people_model_released'] = ApiClient.convertToType(data['people_model_released'], 'Boolean');
      }
      if (data.hasOwnProperty('people_age')) {
        obj['people_age'] = ApiClient.convertToType(data['people_age'], 'String');
      }
      if (data.hasOwnProperty('people_ethnicity')) {
        obj['people_ethnicity'] = ApiClient.convertToType(data['people_ethnicity'], ['String']);
      }
      if (data.hasOwnProperty('people_gender')) {
        obj['people_gender'] = ApiClient.convertToType(data['people_gender'], 'String');
      }
      if (data.hasOwnProperty('people_number')) {
        obj['people_number'] = ApiClient.convertToType(data['people_number'], 'Number');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], Object);
      }
      if (data.hasOwnProperty('safe')) {
        obj['safe'] = ApiClient.convertToType(data['safe'], 'Boolean');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }
      if (data.hasOwnProperty('spellcheck_query')) {
        obj['spellcheck_query'] = ApiClient.convertToType(data['spellcheck_query'], 'Boolean');
      }
      if (data.hasOwnProperty('view')) {
        obj['view'] = ApiClient.convertToType(data['view'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('width_from')) {
        obj['width_from'] = ApiClient.convertToType(data['width_from'], 'Number');
      }
      if (data.hasOwnProperty('width_to')) {
        obj['width_to'] = ApiClient.convertToType(data['width_to'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Show images added on the specified date
   * @member {Date} added_date
   */
  exports.prototype['added_date'] = undefined;
  /**
   * Show images added on or after the specified date
   * @member {Date} added_date_start
   */
  exports.prototype['added_date_start'] = undefined;
  /**
   * Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
   * @member {Number} aspect_ratio_min
   */
  exports.prototype['aspect_ratio_min'] = undefined;
  /**
   * Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
   * @member {Number} aspect_ratio_max
   */
  exports.prototype['aspect_ratio_max'] = undefined;
  /**
   * Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
   * @member {Number} aspect_ratio
   */
  exports.prototype['aspect_ratio'] = undefined;
  /**
   * Show images added before the specified date
   * @member {Date} added_date_end
   */
  exports.prototype['added_date_end'] = undefined;
  /**
   * Show only authentic images
   * @member {Boolean} authentic
   */
  exports.prototype['authentic'] = undefined;
  /**
   * Show images with the specified Shutterstock-defined category; specify a category name or ID
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * Show images with the specified contributor names or IDs, allows multiple
   * @member {Array.<String>} contributor
   */
  exports.prototype['contributor'] = undefined;
  /**
   * Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search
   * @member {Object} contributor_country
   */
  exports.prototype['contributor_country'] = undefined;
  /**
   * Fields to display in the response; see the documentation for the fields parameter in the overview section
   * @member {String} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * (Deprecated; use height_from and height_to instead) Show images with the specified height
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * Show images with the specified height or larger, in pixels
   * @member {Number} height_from
   */
  exports.prototype['height_from'] = undefined;
  /**
   * Show images with the specified height or smaller, in pixels
   * @member {Number} height_to
   */
  exports.prototype['height_to'] = undefined;
  /**
   * Show images of the specified type
   * @member {Array.<module:model/SearchImage.ImageTypeEnum>} image_type
   */
  exports.prototype['image_type'] = undefined;
  /**
   * Hide results with potentially unsafe keywords
   * @member {Boolean} keyword_safe_search
   * @default true
   */
  exports.prototype['keyword_safe_search'] = true;
  /**
   * Set query and result language (uses Accept-Language header if not set)
   * @member {module:model/SearchImage.LanguageEnum} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Show only images with the specified license
   * @member {Array.<module:model/SearchImage.LicenseEnum>} license
   */
  exports.prototype['license'] = undefined;
  /**
   * Show image results with the specified model IDs
   * @member {Array.<String>} model
   */
  exports.prototype['model'] = undefined;
  /**
   * Show image results with horizontal or vertical orientation
   * @member {module:model/SearchImage.OrientationEnum} orientation
   */
  exports.prototype['orientation'] = undefined;
  /**
   * Page number
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * Number of results per page
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * Show images of people with a signed model release
   * @member {Boolean} people_model_released
   */
  exports.prototype['people_model_released'] = undefined;
  /**
   * Show images that feature people of the specified age category
   * @member {module:model/SearchImage.PeopleAgeEnum} people_age
   */
  exports.prototype['people_age'] = undefined;
  /**
   * Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities
   * @member {Array.<module:model/SearchImage.PeopleEthnicityEnum>} people_ethnicity
   */
  exports.prototype['people_ethnicity'] = undefined;
  /**
   * Show images with people of the specified gender
   * @member {module:model/SearchImage.PeopleGenderEnum} people_gender
   */
  exports.prototype['people_gender'] = undefined;
  /**
   * Show images with the specified number of people
   * @member {Number} people_number
   */
  exports.prototype['people_number'] = undefined;
  /**
   * One or more search terms separated by spaces; you can use NOT to filter out images that match a term
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country
   * @member {Object} region
   */
  exports.prototype['region'] = undefined;
  /**
   * Enable or disable safe search
   * @member {Boolean} safe
   * @default true
   */
  exports.prototype['safe'] = true;
  /**
   * Sort by
   * @member {module:model/SearchImage.SortEnum} sort
   * @default 'popular'
   */
  exports.prototype['sort'] = 'popular';
  /**
   * Spellcheck the search query and return results on suggested spellings
   * @member {Boolean} spellcheck_query
   * @default true
   */
  exports.prototype['spellcheck_query'] = true;
  /**
   * Amount of detail to render in the response
   * @member {module:model/SearchImage.ViewEnum} view
   * @default 'minimal'
   */
  exports.prototype['view'] = 'minimal';
  /**
   * (Deprecated; use width_from and width_to instead) Show images with the specified width
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;
  /**
   * Show images with the specified width or larger, in pixels
   * @member {Number} width_from
   */
  exports.prototype['width_from'] = undefined;
  /**
   * Show images with the specified width or smaller, in pixels
   * @member {Number} width_to
   */
  exports.prototype['width_to'] = undefined;


  /**
   * Allowed values for the <code>image_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ImageTypeEnum = {
    /**
     * value: "photo"
     * @const
     */
    "photo": "photo",
    /**
     * value: "illustration"
     * @const
     */
    "illustration": "illustration",
    /**
     * value: "vector"
     * @const
     */
    "vector": "vector"  };

  /**
   * Allowed values for the <code>language</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LanguageEnum = {
    /**
     * value: "ar"
     * @const
     */
    "ar": "ar",
    /**
     * value: "bg"
     * @const
     */
    "bg": "bg",
    /**
     * value: "bn"
     * @const
     */
    "bn": "bn",
    /**
     * value: "cs"
     * @const
     */
    "cs": "cs",
    /**
     * value: "da"
     * @const
     */
    "da": "da",
    /**
     * value: "de"
     * @const
     */
    "de": "de",
    /**
     * value: "el"
     * @const
     */
    "el": "el",
    /**
     * value: "en"
     * @const
     */
    "en": "en",
    /**
     * value: "es"
     * @const
     */
    "es": "es",
    /**
     * value: "fi"
     * @const
     */
    "fi": "fi",
    /**
     * value: "fr"
     * @const
     */
    "fr": "fr",
    /**
     * value: "gu"
     * @const
     */
    "gu": "gu",
    /**
     * value: "he"
     * @const
     */
    "he": "he",
    /**
     * value: "hi"
     * @const
     */
    "hi": "hi",
    /**
     * value: "hr"
     * @const
     */
    "hr": "hr",
    /**
     * value: "hu"
     * @const
     */
    "hu": "hu",
    /**
     * value: "id"
     * @const
     */
    "id": "id",
    /**
     * value: "it"
     * @const
     */
    "it": "it",
    /**
     * value: "ja"
     * @const
     */
    "ja": "ja",
    /**
     * value: "kn"
     * @const
     */
    "kn": "kn",
    /**
     * value: "ko"
     * @const
     */
    "ko": "ko",
    /**
     * value: "ml"
     * @const
     */
    "ml": "ml",
    /**
     * value: "mr"
     * @const
     */
    "mr": "mr",
    /**
     * value: "nb"
     * @const
     */
    "nb": "nb",
    /**
     * value: "nl"
     * @const
     */
    "nl": "nl",
    /**
     * value: "or"
     * @const
     */
    "or": "or",
    /**
     * value: "pl"
     * @const
     */
    "pl": "pl",
    /**
     * value: "pt"
     * @const
     */
    "pt": "pt",
    /**
     * value: "ro"
     * @const
     */
    "ro": "ro",
    /**
     * value: "ru"
     * @const
     */
    "ru": "ru",
    /**
     * value: "sk"
     * @const
     */
    "sk": "sk",
    /**
     * value: "sl"
     * @const
     */
    "sl": "sl",
    /**
     * value: "sv"
     * @const
     */
    "sv": "sv",
    /**
     * value: "ta"
     * @const
     */
    "ta": "ta",
    /**
     * value: "te"
     * @const
     */
    "te": "te",
    /**
     * value: "th"
     * @const
     */
    "th": "th",
    /**
     * value: "tr"
     * @const
     */
    "tr": "tr",
    /**
     * value: "uk"
     * @const
     */
    "uk": "uk",
    /**
     * value: "ur"
     * @const
     */
    "ur": "ur",
    /**
     * value: "vi"
     * @const
     */
    "vi": "vi",
    /**
     * value: "zh"
     * @const
     */
    "zh": "zh",
    /**
     * value: "zh-Hant"
     * @const
     */
    "zh_hant": "zh-Hant"  };

  /**
   * Allowed values for the <code>license</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LicenseEnum = {
    /**
     * value: "commercial"
     * @const
     */
    "commercial": "commercial",
    /**
     * value: "editorial"
     * @const
     */
    "editorial": "editorial",
    /**
     * value: "enhanced"
     * @const
     */
    "enhanced": "enhanced"  };

  /**
   * Allowed values for the <code>orientation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrientationEnum = {
    /**
     * value: "horizontal"
     * @const
     */
    "horizontal": "horizontal",
    /**
     * value: "vertical"
     * @const
     */
    "vertical": "vertical"  };

  /**
   * Allowed values for the <code>people_age</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PeopleAgeEnum = {
    /**
     * value: "infants"
     * @const
     */
    "infants": "infants",
    /**
     * value: "children"
     * @const
     */
    "children": "children",
    /**
     * value: "teenagers"
     * @const
     */
    "teenagers": "teenagers",
    /**
     * value: "20s"
     * @const
     */
    "_20s": "20s",
    /**
     * value: "30s"
     * @const
     */
    "_30s": "30s",
    /**
     * value: "40s"
     * @const
     */
    "_40s": "40s",
    /**
     * value: "50s"
     * @const
     */
    "_50s": "50s",
    /**
     * value: "60s"
     * @const
     */
    "_60s": "60s",
    /**
     * value: "older"
     * @const
     */
    "older": "older"  };

  /**
   * Allowed values for the <code>people_ethnicity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PeopleEthnicityEnum = {
    /**
     * value: "african"
     * @const
     */
    "african": "african",
    /**
     * value: "african_american"
     * @const
     */
    "african_american": "african_american",
    /**
     * value: "black"
     * @const
     */
    "black": "black",
    /**
     * value: "brazilian"
     * @const
     */
    "brazilian": "brazilian",
    /**
     * value: "chinese"
     * @const
     */
    "chinese": "chinese",
    /**
     * value: "caucasian"
     * @const
     */
    "caucasian": "caucasian",
    /**
     * value: "east_asian"
     * @const
     */
    "east_asian": "east_asian",
    /**
     * value: "hispanic"
     * @const
     */
    "hispanic": "hispanic",
    /**
     * value: "japanese"
     * @const
     */
    "japanese": "japanese",
    /**
     * value: "middle_eastern"
     * @const
     */
    "middle_eastern": "middle_eastern",
    /**
     * value: "native_american"
     * @const
     */
    "native_american": "native_american",
    /**
     * value: "pacific_islander"
     * @const
     */
    "pacific_islander": "pacific_islander",
    /**
     * value: "south_asian"
     * @const
     */
    "south_asian": "south_asian",
    /**
     * value: "southeast_asian"
     * @const
     */
    "southeast_asian": "southeast_asian",
    /**
     * value: "other"
     * @const
     */
    "other": "other",
    /**
     * value: "NOT african"
     * @const
     */
    "not_african": "NOT african",
    /**
     * value: "NOT african_american"
     * @const
     */
    "not_african_american": "NOT african_american",
    /**
     * value: "NOT black"
     * @const
     */
    "not_black": "NOT black",
    /**
     * value: "NOT brazilian"
     * @const
     */
    "not_brazilian": "NOT brazilian",
    /**
     * value: "NOT chinese"
     * @const
     */
    "not_chinese": "NOT chinese",
    /**
     * value: "NOT caucasian"
     * @const
     */
    "not_caucasian": "NOT caucasian",
    /**
     * value: "NOT east_asian"
     * @const
     */
    "not_east_asian": "NOT east_asian",
    /**
     * value: "NOT hispanic"
     * @const
     */
    "not_hispanic": "NOT hispanic",
    /**
     * value: "NOT japanese"
     * @const
     */
    "not_japanese": "NOT japanese",
    /**
     * value: "NOT middle_eastern"
     * @const
     */
    "not_middle_eastern": "NOT middle_eastern",
    /**
     * value: "NOT native_american"
     * @const
     */
    "not_native_american": "NOT native_american",
    /**
     * value: "NOT pacific_islander"
     * @const
     */
    "not_pacific_islander": "NOT pacific_islander",
    /**
     * value: "NOT south_asian"
     * @const
     */
    "not_south_asian": "NOT south_asian",
    /**
     * value: "NOT southeast_asian"
     * @const
     */
    "not_southeast_asian": "NOT southeast_asian",
    /**
     * value: "NOT other"
     * @const
     */
    "not_other": "NOT other"  };

  /**
   * Allowed values for the <code>people_gender</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PeopleGenderEnum = {
    /**
     * value: "male"
     * @const
     */
    "male": "male",
    /**
     * value: "female"
     * @const
     */
    "female": "female",
    /**
     * value: "both"
     * @const
     */
    "both": "both"  };

  /**
   * Allowed values for the <code>sort</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SortEnum = {
    /**
     * value: "newest"
     * @const
     */
    "newest": "newest",
    /**
     * value: "popular"
     * @const
     */
    "popular": "popular",
    /**
     * value: "relevance"
     * @const
     */
    "relevance": "relevance",
    /**
     * value: "random"
     * @const
     */
    "random": "random"  };

  /**
   * Allowed values for the <code>view</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ViewEnum = {
    /**
     * value: "minimal"
     * @const
     */
    "minimal": "minimal",
    /**
     * value: "full"
     * @const
     */
    "full": "full"  };


  return exports;
}));


