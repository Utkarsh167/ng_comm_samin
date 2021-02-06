// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // url: 'http://fleetsuperadmindev.appskeeper.com/fleet/api/v1/',
  url: 'http://localhost:7300/fleet/api/v1/',

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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
