const { removePlugin, PLUGINS } = require('@vuepress/markdown')

module.exports = {
  base: "/regexone-cn/",

  title: "正则表达式",
  description: "正则表达式",
  

  themeConfig: {
    repo: "liuweitao111/regexone-cn",

    sidebar: [
      {
        title: "基础",
        children: [
          "/base/character_classes",
          "/base/character_ranges",
          "/base/quantifiers",
          "/base/assertions",
          "/base/groups",
          "/base/escape",
        ],
      },
      {
        title: "问题",
        // collapsable: false,
        children: [
          "/problem/matching_decimal_numbers",
          "/problem/matching_phone_numbers",
          "/problem/matching_emails",
          "/problem/matching_html",
          "/problem/matching_filenames",
          "/problem/trimming_whitespace",
          "/problem/extracting_log_data",
          "/problem/extracting_url_data",
          "/problem/others",
        ],
      }
    ],
  },

  chainMarkdown (config) {
    removePlugin(config, PLUGINS.EMOJI)
  },

  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    }
  }
};