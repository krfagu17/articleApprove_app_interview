import jwt from 'jsonwebtoken';

// Generate a token
const tokenGenerator = (payload, secret, expiresIn) => {
    return jwt.sign(payload, secret, { expiresIn });
};

// Example usage
// const payload = { userId: 1234, username: 'john_doe' };
// const secret = 'your_secret_key';
// const expiresIn = '1h';

// const token = generateToken(payload, secret, expiresIn);
// console.log('Generated token:', token);

export default tokenGenerator;