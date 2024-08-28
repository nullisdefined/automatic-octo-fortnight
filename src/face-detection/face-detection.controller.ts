import { Controller, Post, Body, Get } from '@nestjs/common';

interface FaceData {
  x: number;
  y: number;
  width: number;
  height: number;
}

@Controller('face-detection')
export class FaceDetectionController {
  private latestFaceData: FaceData[] = [];

  @Post()
  receiveFaceData(@Body() data: { faces: FaceData[] }) {
    this.latestFaceData = data.faces;
    console.log('Received face data:', this.latestFaceData);
    return { status: 'success', receivedFaces: this.latestFaceData.length };
  }

  @Get()
  getLatestFaceData() {
    return { faces: this.latestFaceData };
  }
}
