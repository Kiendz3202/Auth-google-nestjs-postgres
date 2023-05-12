import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from 'src/config/enum/user-role.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    // Extract the JWT token from the request headers or cookies
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    // Extract the token from the request headers or cookies
    const decodedToken = this.jwtService.verify(token);
    // Check if the decoded token has the "admin" role
    const userRole = decodedToken.role; // Assuming the role is stored in the "role" field

    return userRole === UserRole.ADMIN;
    // return true;
  }
}
