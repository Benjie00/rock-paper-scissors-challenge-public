const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = require('chai')
const server = require('../app')

chai.use(chaiHttp);

describe('Server integration tests on requests to "/result', () => {
     it('should make a sucessful post request to "/result" route', async () => {
          const res = await chai.request(server).post('/result').send();
          expect(res).to.have.status(200);
     });
});
