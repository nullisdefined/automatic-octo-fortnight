import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmotionModule } from './emotion/emotion.module';
import { FaceDetectionModule } from './face-detection/face-detection.module';

@Module({
  imports: [EmotionModule, FaceDetectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
