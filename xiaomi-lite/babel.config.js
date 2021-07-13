module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: "usage",
        corejs: 3,
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    ["import", { libraryName: "antd-mobile", style: "css" }]
  ]
}