import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomeModalCondRen.module.css";
import axios from "axios";

import Students from "../components/ModalAssets/students.png";
import Teachers from "../components/ModalAssets/teachers.png";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function LoginSignUp() {
  // --------------------STATE ON PAGE--------------------
  const [loginSignUpBtn, setLoginSignUpBtn] = useState(true);

  // ---------------- API STATE ------------------
  const [loggedInUser, setLoggedInUser] = useState({});

  // ---------------- COND BTN STYLING ------------------
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);

  // --------------------PASSWORD REVEAL--------------------
  const [passwordShown, setPasswordShown] = useState(false);

  // -------------------- LOGGED IN HTML RESULT ON PAGE --------------------
  const studentLoginResultDiv = document.getElementById("loginResult");
  const teacherLoginResultDiv = document.getElementById("teacherLoginResult");

  // --------------------NAVIGATE AFTER LOGIN/SIGNUP--------------------
  const navigate = useNavigate();

  // -------------------- USER DATA INPUT --------------------
  function handleUserInput(e) {
    // console.log(e.target.value);
    setLoggedInUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  // -------------------- ****STUDENT**** LOGIN API --------------------
  const handleStudentLogin = (e) => {
    e.preventDefault();
    console.log(loggedInUser);

    axios
      .post(
        "http://localhost:4000/home/authentication/student/login",
        loggedInUser
      )
      .then((data) => {
        // alert("Login Successful");
        console.log("Success:", data);
        studentLoginResultDiv.innerHTML =
          '<span style="color: green">Login Successful....Please wait</span>';
        setTimeout(() => {
          navigate("/projectlibrary");
        }, 2000);
      })
      .catch((error) => {
        // alert("Please check Username or Password");
        console.error("Error:", error);
        studentLoginResultDiv.innerHTML =
          '<span style="color: red">Please check Username or Password</span>';
      });
  };

  // -------------------- ****STUDENT**** SIGN UP API --------------------
  const handleStudentSignUp = (e) => {
    e.preventDefault();
    console.log(loggedInUser);

    axios
      .post(
        "http://localhost:4000/home/authentication/student/signup",
        loggedInUser
      )
      .then((data) => {
        alert(
          "Account Successfully Created. Please login after page refreshes"
        );
        console.log("Success:", data);
        window.location.reload();
      })
      .catch((error) => {
        alert("Unable to create account. Please check credentials");
        console.error("Error:", error);
      });
  };
  // -------------------- !!TEACHER!! LOGIN API --------------------
  const handleTeacherLogin = (e) => {
    // e.preventDefault();
    console.log(loggedInUser);

    axios
      .post(
        "http://localhost:4000/home/authentication/teacher/login",
        loggedInUser
      )
      .then((data) => {
        // alert("Login Successful");
        console.log("Success:", data);
        teacherLoginResultDiv.innerHTML =
          '<span style="color: green">Login Successful....Please wait</span>';
        setTimeout(() => {
          navigate("/ProgressTracker");
        }, 2000);
      })
      .catch((error) => {
        // alert("Please check Username or Password");
        console.error("Error:", error);
        teacherLoginResultDiv.innerHTML =
          '<span style="color: red">Please check Username or Password</span>';
      });
  };
  // -------------------- !!TEACHER!! SIGNUP API --------------------
  const handleTeacherSignUp = () => {
    // e.preventDefault();
    console.log(loggedInUser);

    axios
      .post(
        "http://localhost:4000/home/authentication/teacher/signup",
        loggedInUser
      )
      .then((data) => {
        alert(
          "Account Successfully Created. Please login after page refreshes"
        );
        console.log("Success:", data);
        window.location.reload();
      })
      .catch((error) => {
        alert("Unable to create account. Please check credentials");
        console.error("Error:", error);
      });
  };

  // --------------------OnCLICK FUNCTIONS--------------------
  // -------------------- LOGIN BTN --------------------------
  const loginButtonOnClick = () => {
    setIsActive1(true);
    setIsActive2(false);
    setLoginSignUpBtn(true);
  };

  // -------------------- SIGN UP BTN ------------------------
  const signUpButtonOnClick = () => {
    setIsActive2(true);
    setIsActive1(false);
    setLoginSignUpBtn(false);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {/* --------------------STUDENTS LOGIN-------------------- */}
      <div class={styles.modalLeft}>
        <img
          className={styles.modalStudents}
          src={Students}
          alt="students"
        ></img>
        <h1 className={styles.modalStudentsTitle}>Students</h1>
        <h3 className={styles.inputLoginSignUp}>
          <button
            className={isActive1 ? styles.loginActiveOne : styles.default}
            // className={styles.defaultActive}
            onClick={loginButtonOnClick}
          >
            Log in
          </button>
          <button
            // className={styles.signActive}
            className={isActive2 ? styles.signUpActiveOne : styles.default}
            onClick={signUpButtonOnClick}
          >
            Sign Up
          </button>
        </h3>
        <div>
          {loginSignUpBtn ? (
            <>
              <div className={styles.loginForm}>
                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="text"
                    required="required"
                    name="email"
                    placeholder="Email Address"
                    autoComplete="off"
                    onChange={handleUserInput}
                  ></input>
                </div>

                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type={passwordShown ? "text" : "password"}
                    required="required"
                    name="password"
                    placeholder="Password"
                    onChange={handleUserInput}
                  ></input>
                  {passwordShown ? (
                    <FaEye
                      className={styles.eyeIcon}
                      onClick={togglePassword}
                    ></FaEye>
                  ) : (
                    <FaEyeSlash
                      className={styles.eyeIcon}
                      onClick={togglePassword}
                    ></FaEyeSlash>
                  )}
                  <div id="loginResult" className={styles.loginResult}></div>
                </div>
                <button
                  className={styles.inputLogin}
                  onClick={handleStudentLogin}
                >
                  Log in
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={styles.loginForm}>
                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="text"
                    required="required"
                    placeholder="Full Name"
                    name="fullName"
                    autoComplete="off"
                    onChange={handleUserInput}
                  ></input>
                </div>
                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="text"
                    required="required"
                    placeholder="Email Address"
                    name="email"
                    autoComplete="off"
                    onChange={handleUserInput}
                  ></input>
                </div>

                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="password"
                    required="required"
                    placeholder="Password"
                    name="password"
                    onChange={handleUserInput}
                  ></input>
                </div>
                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="password"
                    required="required"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={handleUserInput}
                  ></input>
                </div>

                <button
                  className={styles.inputSignUp}
                  onClick={handleStudentSignUp}
                >
                  Sign Up
                </button>
              </div>
              <div className={styles.signUpResult}></div>
            </>
          )}
        </div>
      </div>

      {/* --------------------TEACHERS LOGIN-------------------- */}

      <div class={styles.modalRight}>
        <img
          className={styles.modalTeachers}
          src={Teachers}
          alt="teachers"
        ></img>
        <h1 className={styles.modalTeachersTitle}>Teachers</h1>
        <h3 className={styles.inputLoginSignUp}>
          <button
            className={isActive1 ? styles.loginActiveOne : styles.default}
            // className={styles.defaultActive}
            onClick={loginButtonOnClick}
          >
            Log in
          </button>
          <button
            // className={styles.signActive}
            className={isActive2 ? styles.signUpActiveOne : styles.default}
            onClick={signUpButtonOnClick}
          >
            Sign Up
          </button>
        </h3>
        <div>
          {loginSignUpBtn ? (
            <>
              <div className={styles.loginForm}>
                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="text"
                    required="required"
                    name="email"
                    placeholder="Email Address"
                    autoComplete="off"
                    onChange={handleUserInput}
                  ></input>
                </div>

                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type={passwordShown ? "text" : "password"}
                    required="required"
                    name="password"
                    placeholder="Password"
                    onChange={handleUserInput}
                  ></input>
                  {passwordShown ? (
                    <FaEye
                      className={styles.eyeIcon}
                      onClick={togglePassword}
                    ></FaEye>
                  ) : (
                    <FaEyeSlash
                      className={styles.eyeIcon}
                      onClick={togglePassword}
                    ></FaEyeSlash>
                  )}
                  <div
                    id="teacherLoginResult"
                    className={styles.loginResult}
                  ></div>
                </div>
                <button
                  className={styles.inputLogin}
                  onClick={handleTeacherLogin}
                >
                  Log in
                </button>
              </div>
              <div id="loginResult"></div>
            </>
          ) : (
            <>
              <div className={styles.loginForm}>
                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="text"
                    required="required"
                    placeholder="Full Name"
                    name="fullName"
                    autoComplete="off"
                    onChange={handleUserInput}
                  ></input>
                </div>
                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="text"
                    required="required"
                    placeholder="Email Address"
                    name="email"
                    autoComplete="off"
                    onChange={handleUserInput}
                  ></input>
                </div>

                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="password"
                    required="required"
                    placeholder="Password"
                    name="password"
                    onChange={handleUserInput}
                  ></input>
                </div>
                <div className={styles.inputbox}>
                  <input
                    className={styles.inputClass}
                    type="password"
                    required="required"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={handleUserInput}
                  ></input>
                </div>

                <button
                  className={styles.inputSignUp}
                  onClick={handleTeacherSignUp}
                >
                  Sign Up
                </button>
              </div>
              <div className={styles.signUpResult}></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginSignUp;
