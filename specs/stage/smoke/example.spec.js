import { expect, it } from '@jest/globals'

describe('Пример набора тестов', () => {
  it('Пример теста', () => {
    reporter.startStep('Начало первого шага')

    expect(1 + 1).toBe(2)

    reporter.endStep()

    reporter.startStep('Начало второго шага')

    expect(1 + 2).toBe(3)

    reporter.endStep()
  })
})
