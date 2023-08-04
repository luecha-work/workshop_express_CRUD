const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "sqp_003e9254126cb74a291c6674affcdbb71514745a",
    options: {
      "sonar.projectName": "workshop_express_CRUD",
      "sonar.projectDescription": "branch expansion system",
      "sonar.sources": "config,controllers,migrations,models,routes,app.js",
      "sonar.login": "admin",
      "sonar.password": "admin12345",
      "sonar.projectKey": "workshop_express",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.exclusions": "node_modules/**",
    },
  },
  () => process.exit()
);
