import jwt from 'jsonwebtoken';
import moment from 'moment';
import path from 'path';
import PropertiesReader from 'properties-reader';

const properties = PropertiesReader(path.resolve('voxnostra.properties'));

export const SALT_WORK_FACTOR = Number(properties.get('auth.SALT_WORK_FACTOR') || 10);

export const PWD_MAX_LOGIN_ATTEMPTS = Number(properties.get('PWD_MAX_LOGIN_ATTEMPTS') || 10);
export const PWD_LOCK_TIME = moment.duration({ minute: Number(properties.get('PWD_LOCK_TIME') || 5) });

export const PWD_RESET_TOKEN_EXP = moment.duration({ hours: Number(properties.get('PWD_RESET_TOKEN_EXP') || 5) });
export const JWT_SECRET = properties.get('JWT_SECRET') || 'XYZ';
export const JWT_ISSUER = properties.get('JWT_ISSUER') || 5;

export function verifyResetToken(
  token
) {
  return new Promise((resolve) => jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return resolve({ err, valid: false });
    }

    return resolve({ payload, valid: true });
  }));
}
