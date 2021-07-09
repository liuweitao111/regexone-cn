const { removePlugin, PLUGINS } = require('@vuepress/markdown')

module.exports = {
  base: "/regexone-cn/",

  title: "正则表达式",
  description: "正则表达式",
  

  themeConfig: {
    repo: "liuweitao111/regexone-cn",

    sidebar: [
      {
        title: "元字符",
        children: [
          "/character/character_classes",
          "/character/quantifiers",
          "/character/assertions",
          "/character/character_ranges",
          "/character/groups",
        ],
      },
      {
        title: "其他",
        children: [
          "/others/greeding",
          "/others/escape",
        ]
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