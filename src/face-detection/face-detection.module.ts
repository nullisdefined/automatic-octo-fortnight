import { Module } from '@nestjs/common';
import { FaceDetectionService } from './face-detection.service';
import { FaceDetectionController } from './face-detection.controller';

@Module({
  controllers: [FaceDetectionController],
  providers: [FaceDetectionService],
})
export class FaceDetectionModule {}
