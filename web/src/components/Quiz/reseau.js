import React, {useState, useEffect, Component} from 'react';
import '../../styles/mail/envoieMail.css';


import {
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';


function Reseau(props){
  const shareUrl = 'https://www.youtube.com';

  return (
    <><h1> Choisir le réseau que vous voulez postuler</h1>

    <FacebookShareButton
        url={shareUrl}
        value ={"hello"}
        quote ={"Voici votre résultat de test, Voulez vous share votre résultat à vos amis"}>
        <FacebookIcon size={40} round={true} />
    </FacebookShareButton>
    </>
  )
}
export default Reseau;
