const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "serverless-stack-notes-app",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://dz124wz95j.execute-api.us-east-2.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_1oDJEaJr0",
      APP_CLIENT_ID: "28s4l09aiiv78fev6gg6j46k42",
      IDENTITY_POOL_ID: "us-east-2:e7149f78-37e9-4487-abb9-3df65f6c022e",
    },
  };
  
  export default config;