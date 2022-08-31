const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/volkan/Desktop/codeceptjs appium kurulum/login-test.apk',
      platform: 'Android',
      device: 'pixel_xl'
    }
  },
  include: {
    I:'./steps_file.js',
    loginPage:'./pages/loginPage.js'
  },
  name: 'codeceptjs appium kurulum'
}