module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd2299d793274609335a4a8ce4f4c6c58'),
  },
});
