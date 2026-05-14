import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import Logo from '../../assets/Logo.png';
import LoginImage from '../../assets/login-image.png';
import { use, useState } from 'react';
// import { AuthContext } from '../../provider/AuthProvider';
import { FaRegEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthContext';

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    // console.log(e.target);
    setError('');
    setSuccess(false);

    const form = e.target;
    const name = form.name.value;

    // for name requirement
    if (name.length < 5) {
      setNameError('name should be more then 5 characters.');
      return;
    } else {
      setNameError('');
    }

    const photo = form.photo.value;

    const email = form.email.value;

    // for email requirement
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    const password = form.password.value;

    // const passwordRegex =
    //   /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
    // passwordRegex pattern example: ('ABCdef123+?*'); // true. but old regex vs code giving unnecessary escape alert

    // must need symbol
    // const passwordRegex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    // for password requirement
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    // passwordRegex pattern example: ('ABCdef123+?*'); // true
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    // console.log(name, photo, email, password);

    createUser(email, password)
      .then(result => {
        // Signed up
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch(error => {
            // An error occurred
            // ...
            console.log(error);
            setUser(user);
          });
        toast.success('Account create successfully', {
          theme: 'colored',
        });
        navigate(`${location?.state?.from ? location?.state?.from : '/'}`);
        // setTimeout(() => {
        // }, 2000);
        form.reset();
        setSuccess(true);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorCode);
        toast.error(errorMessage, {
          theme: 'colored',
        });
        // alert(errorMessage);
        // ..
      });
  };

  const handleGoogleSignIn = () => {
    setError('');
    setSuccess(false);
    // console.log('google button clicked');
    googleSignIn()
      .then(() => {
        setSuccess(true);
        toast.success('Login successfully', {
          theme: 'colored',
        });
        navigate(`${location?.state?.from ? location?.state?.from : '/'}`);
        // setTimeout(() => {
        // }, 2000);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        toast.error(errorMessage, {
          theme: 'colored',
        });
        // alert(errorMessage, errorCode);
      });
    // .then(result => {
    //   const user = result.user;
    //   console.log(user);
    // })
    // .catch(error => {
    //   const err = error;
    //   console.log(err);
    // });
  };

  const handleTogglePasswordShow = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-linear-to-br from-[#72CFE7]/30 via-[#fbc3f1]/20 to-[#fbe4c2] flex items-center justify-center min-h-screen px-4 py-40">
      <div className="max-w-11/12 w-full grid md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:flex justify-center">
          <img
            src={LoginImage}
            alt="finance illustration"
            className="w-105 rounded-2xl"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="max-w-md w-full mx-auto">
          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 w-20">
              <img src={Logo} alt="" />
            </div>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Join FinEase Today
          </h2>

          {/* FORM */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Name</span>
              </label>

              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered w-full focus:outline-none focus:border-[#3563E9]"
                required
              />
            </div>
            {nameError && (
              <p className="text-xs text-error mt-1 ml-1">{nameError}</p>
            )}
            {/* EMAIL */}
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Email Address</span>
              </label>

              <input
                name="email"
                type="email"
                placeholder="abc@gmail.com"
                className="input input-bordered w-full focus:outline-none focus:border-[#3563E9]"
                required
              />
              {emailError && (
                <p className={'text-xs text-error mt-1 ml-1'}>
                  Email is not valid
                </p>
              )}
            </div>
            {/* Photo URL */}
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Photo URL</span>
              </label>

              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full focus:outline-none focus:border-[#3563E9]"
                required
              />
            </div>
            {/* PASSWORD */}
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>

              <div className="relative">
                <input
                  name="password"
                  type={`${showPassword ? 'text' : 'password'}`}
                  placeholder="••••••••"
                  className="input input-bordered w-full focus:outline-none focus:border-[#3563E9]"
                  required
                />
                <button
                  className="p-2 cursor-pointer btn-xs absolute top-1 right-2"
                  onClick={handleTogglePasswordShow}
                >
                  {showPassword ? <FaRegEye /> : <LuEyeClosed />}
                </button>
              </div>

              {passwordError && (
                <p className={'text-xs text-error mt-1 ml-1'}>
                  Must have an Uppercase, Lowercase letter and Length must be at
                  least 6 character
                </p>
              )}
            </div>
            {error && (
              <p className="text-xs text-error">account create fail: {error}</p>
            )}
            {success && (
              <p className="text-success text-xs mt-1 ml-1">
                account create success
              </p>
            )}
            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="btn w-full bg-[#3563E9] hover:bg-[#2954d4] text-white border-none"
            >
              CREATE ACCOUNT
            </button>
            {/* DIVIDER */}
            <div className="divider text-gray-400 text-sm">OR</div>
            {/* GOOGLE BUTTON */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn btn-outline w-full border-[#3563E9] text-[#3563E9] hover:bg-[#3563E9] hover:text-white"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>
            {/* SIGNUP */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link
                state={location.state}
                to={'/auth/login'}
                className="text-[#3563E9] font-medium"
              >
                Login
              </Link>
            </p>

            {/* FOOTER TEXT */}
            {/* <p className="text-center text-xs text-gray-400 mt-4">
              🔒 Your data is encrypted and never shared without your consent.
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
