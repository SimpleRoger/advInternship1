import Modal from "@mui/material/Modal";

function AuthModal() {
  return (
    <>
      <Modal open={true}>
        <h2>Log in to Summarist</h2>
        <h3>Login as Guest</h3>
        <h3>or</h3>
        <h3>Login with Google</h3>
        <input />
        <input />
        <button>Login</button>
        <button>Forgot your password</button>
        <button>Don't have an account </button>
      </Modal>
    </>
  );
}

export default AuthModal;
