const config = {
  stage: {
    baseURL: process.env.BASE_URL_STAGE,
    auth: {
      baseAuthURL: process.env.AUTH_BASE_URL_STAGE,
      credentials: {
        technopark: {
          client: process.env.AUTH_CLIENT_STAGE_TP,
          password: process.env.AUTH_PASS_STAGE_TP,
          subject: 'delivery'
        },
        bork: {
          client: process.env.AUTH_CLIENT_STAGE_BORK,
          password: process.env.AUTH_PASS_STAGE_BORK,
          subject: 'delivery'
        },
      }
    }
  }
}

export default config
