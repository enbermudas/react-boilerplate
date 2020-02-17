module.exports = {
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
    '^.+\\.module\\.{css,sass,scss}$',
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
