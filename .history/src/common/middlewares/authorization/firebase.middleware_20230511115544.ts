import { Injectable, NestMiddleware } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { Request, Response } from 'express';
import { FirebaseService } from '../../../firebase/firebase.service';

@Injectable()
export class PreAuthMiddleware implements NestMiddleware {
  private auth: firebase.auth.Auth;

  constructor(private firebaseService: FirebaseService) {
    this.auth = firebaseService.getAuth();
  }
  //dfds
  use(req: Request, res: Response, next: () => void) {
    const token = req.headers.authorization;
    if (token != null && token != '') {
      this.auth
        .verifyIdToken(token.replace('Bearer ', ''))
        .then(async (decodedToken) => {
          //   req['user'] = {
          //     email: decodedToken.email,
          //     roles: decodedToken.roles || [],
          //     type: decodedToken.type,
          //   };
          //   next();
          console.log(decodedToken);
        })
        .catch(() => {
          //   PreAuthMiddleware.accessDenied(req.url, res);
          console.log('deny');
        });
    } else {
      //   PreAuthMiddleware.accessDenied(req.url, res);
      console.log('deny');
    }
  }

  //   private static accessDenied(url: string, res: Response) {
  //     res.status(403).json({
  //       statusCode: 403,
  //       timestamp: new Date().toISOString(),
  //       path: url,
  //       message: 'access denied',
  //     });
  //   }
}
