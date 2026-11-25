const { expect } = require('chai');
const uuidv4 = require('uuid/v4');
const sstk = require('../../src');

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

describe('images api', function imagesApiSmokeTests() {
  this.timeout(30000);

  it('searches for images', async () => {
    const results = await imagesApi.searchImages({ query: 'New York', sort: 'popular', orientation: 'horizontal' });
    expect(results).to.include.all.keys('data', 'search_id', 'total_count', 'page', 'per_page', 'spellcheck_info');
    expect(results.data).to.be.an('array').that.is.not.empty;
  });

  it('gets image details', async () => {
    const imageId = '1259378599';
    const image = await imagesApi.getImage(imageId, { view: 'full' });
    expect(image.id).to.equal(imageId);
    expect(image).to.include.all.keys('description', 'assets', 'contributor');
  });

  it('renames and reads a new collection', async () => {
    const name = `SDK smoke ${uuidv4()}`;
    const { id } = await imagesApi.createImageCollection({ name });
    expect(id).to.be.a('string').that.is.not.empty;

    try {
      const renamed = `${name} renamed`;
      expect(await imagesApi.renameImageCollection(id, { name: renamed })).to.be.null;
      const collection = await imagesApi.getImageCollection(id);
      expect(collection.id).to.equal(id);
      expect(collection.name).to.equal(renamed);
    } finally {
      await imagesApi.deleteImageCollection(id);
    }
  });
});
