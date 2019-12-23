import jwt from 'jsonwebtoken';

const secret = process.env.VUE_APP_SUPERSECRET;
const isTokenValid = token => jwt.verify(token, secret, (err) => {
  if (err) {
    return false;
  }
  return true;
});

const decodeToken = (token) => {
  const decoded = jwt.verify(token, secret);
  return decoded;
};
export { isTokenValid, decodeToken };
