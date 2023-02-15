module.exports = {
  title: `leewoobin.com`,
  description: `leewoobin`,
  language: `en`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://leewoobin.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `@leewoobin`,
    bio: {
      role: `Student`,
      description: ['Human Rights in North Korea', 'World Economics', 'History'],
      thumbnail: 'https://cdn.discordapp.com/attachments/940436037174444074/1075328839951069234/b06050858310c9ee1fe8933790a53a68-sticker.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/woobinn`, // `https://github.com/woobinn`,
      linkedIn: `https://linkedin.com/woobin-lee`, // `https://linkedin.com/woobin-lee`,
      email: `lee@leewoobin.com`, // `lee@leewoobin.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2017. 09 ~ ',
        activity: 'Vancouver, BC',
        links: {
        },
      },      
      {
        date: '2008 ~ 2017. 09',
        activity: 'Bangkok, Thailand',
        links: {
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================

    ],
  },
};
