import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { MongooseModule } from '@nestjs/mongoose';
import { About, AboutSchema } from './schemas/about.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: About.name, schema: AboutSchema,
    }]),
  ],
  controllers: [AboutController],
  providers: [
    AboutService,
  ],
  exports: [AboutService],
})
export class AboutModule {}
