export default  {
    appName: "ShohojPanel",
    appVersion: "2.0",
    apiHost: process.env.VUE_APP_API_URL,
    // apiHost:"http://localhost:8001/api/v2",
    apiToken: localStorage.getItem('token'),
    // apiPublicKey: "94jkbhjsd99lkla21wexakljha23jkxgh767",
    // requestTimeout: 10000
}
