import "./form.scss";

export default function Form() {
  const hdlSubmit = (evt) => {
    evt.preventDefault();
    window.alert('you hit the submit btn');
  }

  return (
    <div className="form m-x-a bdrs-md">
      <div className="opts">← Back</div>
      <div className="form-wrapper m-x-a">
        <div className="form__head">
          <div className="title">
            <div className="title__sub">Start from free</div>
            <div className="title__main">Create an account</div>
          </div>
          <div className="entry">
            <div className="btn p-10 bdrs mr-1">
              <i className="f-icon">G</i> Sign up with Google
            </div>
            <div className="btn p-10 bdrs ml-1">
              <i className="f-icon">F</i> Sign up with Facebook
            </div>
          </div>
          <div className="cross-line">
            <span>Or use <span className="xs-hide">your</span> email for registration</span>
          </div>
        </div>

        <div className="form__body">
          <form onSubmit={hdlSubmit}>
            <div className="input-wrapper bdrs p-10">
              <input id="fname" className="input" type="text" placeholder=" " />
              <label htmlFor="fname" className="placeholder">
                First Name
              </label>
            </div>
            <div className="input-wrapper bdrs p-10">
              <input id="lname" className="input" type="text" placeholder=" " />
              <label htmlFor="lname" className="placeholder">
                Last Name
              </label>
            </div>
            <div className="input-wrapper bdrs p-10">
              <input
                id="email"
                className="input"
                type="email"
                placeholder=" "
              />
              <label htmlFor="email" className="placeholder">
                E-mail
              </label>
            </div>
            <div className="input-wrapper bdrs p-10">
              <input
                id="password"
                className="input"
                type="password"
                placeholder=" "
              />
              <label htmlFor="password" className="placeholder">
                Password
              </label>
              <div className="eye-icon"></div>
              <div className="txt-al">xxxx</div>
            </div>
            <div className="policy">
                <input type="checkbox" id="acceptTerms" className="hide" />
                <div className="tick"></div>
                <label htmlFor="acceptTerms">
                  <div className="policy__content">
                    By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.
                  </div>
                </label>
            </div>
            <div className="input-wrapper bdrs submit">
              <button className="btn p-10" type="submit">
                Create an Free Account !
              </button>
            </div>
          </form>
        </div>

        <div className="form__footer">
          Already have an account?
          <strong className="login">Log in</strong>
        </div>
      </div>
    </div>
  );
}
