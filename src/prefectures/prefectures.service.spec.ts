import { Test, TestingModule } from '@nestjs/testing'
import { PrefecturesService } from './prefectures.service'

describe('PrefecturesService', () => {
  let service: PrefecturesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrefecturesService],
    }).compile()

    service = module.get<PrefecturesService>(PrefecturesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
