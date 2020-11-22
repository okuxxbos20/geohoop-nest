import { Module } from '@nestjs/common'
import { PrefecturesService } from './prefectures.service'
import { PrefecturesController } from './prefectures.controller'

@Module({
  providers: [PrefecturesService],
  controllers: [PrefecturesController],
})
export class PrefecturesModule {}
