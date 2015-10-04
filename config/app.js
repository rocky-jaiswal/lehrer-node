var config = {
  development: {
    host: 'localhost',
    port: 3000,
    secretKey: 'so74565467rs3cr3t132189328213213n123123dasd12341239i0dsf'
  }
}

var env = process.env['NODE_ENV'] || 'development';
module.exports = config[env];
