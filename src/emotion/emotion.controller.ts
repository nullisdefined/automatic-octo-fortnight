import { Controller } from '@nestjs/common';
import { EmotionService } from './emotion.service';
import { Post, Get, Body } from '@nestjs/common';

@Controller('emotion')
export class EmotionController {
  constructor(private readonly emotionService: EmotionService) {}

  private latestEmotion: string = 'Neutral';

  @Post()
  receiveEmotion(@Body() data: { emotion: string }) {
    this.latestEmotion = data.emotion;
    console.log('Received emotion:', this.latestEmotion);
    return { status: 'success', receivedEmotion: this.latestEmotion };
  }

  @Get()
  getLatestEmotion() {
    return { emotion: this.latestEmotion };
  }
}
