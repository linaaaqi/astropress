export interface Site {
  title: string
  author: string
  url: string
  description: string
  shortDescription: string
}

export interface NavigationLink {
  name: string
  url: string
}

export const Settings = {
  GoogleAnalytics: {
    enable: false,
    id: 'G-TKQ4L3ZDSF',
  },

  comment: {
    // todo: should I use meta or process?
    // process reports an error when used locally,
    // and meta cannot retrieve environment variables in Cloudflare environment.
    // enable: !!(import.meta.env.COMMENT_ENABLE),
    enable: !!(process.env.COMMENT_ENABLE),

    // please visit https://giscus.app/ to learn how to configure it.
    // You can also check out this article: https://liruifengv.com/posts/add-comments-to-astro/.
    giscus: {
      repo: 'godruoyi/gblog',
      repoId: 'MDEwOlJlcG9zaXRvcnkxMjcyODI0NzA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOB5YtJs4CfZnX',
      darkThem: 'noborder_gray',
      lightThem: 'light',
    },
  },
}

interface Config {
  /**
   * The path to the project
   */
  path?: string;

  /**
   * the path of content
   */
  contentPath: string;

  site: Site;

  navs: NavigationLink[];

  comment: {
    enable: boolean
    giscus: {
      repo: string
      repoId: string
      category: string
      categoryId: string
      darkThem: string
      lightThem: string
    }
  }
}

function defineConfig (config: Config) {
  return config
}

export default defineConfig({
  contentPath: 'posts',
  site: {
    author: 'Astropress',
    url: 'https://godruoyi.com',
    title: 'Astropress',
    description: 'Godruoyi\'s personal blog, I enjoy the process of building something using any technology stack',
    shortDescription: '',
  },
  navs: [
    { name: 'Posts', url: '/posts' },
    { name: 'Category', url: '/categories' },
    { name: 'Timeline', url: '/timeline' },
    { name: 'About', url: '/posts/gblog' },
    { name: 'Github', url: 'https://github.com/linaaaqi' },
  ],
  comment: {
    // todo: should I use meta or process?
    // process reports an error when used locally,
    // and meta cannot retrieve environment variables in Cloudflare environment.
    // enable: !!(import.meta.env.COMMENT_ENABLE),
    enable: !!(process.env.COMMENT_ENABLE),

    // please visit https://giscus.app/ to learn how to configure it.
    // You can also check out this article: https://liruifengv.com/posts/add-comments-to-astro/.
    giscus: {
      repo: 'godruoyi/gblog',
      repoId: 'MDEwOlJlcG9zaXRvcnkxMjcyODI0NzA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOB5YtJs4CfZnX',
      darkThem: 'noborder_gray',
      lightThem: 'light',
    },
  }
})
