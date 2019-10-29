module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'bora_malhar',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
