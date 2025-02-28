type GoogleBtnPropType = {
  type: "in" | "up";
  callback?: (data: string) => void;
}

function GoogleBtn({ callback, type }: GoogleBtnPropType) {
  async function handleSign() {
    const endpoint =
      type === 'in' ?
        import.meta.env.SERVER_GATEWAY_GOOGLE_SIGNIN :
      type === 'up' ?
        import.meta.env.SERVER_GATEWAY_GOOGLE_SIGNUP : null;

    if (!endpoint && callback) {
      callback('enpoint is missing')
      return
    }

    if (callback) callback('succeed sign type -> ' + type)
  }

  return (
    <button onClick={handleSign} className="cursor-pointer flex items-center justify-center bg-[#F3F9FA] rounded-md gap-4 py-3 w-full max-w-96">
      <img src="/assets/img/google-icon.svg" alt="Google Icon" />
      <span className="inter-400">Sign {type} with Google</span>
    </button>
  )
}

export default GoogleBtn;