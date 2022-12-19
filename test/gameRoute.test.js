const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = require('chai')
const server = require('../app')

chai.use(chaiHttp);

describe('Server/DB integration tests on requests to "/game', () => {
      it('should make a sucessful post request to "/game" route', async () => {
          const res = await chai.request(server).post('/game').send();
          expect(res).to.have.status(200);
     });
})


 
