const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const { expect } = chai;

chai.use(chaiHttp);

describe('base route', () => {
  it('should return Express Server', async () => {
    const response = await chai.request(server).get('/').send();
    expect(response.status).to.be.equal(200);
    expect(response.text).to.be.equal('Express server');
  });
});
