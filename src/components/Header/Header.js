import React from 'react'
import '../../style/header.css'
import Cot from '../../icon/cot.png'
import Indo from '../../icon/indo.png'
import Cari from '../../icon/search.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
          <div className='judul'>
            <img src={Cot} />
            <div className='cot'>
              <h1>Puslantek-cot</h1>
              <hr></hr>
              <h1>Universitas Hasanuddin</h1>
            </div>
          </div>
          <div className='search'>
              <img src={Indo} />
              <h2>IND</h2>
              <div className='cari'>
                <p>Search...</p>
                <img src={Cari}/>
              </div>
          </div>
        </div>
        <hr id='garis'></hr>
        <div className='navbar'>
            <a>Beranda</a>
            <a>Profil</a>
            <a>Divisi</a>
            <a>Proyek</a>
            <a>Sumber Daya</a>
            <a>Berita</a>
            <a>Buletin</a>
        </div>
    </div>
  )
}

export default Header