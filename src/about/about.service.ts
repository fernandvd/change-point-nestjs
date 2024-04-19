import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAboutDTO } from './dto/about.dto';
import { About } from './schemas/about.schema';


@Injectable()
export class AboutService {
  constructor(
    @InjectModel('About') private aboutModel: Model<About>,
  ) {}

  async create(createAboutDTO: CreateAboutDTO): Promise<any> {
    const createdCat = new this.aboutModel(createAboutDTO);
    return createdCat.save();
  }

  async findAll(): Promise<any> {
    return await this.aboutModel.find().exec();
  }

  async findById(id): Promise<About> {
    const customer = await this.aboutModel.findById(id).exec();
    return customer;
  }

  async find(req): Promise<any> {
    return await this.aboutModel.find(req).exec();
  }

  async update(id, createAboutDTO: CreateAboutDTO): Promise<any> {
    return await this.aboutModel.findByIdAndUpdate(id, createAboutDTO, {new: true});
  }

  async delete(id): Promise<any> {
    return await this.aboutModel.findByIdAndDelete(id).exec();
  }
}
