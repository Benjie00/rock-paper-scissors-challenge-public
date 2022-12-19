const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = require('chai')
const server = require('../app')

chai.use(chaiHttp);

describe('Server integration tests on requests to "/', () => {
     it('should make a sucessful get request to "/" route', async () => {
          const res = await chai.request(server).get('/').send();
          expect(res).to.have.status(200);
     });
});


 
