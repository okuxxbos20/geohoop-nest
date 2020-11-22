import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersController } from './users/users.controller'
import { UsersService } from './users/users.service'
import { CourtsService } from './courts/courts.service'
import { CourtsController } from './courts/courts.controller'
import { UsersModule } from './users/users.module'
import { CourtsModule } from './courts/courts.module'
import { PrefecturesModule } from './prefectures/prefectures.module'

@Module({
  imports: [UsersModule, CourtsModule, PrefecturesModule],
  controllers: [AppController, UsersController, CourtsController],
  providers: [AppService, UsersService, CourtsService],
})
export class AppModule {}
