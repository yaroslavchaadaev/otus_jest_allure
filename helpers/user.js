import supertest from 'supertest'
import config from '../framework/config/config.js'

const { baseAuthURL } = config.stage.auth

let token = ''

const user = {
  login: payload => {
    return supertest(baseAuthURL)
      .post('/api/v1/token')
      .set('Accept', 'application/json')
      .send(payload)
  },

  async getAuthToken() {
    const payload = config.stage.auth.credentials.technopark
    const res = await this.login(payload)
    return res.body.token
  }
}

export default user
