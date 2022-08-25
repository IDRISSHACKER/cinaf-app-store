import * as React from "react"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material"
import "./Login.scss"

function Login(){

    return (
      <div>
        <div className="login">
          <div className="login-head"></div>
          <div className="login-body">
            <TextField
              disabled={false}
              type="text"
              label="Email"
              placeholder=""
              variant="outlined"
              fullWidth
            />
            <TextField
              disabled={false}
              label="Password"
              placeholder=""
              type="password"
              variant="outlined"
              fullWidth
            />

            <Button
              color="primary"
              onClick={function () {
                console.log("hello")
              }}
              size="large"
              variant="contained"
              >
                Se connecter
            </Button>
          </div>
        </div>
      </div>
    );
}


export default Login
