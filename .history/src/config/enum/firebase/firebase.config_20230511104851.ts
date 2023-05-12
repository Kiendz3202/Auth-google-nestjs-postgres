import { registerAs } from '@nestjs/config';

export default registerAs('firebase', () => ({
  credential: {
    projectId: 'sonat-bi-hrm',
    clientEmail: 'kiennm@sonat.vn',
    privateKey: 'AIzaSyAS4eExfgNxX3dbzHLBpWW1hWENgADe2qY',
  },
  authDomain: 'sonat-bi-hrm.firebaseapp.com',
}));
