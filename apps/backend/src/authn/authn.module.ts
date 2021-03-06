import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {ConfigModule} from '../config/config.module';
import {TokenModule} from '../token/token.module';
import {UsersModule} from '../users/users.module';
import {AuthnController} from './authn.controller';
import {AuthnService} from './authn.service';
import {JwtStrategy} from './jwt.strategy';
import {LocalStrategy} from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule, TokenModule, ConfigModule],
  providers: [AuthnService, LocalStrategy, JwtStrategy],
  controllers: [AuthnController]
})
export class AuthnModule {}
