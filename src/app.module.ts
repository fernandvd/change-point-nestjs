import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ShopModule } from './shop/shop.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
   ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
   }),
   MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGO_URI', 'mongodb://localhost:27017/demoapp?')
    }),
    inject: [ConfigService],
   }),
    MulterModule.register({
      dest: './media',
    }),
    AboutModule,
    AuthModule,
    ProductModule,
    ShopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
