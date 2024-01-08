import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  // since by default this is private
  exports: [PowerService],
})
export class PowerModule {}
