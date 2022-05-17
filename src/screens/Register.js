import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [userMail, setMail] = useState("");
  const [userPass, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    const char = { name, userMail, userPass };
    e.preventDefault();
    console.warn(userMail,userPass);
    
   
     console.log(char)

    fetch("https://627e267d271f386ceff254a2.mockapi.io/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(char),
    }).then(() => {
      console.log(char.name + " kullanıcısı eklendi.");
    });

    navigate("/");
  };

  return (
    <div className="container-fluid vh-100">
     
      <div className="rounded d-flex justify-content-center">
        <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
          <div className="text-center">
            <h3 className="text-primary">Hesap Oluştur</h3>
          </div>
            {isLoggedIn ? (
               <>
               <h1>Kayıt Başarılı, {userMail}</h1>
               </>
             ): (
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="nameSection">Ad Soyad: </label>

              <input
                type="name"
                className="form-control form-control-lg mb-4"
                id="nameSection"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={onSubmit}
              >
                Kaydol
              </button>
              
            </div>
          </form>
          )}
        </div>
      </div>
    </div>

   
  );
};

export default Register;
