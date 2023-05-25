import { Module } from '@nestjs/common';
import { PrismaService } from '../common/database/database.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
