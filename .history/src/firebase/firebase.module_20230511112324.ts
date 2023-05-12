import { Module } from '@nestjs/common';
import { FirebaseModule } from '@nestjs/firebase';
import * as admin from 'firebase-admin';

@Module({
  imports: [
    FirebaseModule.forRoot({
      credential: admin.credential.cert('path/to/serviceAccountKey.json'), // Replace with the path to your downloaded JSON file
    }),
  ],
})
export class FirebaseConfigModule {}
