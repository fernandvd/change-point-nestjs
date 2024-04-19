import { Test, TestingModule } from '@nestjs/testing';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { getModelToken } from '@nestjs/mongoose';
import { About } from './schemas/about.schema';
import { AboutModule } from './about.module';

describe('AboutController', () => {
  let controller: AboutController;
  let aboutService: AboutService;
  const aboutMockService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AboutModule,
      ],
    }).overrideProvider(getModelToken(About.name))
      .useValue(aboutMockService)
      .compile();

    controller = module.get<AboutController>(AboutController);
    aboutService = module.get<AboutService>(AboutService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('about api', () => {
    it("must return a list of abouts", async () => {
      let allAbout = [
        {
          text: "about1",
          descripcion: "desc 1",
        }
      ];
      jest.spyOn(aboutService, 'findAll').mockImplementation(() => 
        Promise.resolve(allAbout as unknown as Promise<About[]>)
      );

      const results = await controller.findAll();

      expect(results).toHaveLength(allAbout.length);
      expect(aboutService.findAll).toHaveBeenCalledTimes(1);
    });

    it("update", async () => {
      jest.spyOn(aboutService, 'update').mockImplementation((id, dto: any) => {
        return Promise.resolve({
          id,
          ...dto,
        } as unknown as Promise<About>);
      });
      let dto = {
        text: "text mod",
        description: "des"
      }
      
      expect(await controller.update("1", dto)).toEqual({
        id: "1",
        ...dto,
      });

      expect(aboutService.update).toHaveBeenCalledTimes(1);
    })
  });

});
