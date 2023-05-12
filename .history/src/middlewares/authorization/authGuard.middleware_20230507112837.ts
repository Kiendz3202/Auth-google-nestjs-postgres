import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    // Extract the JWT token from the request headers or cookies
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5NDU2MzQ4LTcwYTctNGJmOC1hYTYxLThhZTE1MzE2ZDBkMSIsImdvb2dsZUlkIjoiMTE2MTA0NTY1MzUxODYyNTY2MzgwIiwiZW1haWwiOiJtYW5oa2llbjMyMDJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiS2nDqm4iLCJsYXN0TmFtZSI6Ik5ndXnhu4VuIE3huqFuaCIsImltYWdlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4YjViUlNueGY1a2ZtZjFpNE85bDc2ckVOdl9rb0dBdjBjS2o1MTU9czk2LWMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODM0MzM2MzgsImV4cCI6MTY4NjAyNTYzOH0.oZ37mGfim_GT7z3vAR0hPNHzWhhGY3R47-8HXJvIqyI'; // Extract the token from the request headers or cookies
    const decodedToken = this.jwtService.verify(token);
    // Check if the decoded token has the "admin" role
    const userRole = decodedToken.role; // Assuming the role is stored in the "role" field
    console.log(userRole);
    return userRole === 'admin';
    // return true;
  }
}
