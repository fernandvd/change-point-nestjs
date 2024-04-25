import { SetMetadata } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";


export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);


import * as fs from 'fs';

export async function removeFile(path: string): Promise<void> {
  console.log("path", path);
  if (path) {
  fs.unlink(path, (err => {}));
  }
}

import { diskStorage } from "multer";
import { extname } from "path";
export class CustomFileUploadInterceptor {
  static uploadFile(name: string, path: string) {
  return FileInterceptor(name, {
    storage: diskStorage({
      destination: `${__dirname}/../media/${path}`,
      filename: (req, file, cb) => {
          console.log("dirname",__dirname);
          const _name = Array(16)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join("");
          return cb(null, `${_name}${extname(file.originalname)}`);
        }
    })
  })
  }
}

