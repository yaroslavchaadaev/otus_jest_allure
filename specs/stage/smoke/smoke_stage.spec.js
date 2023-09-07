import supertest from 'supertest'
import { expect, it } from '@jest/globals'
import config from '../../../framework/config/config.js'
import user from '../../../helpers/user'

describe('Получение токена авторизации', () => {
  it('Получение токена авторизации для клиента компании Технопарк', async () => {
    const res = await user.login(config.stage.auth.credentials.technopark)

    reporter.startStep('Успешный запрос на получение токена авторизации')
    expect(res.status).toBe(200)
    reporter.endStep()
  })

  it('Получение токена авторизации для клиента компании BORK', async () => {
    const res = await user.login(config.stage.auth.credentials.bork)

    reporter.startStep('Успешный запрос на получение токена авторизации')
    expect(res.status).toBe(200)
    reporter.endStep()
  })
})

describe('Информационные операции', () => {
  it('Получение списка ТК', async () => {
    const token = await user.getAuthToken()

    const res = await supertest(config.stage.baseURL)
      .get('/transport-company')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)

    reporter.startStep('Успешный запрос на получение списка ТК')

    reporter.startStep('Статус-код – 200 ОК')

    expect(res.status).toBe(200)

    reporter.endStep()

    reporter.endStep()
  })
})
