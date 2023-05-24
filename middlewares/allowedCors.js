const allowedCors = [
  'http://nazarov.student.nomoredomains.monster',
  'https://nazarov.student.nomoredomains.monster',
  'http://localhost:3000',
];

module.exports.corsOptions = {
  origin: allowedCors,
  optionSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
  credentials: true,
};
