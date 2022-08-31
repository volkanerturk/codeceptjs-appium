const { I, login } = inject();

module.exports = {
  userInfo: {
    email: "volkan@test.com",
    password: "123456"
  },

  locator: {
    inputEmail: "#com.loginmodule.learning:id/textInputEditTextEmail",
    inputPassword: "#com.loginmodule.learning:id/textInputEditTextPassword",
    loginBtn: "#com.loginmodule.learning:id/appCompatButtonLogin"
  },
}