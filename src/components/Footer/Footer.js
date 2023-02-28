import React from 'react'
import "../../style/footer.css"
import Cot from '../../icon/cot.png'
import Lok from "../../icon/lok-putih.png"
import Phone from "../../icon/phone-putih.png"
import Email from "../../icon/email-putih.png"
import Direction from "../../icon/arah-putih.png"
import Facebook from "../../icon/facebook-putih.png"
import Twitter from "../../icon/twitter-putih.png"
import Instagram from "../../icon/instagram-putih.png"
const Footer = () => {
  return (
    <div className='footer_wrapper'>
        <div className='footer_top'>
        <div className='footer_data'>
            <div className='footer_kontak'>
                <h3>Kontak</h3>
                <div className='contacs'>
                    <img src={Lok}/>
                    <p>Jl. Poros Malino Km. 6 Bontomarannu <br></br>92171 Gowa, South Sulawesi Indonesia</p>
                </div>
                <div className='contacs'>
                    <img src={Phone}/>
                    <p>+624 1158 6200</p>
                </div>
                <div className='contacs'>
                    <img src={Email}/>
                    <p>cot@unhas.ac.id</p>
                </div>
            </div>
            <div className='footer_links'>
                <h3>Links</h3>
                <div className='contacs'>
                    <img src={Direction}/>
                    <p>Universitas Hasanuddin</p>
                </div>
                <div className='contacs'>
                    <img src={Direction}/>
                    <p>Fakultas Teknik <br></br> Universitas Hasanuddin</p>
                </div>
            </div>
        </div>
        <div className='footer_logo'>
            <div className='judul_footer'>
                <img src={Cot} />
                <div className='text'>
                    <h1>Puslantek-cot</h1>
                    <hr></hr>
                    <h1>Universitas Hasanuddin</h1>
                </div>
            </div>  
            <div className='footer_sosmed'>
                <img src={Facebook}/>
                <img src={Twitter}/>
                <img src={Instagram}/>
            </div>
        </div>
        </div>
        <div className='footer_bottom'>
            <h3>Copyright @ 2022 PUSLANTEK-COT UNHAS</h3>
        </div>
    </div>
  )
}

export default Footer