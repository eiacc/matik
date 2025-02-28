import { Link } from "react-router";
import GoogleBtn from "../components/GoogleBtn";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

function Signup() {
  const notify = (data: string) => {
    toast.error(data, { position: "bottom-right" });
  };

  return (
    <>
      <Helmet>
        <title>Matik User Signup</title>
        <meta name="description" content="matik user signup page" />
        <link rel="canonical" href="/signup" />
        <meta name="robots" content="noindex"/>
      </Helmet>

      <div className="min-h-screen text-black">
        <div className="grid lg:grid-cols-2 gap-8 p-8 max-w-screen">
          {/* form */}
          <div className="flex flex-col justify-center items-center">
            {/* <h1 className="text-center raleway-700 text-4xl">Signup</h1> */}
            <GoogleBtn type="up" callback={notify}/>

            <div className="pt-12">
              <p className="inter-400 text-md text-[#313957]">Already have an account? <Link to="/signin" className="text-blue-400">Sign in</Link></p>
            </div>
          </div>

          {/* image */}
          <div className="relative rounded-3xl overflow-hidden row-start-1 max-h-44 lg:max-h-full lg:col-start-2">
            <img src="/assets/img/login-art.png" alt="login art" />
          </div>
        </div>

        <ToastContainer/>
      </div>
    </>
  )
}

export default Signup;