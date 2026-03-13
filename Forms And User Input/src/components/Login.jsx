import { useRef, useState } from "react";
export default function Login() {

  const [emailIsInValid, setEmailIsInValid] = useState(false);
  console.log("dsnsdfdnff");
  const email = useRef();
  const password = useRef();

  function handleSubmit(event){
    event.preventDefault();
     console.log("aaaaaaa");
    
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes('@');

    if(!emailIsValid) {
      setEmailIsInValid(true); //show error on submit
      return;
    }
    setEmailIsInValid(false);
    console.log("sending HTTP request...");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" 
            ref={email}
          />
          <div className="control-error">
            {emailIsInValid && <p>Please enter a valid email address.</p> }
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
