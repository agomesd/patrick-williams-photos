import { useState } from "react";
import styles from "../styles/pages/Auth.module.css";
import { FiMail, FiLock } from "react-icons/fi";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import useHooks from "../hooks/useHooks";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Auth = () => {
  const [{ email, password, confirmPassword }, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, signIn, createProfile } = useHooks();
  const router = useRouter();

  const handleChange = (e) => {
    const input = e.target;
    setFormData((prevState) => ({ ...prevState, [input.name]: input.value }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleAuthView = () => {
    setIsSignUp(!isSignUp);
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  const handleError = (error) => {
    setIsLoading(false);
    toast.error(error.message);
  };

  const handleSuccess = (message) => {
    if (message) toast.success(message);
    setIsLoading(false);
    setFormData({ email: "", password: "", confirmPassword: "" });
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowPassword(false);
    setShowConfirmPassword(false);

    if (isSignUp) {
      if (password !== confirmPassword) {
        const error = { message: "Passwords do not match." };
        return handleError(error);
      }

      try {
        const { user, error } = await signUp(email, password);
        if (error) return handleError(error);

        await createProfile(user.id, user.email);
        const message =
          "Please confirm registration via the link sent to your email.";
        handleSuccess(message);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    } else {
      try {
        const { user, error } = await signIn(email, password);
        if (error) return handleError(error);
        const message = `Logged in as ${user.email}.`;
        handleSuccess(message);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {isSignUp ? "User Sign Up" : "User Sign In"}
      </h2>
      <div className={styles.main}>
        <div className={styles.left}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              label="Email"
              placeholder='email'
            />
            <FiMail className={styles.inputIcon} size={"1.5rem"} />
            <input
              className={styles.input}
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              value={password}
              label="Password"
              placeholder='password'
            />
            <FiLock className={styles.inputIcon} size={"1.5rem"} />
            {!showPassword ? (
              <MdVisibilityOff
                onClick={handleShowPassword}
                className={styles.showPassword}
                size={"1.5rem"}
              />
            ) : (
              <MdVisibility
                onClick={handleShowPassword}
                className={styles.showPassword}
                size={"1.5rem"}
              />
            )}

            {isSignUp && (
              <>
                <input
                  className={styles.input}
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={handleChange}
                  value={confirmPassword}
                  label="Confirm Password"
                  placeholder='confirm password'
                />
                <FiLock className={styles.inputIcon} size={"1.5rem"} />
                {!showConfirmPassword ? (
                  <MdVisibilityOff
                    onClick={handleShowConfirmPassword}
                    className={styles.showPassword}
                    size={"1.5rem"}
                  />
                ) : (
                  <MdVisibility
                    onClick={handleShowConfirmPassword}
                    className={styles.showPassword}
                    size={"1.5rem"}
                  />
                )}
              </>
            )}
            <button className={styles.button} type="submit">
              {isLoading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>

        <div className={styles.right}>
          <div className={styles.google}>
            <h4>
              Or sign in with Google
              <button
                className={`${styles.button} ${styles.socialMedia}`}
                // onClick={googleSignIn()}
              >
                Google
              </button>
            </h4>
          </div>
          <p className={styles.forgot}>Forgot password?</p>
          {isSignUp ? (
            <h4>
              Already have an account?{" "}
              <span onClick={handleAuthView}>{"Sign In"}</span>
            </h4>
          ) : (
            <h4>
              Don't have an account?{" "}
              <span onClick={handleAuthView}>{"Sign Up"}</span>
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
