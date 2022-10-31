// @ts-nocheck
import * as React from "react"
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, CardActions } from "@mui/material"
import { ToastContainer, toast } from "react-toastify";
import log from "./log.svg"
import "./Login.scss"
import Page from "../../components/Page";
import paths from "../../const/path";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login(){

const [load, setLoad] = React.useState(false)
const [loged, setLoget] = React.useState(false)
const [email, setEmail] = React.useState("")
const [password, setPassword] = React.useState("")

const navigate = useNavigate()

const notify = () =>
  toast.success(
    "Connexion reusis !",
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );

  const notifyErr = () =>
    toast.error(
      "Utilisateur ou mot de passe incorect :-)",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );


  const handleSubmit = (event:any)=>{
    setLoad(true);
    event.preventDefault()
    
    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)

    axios.post(paths.api_url+"/login", formData)
    .then((res:any) => {
      setEmail("")
      setPassword("")
       setLoad(false);
       setLoget(true)
       console.log(res.data.token);
       notify()
       localStorage.setItem("token", res.data.token);

       const timer = setTimeout(() => {
        clearTimeout(timer)
        navigate("/admin")
       }, 600);
    })
    .catch(err => {
      setLoad(false);
      console.log(err)
      notifyErr()
    })
  }

    return (
      <Page title="Connexion">
        <div
          className="loginPage"
          style={{ background: `url(${log}) no-repeat` }}
        >
          <div className="loginArea">
            <div className="loginLogo">
              <img src="favicon.ico" />
            </div>
            <Card className="login">
              <CardContent className="login-content">
                <div className="login-head">
                  <h1 className="loginTitle">Connexion</h1>
                  <p className="loginSubtitle">
                    Cette page de connexion est reservé à l'admin !
                  </p>
                </div>
                <form className="login-body" onSubmit={handleSubmit} method="post" action="#">
                  <TextField
                    disabled={false}
                    type="text"
                    label="Email"
                    placeholder=""
                    variant="outlined"
                    fullWidth={true}
                    className="field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    disabled={false}
                    label="Password"
                    placeholder=""
                    type="password"
                    variant="outlined"
                    className="field"
                    fullWidth={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {!loged ? <Button
                    type="submit"
                    color="primary"
                    onClick={function () {
                      console.log("hello");
                    }}
                    size="large"
                    variant="contained"
                    disabled = {load}
                  >
                    {load ? <span>Connexion en cour...</span> : <span>Se connecter</span>}
                  </Button> : <p className="p">Vous aller être rediriger dans un instant</p> }
                </form>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>
        </div>
      </Page>
    );
}


export default Login
