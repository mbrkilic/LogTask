import React, { useState } from "react";


const Login = () => {
  const [name, setName] = useState("");
  const [userMail, setMail] = useState("");
  const [userPass, setPassword] = useState("");
  

  

   async function handleSubmit(e) {
    const char = { name, userMail, userPass };
    e.preventDefault();

    console.warn(userMail,userPass);
    
   
     console.log(char)
        let result = await fetch( `https://627e267d271f386ceff254a2.mockapi.io/users/`, {
          method: "POST",
          headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"},
          body: JSON.stringify(char),
        })
        result = await result.json(); 
         console.log(result);
         if(char.userMail === result.userMail && char.userPass === result.userPass) {
            console.log('giriş basarılı');
             
         }else {
            console.log('Went wrong data!!!');
        }
  };

  return (
    <div className="container-fluid vh-100">
     
      <div className="rounded d-flex justify-content-center">
        <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
          <div className="text-center">
            <h3 className="text-primary">Giriş</h3>
          </div>
          <form>
            
            <div className="form-group mb-3">
              <label htmlFor="mailSection">E-mail: </label>
              <input
                type="mail"
                className="form-control form-control-lg mb-4 "
                id="mailSection"
                onChange={(e) => setMail(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="passwordSection">Şifre: </label>
              <input
                type="password"
                className="form-control form-control-lg mb-4"
                id="passwordSection"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="login"
                className="btn btn-primary btn-lg btn-block"
                onClick={handleSubmit}
              >
                Giriş
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
