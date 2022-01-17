const PROXY_CONFIG = [
  {
    context: [
      "/api/warehouses",
    ],
    target: "https://localhost:5001",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
