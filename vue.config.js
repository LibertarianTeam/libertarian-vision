module.exports = {
  lintOnSave: false,
  outputDir: "production/dist",
  pwa: {
    name: "AncapSU",
    display: "standalone",
    themeColor: "#fc0",
    msTileColor: "#fc0",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#fc0",
    manifestOptions: {
      start_url: ".",
      short_name: "AncapSU",
      description: "Imposto é roubo e sonegar é legitima defesa.",
      background_color: "#000"
    }
  }
};
