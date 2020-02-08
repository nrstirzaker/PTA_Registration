process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app/server.js');
let should = chai.should();

chai.use(chaiHttp);
describe('/GET book', () => {
    it('it should GET all the books', (done) => {
          chai.request(server)
          .get('/api/member?searchEmail=nrstirzaker@gmail.com')
          .end((err, res) => {
                console.log(res.body);
                res.should.have.status(200);
                res.body.should.have.property('id').to.exist;
            done();
          });
    });
});

describe('/GET book', () => {
    it('it should GET all the books', (done) => {
          chai.request(server)
          .get('/api/member?searchEmail=nrstirzaer@gmail.com')
          .end((err, res) => {
                console.log(res.body);
                res.should.have.status(200);
                res.body.should.have.property('error').to.exist;
            done();
          });
    });
});