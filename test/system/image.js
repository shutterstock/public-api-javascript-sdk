const { expect } = require('chai');
const uuidv4 = require('uuid/v4');

const sstk = require('../../src');

sstk.setAccessToken(process.env.SSTK_API_KEY);

const imagesApi = new sstk.ImagesApi();

describe('images api', () => {
  it('should be able to search', () => {
    const params = {
      query: "New York",
      sort: "popular",
      orientation: "horizontal",
    };

    return imagesApi.searchImages(params)
        .then(function(res) {
          expect(res).to.have.keys(
            'data',
            'search_id',
            'total_count',
            'page',
            'per_page',
            'spellcheck_info',
          );
          expect(res.data).to.be.an('array');
          expect(res.data).to.not.be.empty;
        });
  });

  it('should be able to see image details', () => {
    const imageId = '1259378599';

    const params = {
      view: 'full',
    };

    return imagesApi.getImage(imageId, params)
      .then(function(res) {
        expect(res).to.have.keys(
          'contributor',
          'id',
          'media_type',
          'added_date',
          'aspect',
          'assets',
          'categories',
          'description',
          'has_model_release',
          'image_type',
          'is_adult',
          'is_illustration',
          'keywords',
        );
        expect(res.description).to.deep.equal('Happy New Year 2019. Chinese New Year. ' +
          'The year of the pig. Translation: Greetings from the golden pig.');
      });
  });

  it('should be able to rename my collection', () => {
    const collectionId = '183608726';

    const body = {
      name: `Collection ${uuidv4()}`,
    };

    return imagesApi.renameLightbox(collectionId, body)
      .then(function(res) {
        expect(res).to.be.null;
      });
  });

  it('should be able to view my collection', () => {
    const collectionId = '183608726';

    const uuidv4Regex = '[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$';

    return imagesApi.getLightbox(collectionId, {})
      .then(function(res) {
        expect(res.id).to.equal('183608726');
        expect(res.name).to.match(new RegExp(`^Collection ${uuidv4Regex}`, 'i'));
      });
  });

  it('should be able to get featured collections', () => {
    return imagesApi.getFeaturedLightboxList()
      .then(function(res) {
        expect(res).to.have.keys('data');
        expect(res.data).to.be.an('array');
        expect(res.data).to.not.be.empty;
      });
  });
});
