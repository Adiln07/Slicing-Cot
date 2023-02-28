import React from 'react'
import "../../style/main.css"
import Mail from "../../icon/email-hitam.png"
import Facebook from "../../icon/facebook-hitam.png"
import Twitter from "../../icon/twitter-hitam.png"
import Instagram from "../../icon/instagram-hitam.png"
import Berita from "../../icon/berita.jpg"
const Main = () => {
  return (
    <div>
        <div className='berita'>
            <div className='Rapat'>
                <h4>BERITA</h4>
                <h4> > </h4>
                <h4>Rapat Progress Pekerjaan dengan Tetra Tech</h4>
            </div>
            <hr id='satu'></hr>
            <div className='atas'>
              <h1>Rapat Progress Pekerjaan dengan Tetra <br></br> Tech</h1>
              <p>2 November 2022 &nbsp;&nbsp; | &nbsp; Admin CoT</p>
              <div className='logo'>
                <img src={Mail} />
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={Instagram} />
              </div>
              <hr id='dua'></hr>
              <div className='paragraf'>
                <img id='berita' src={Berita}/>
                <p>Ketua COT, Dr. ENG. Ir. Nasruddin Yunus, M.T. bersama dengan perwakilan Dinas Pemuda dan Olahraga Kota <br></br>Makassar.</p>
                <p id='paragraf'>
                Kamis, 22 September 2022 bertempat Hotel Mercure Makassar, Kepala Pusat Unggulan Teknologi Center of Technology (PUSLANTEK-CoT) Fakultas Teknik Universitas Hasanuddin, Dr. Eng. Ir. Nasruddin, ST, MT bersama tim peneliti melakukan pertemuan dengan pihak Tetra Tech Indonesia.
                </p>
                <p id='paragraf'>
                Pertemuan ini dimaksudkan dalam rangka pembahasan kegiatan yang dikerjasamakan oleh Tetra Tech Indonesia dengan PUSLANTEK-CoT.
                </p>
              </div>
            </div>
        </div>
        <div className='lainnya'>
          <h1>BERITA LAINNYA</h1>
          <hr id='satu'></hr>
          <div className='box__wrapper'>
            <div className='box'>
               <div className='box-title'>
                <h1>Rapat Progress Pekerjaan II dengan Badan Penanggulangan Bencana Daerah Kab. Luwu Utara</h1>
                <img src={Berita} />
               </div>
               <p>
               Senin, 26 September 2022 bertempat Kantor Dinas Pemuda dan Olahraga Kota Makassar, Kepala Pusat Unggulan Teknologi Center of Technology (PUSLANTEK-CoT) Fakultas Teknik Universitas Hasanuddin, Dr. Eng. Ir. Nasruddin, ST, MT bersama tim peneliti melakukan...
               </p>
            </div>
            <div className='box'>
               <div className='box-title'>
                <h1>Rapat Progress Pekerjaan II dengan Badan Penanggulangan Bencana Daerah Kab. Luwu Utara</h1>
                <img src={Berita} />
               </div>
               <p>
               Senin, 26 September 2022 bertempat Kantor Dinas Pemuda dan Olahraga Kota Makassar, Kepala Pusat Unggulan Teknologi Center of Technology (PUSLANTEK-CoT) Fakultas Teknik Universitas Hasanuddin, Dr. Eng. Ir. Nasruddin, ST, MT bersama tim peneliti melakukan...
               </p>
            </div>
            <div className='box'>
               <div className='box-title'>
                <h1>Rapat Progress Pekerjaan II dengan Badan Penanggulangan Bencana Daerah Kab. Luwu Utara</h1>
                <img src={Berita} />
               </div>
               <p>
               Senin, 26 September 2022 bertempat Kantor Dinas Pemuda dan Olahraga Kota Makassar, Kepala Pusat Unggulan Teknologi Center of Technology (PUSLANTEK-CoT) Fakultas Teknik Universitas Hasanuddin, Dr. Eng. Ir. Nasruddin, ST, MT bersama tim peneliti melakukan...
               </p>
            </div>
            <div className='box'>
               <div className='box-title'>
                <h1>Rapat Progress Pekerjaan II dengan Badan Penanggulangan Bencana Daerah Kab. Luwu Utara</h1>
                <img src={Berita} />
               </div>
               <p>
               Senin, 26 September 2022 bertempat Kantor Dinas Pemuda dan Olahraga Kota Makassar, Kepala Pusat Unggulan Teknologi Center of Technology (PUSLANTEK-CoT) Fakultas Teknik Universitas Hasanuddin, Dr. Eng. Ir. Nasruddin, ST, MT bersama tim peneliti melakukan...
               </p>
            </div>
            <div className='box'>
               <div className='box-title'>
                <h1>Rapat Progress Pekerjaan II dengan Badan Penanggulangan Bencana Daerah Kab. Luwu Utara</h1>
                <img src={Berita} />
               </div>
               <p>
               Senin, 26 September 2022 bertempat Kantor Dinas Pemuda dan Olahraga Kota Makassar, Kepala Pusat Unggulan Teknologi Center of Technology (PUSLANTEK-CoT) Fakultas Teknik Universitas Hasanuddin, Dr. Eng. Ir. Nasruddin, ST, MT bersama tim peneliti melakukan...
               </p>
            </div>
            <div className='box'>
               <div className='box-title'>
                <h1>Rapat Progress Pekerjaan II dengan Badan Penanggulangan Bencana Daerah Kab. Luwu Utara</h1>
                <img src={Berita} />
               </div>
               <p>
               Senin, 26 September 2022 bertempat Kantor Dinas Pemuda dan Olahraga Kota Makassar, Kepala Pusat Unggulan Teknologi Center of Technology (PUSLANTEK-CoT) Fakultas Teknik Universitas Hasanuddin, Dr. Eng. Ir. Nasruddin, ST, MT bersama tim peneliti melakukan...
               </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main