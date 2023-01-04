import React, { useState } from 'react';

function SignUpUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/SignUpUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        console.log(data)
      });
      const config = {
        Username:  "worldtour.test.0@gmail.com",
        Password : "B732D525A8DAD9EE5AB0D9238C1142935C12",
        Host : "smtp.elasticemail.com",
        Port: 2525,
        To : email,
        From : "worldtour.test.0@gmail.com",
        Subject : "Confirmation d'inscription sur World Tour",
        Body : `Bienvenue sur World Tour ${name} !` 
      };
      if(window.Email){
        window.Email.send(config);
      }
  };


  return (
    <div className='app'>
    <span style={{textAlign:"center", marginBottom:"20px"}}><h2>Inscription</h2></span>
    
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br /><br />
      <label>
        Adresse mail :
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br /><br />
      <label>
        Mot de passe :
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br /><br />
      <button type="submit">Créer son compte</button>
    </form>
    {/* Affichage du message de confirmation */}
    {message && <p>{message}</p>}
    </div>
  );
}

export default SignUpUser;