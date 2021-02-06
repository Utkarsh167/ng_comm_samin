export const environment = {
  production: true,
  // url: 'http://fleetsuperadmindev.appskeeper.com/fleet/api/v1/', // DEV URL
  // url: "http://104.211.178.214:7349/fleet/api/v1/", // PROD URL
  // url: 'http://fleetsuperadminqa.appskeeper.com/fleet/api/v1/', // QA URL
  url: "http://52.183.160.176:3000/fleet/api/v1/", // DEV URL

  //S3 config
  // config: {
  //   AWS_BUCKET: "your bucket",
  //   AWS_ACCESS_KEY: "your access key",
  //   AWS_SECRET_KEY: "your secret key",
  //   AWS_REGION: "your region"
  // },

  //azure configuration
  azureConfig: {
    sas: "?sp=racwdl&st=2020-02-21T06:32:25Z&se=2029-02-22T06:32:00Z&sv=2019-02-02&sr=c&sig=IBHAnWGzRATut3EJJ08wlXkMolwVQl6C6wtt6PowjqM%3D",
    storageAccount: "commutevstorage",
    containerName: "fleet-app"
  }
};
