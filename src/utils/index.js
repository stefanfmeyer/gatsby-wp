/**
 * Parses a menu item object and returns Gatsby-field URI.
 *
 * @param {object} menuItem a single menu item
 * @param wordPressUrl
 * @param blogURI
 */
export const CreateLocalLink = (menuItem, wordPressUrl, blogURI='blog/') => {
  const { url, connectedObject } = menuItem;

  if (url === '#') {
    return null;
  }
  /**
   * Always want to pull of our API URL.
   */
  let newUri = url.replace(wordPressUrl, '');

  /**
   * If it's a blog link, respect the users blogURI setting.
   */
  if (connectedObject && connectedObject.__typename === 'WPGraphQL_Post') {
    newUri = blogURI + newUri;
  }

  return newUri;
};

/* The GraphQL endpoint is serving us with absolute URLs to the WordPress instance. Therefore, we have to do some magic to workaround this and get relative URLs. */