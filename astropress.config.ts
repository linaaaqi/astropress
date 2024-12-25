interface Config {
  /**
   * The name of the project
   */
  name: string;

  /**
   * The path to the project
   */
  path?: string;

  /**
   * the path of content
   */
  contentPath: string;
}

function defineConfig (config: Config) {
  return config
}

export default defineConfig({
  name: 'Astropress',
  contentPath: 'blog'
})