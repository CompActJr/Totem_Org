// In this file you can configure migrate-mongo

const config = {
  mongodb: {
    url: process.env.MONGO_URL,
    options: {}
  },

  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  lockCollectionName: 'changelog_lock',
  lockTtl: 0,
  migrationFileExtension: '.js',
  useFileHash: false,
  moduleSystem: "esm"
};

export default config;