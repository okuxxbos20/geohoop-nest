import { Test, TestingModule } from '@nestjs/testing'
import { PrefecturesController } from './prefectures.controller'

describe('PrefecturesController', () => {
  let controller: PrefecturesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrefecturesController],
    }).compile()

    controller = module.get<PrefecturesController>(PrefecturesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
