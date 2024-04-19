import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AboutModule } from '../src/about/about.module';
import { AboutService } from '../src/about/about.service';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { About } from '../src/about/schemas/about.schema';

describe('AboutController', () => {
  let app: INestApplication;
  let aboutService: AboutService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ 
        AboutModule],
    })
      .overrideProvider(getModelToken(About.name))
      .useValue(jest.fn())
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    aboutService = moduleRef.get<AboutService>(AboutService);
    await app.init();
  });

  it('/about/all (GET)', () => {
    const data = [];
      jest.spyOn(aboutService, 'findAll').mockImplementation(() => 
        Promise.resolve(data as unknown as Promise<About[]>)
      );

    return request(app.getHttpServer())
      .get('/about/all')
      .expect(HttpStatus.OK)
      .expect(data);
  });

  it('/about (POST)', async () => {
    jest.spyOn(aboutService, 'create').mockImplementation((dto) => {
      return Promise.resolve(dto);
    });

    const data = {
      text: "title",
      description: "des"
    };

    return request(app.getHttpServer())
      .post('/about')
      .send(data)
      .expect(HttpStatus.CREATED, data)
  });

  it('/about (POST) --> 400 on validation error', async () => {
    jest.spyOn(aboutService, 'create').mockImplementation((dto) => {
      return Promise.resolve(dto);
    });

    const data = {
      text: null,
      description: "des"
    };

    return request(app.getHttpServer())
      .post('/about')
      .send(data)
      .expect(HttpStatus.BAD_REQUEST)
  });


  it('/about/:id (DELETE)', () => {
    const instance = {"id": "random-id",};
    jest.spyOn(aboutService, 'delete').mockResolvedValue({});
    return request(app.getHttpServer()).delete('/about/'+instance.id)
      .expect(HttpStatus.NO_CONTENT)

  });
})

