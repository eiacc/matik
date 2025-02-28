import { Link } from "react-router";
import GoogleBtn from "../components/GoogleBtn";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";

function Signin() {
  const GoogleBtnResponse = (data: string) => {
    toast.error(data, {
      position: "bottom-right"
    })
  }

  return (
    <>
      <Helmet>
        <title>Matik User Signin</title>
        <meta name="description" content="matik user signin page" />
        <link rel="canonical" href="/signin" />
        <meta name="robots" content="noindex"/>
      </Helmet>

      <div className="min-h-screen text-black">
        <div className="grid lg:grid-cols-2 gap-8 p-8 max-w-screen">
          {/* form */}
          <div className="flex flex-col justify-center items-center">
            {/* <h1 className="text-center raleway-700 text-4xl">Signup</h1> */}
            <GoogleBtn type="in" callback={GoogleBtnResponse} />

            <div className="pt-12">
              <p className="inter-400 text-md text-[#313957]">Don't have an account? <Link to="/signup" className="text-blue-400">Sign up</Link></p>
            </div>
          </div>

          {/* image */}
          <div className="relative rounded-3xl overflow-hidden row-start-1 max-h-44 lg:max-h-full lg:col-start-2">
            <img src="/assets/img/login-art.png" alt="login art" />
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  )
}

export default Signin;