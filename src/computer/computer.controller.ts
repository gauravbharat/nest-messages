import { Controller, Get } from '@nestjs/common';
import { CpuService } from './cpu/cpu.service';
import { DiskService } from './disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    return [
      `CPU Service compute: ${this.cpuService.compute(11, 11)}`,
      `Disk Service data: ${this.diskService.getData()}`,
    ];
  }
}
