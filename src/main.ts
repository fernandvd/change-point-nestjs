import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import * as path from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("API")
    .setDescription("Description of apis")
    .setVersion("1.0.0")
    .addTag("API")
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  app.useGlobalPipes(new ValidationPipe);  
  app.use('/media/', express.static(path.join(__dirname, '../media')));
  await app.listen(3000);
}
bootstrap();
