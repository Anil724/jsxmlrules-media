import logo from './logo.svg';
import './App.css';
import son from "./images/gokuultra.avif";
import vson from "./images/vegetaego.jpg";
import gson from "./images/gohanbeast.webp";
import goku from "./audio/srcgoku.mp3";
import vegeta from "./audio/srcvegeta.mp3";
import gohan from "./audio/srcgohan.mp3";
import san from "./video/srcgokuvideo.mp4";
import vsan from "./video/srcvegetavideo.mp4";
import gsan from "./video/srcgohanvideo.mp4";

function  App() {
  return (
    <div className="pp">
       <h1>Top 3 Characters In Dragon Ball Tournament Of Power</h1>
       <div class="dragonDiv">
       <h2>Goku</h2>
       <h3>Goku internet image,audio,video</h3>
       <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f94ce3fe-52b9-42d2-9e25-233acff0a171/dg1pkq3-b4b880fd-987d-44e5-b153-56afb2a3e961.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y5NGNlM2ZlLTUyYjktNDJkMi05ZTI1LTIzM2FjZmYwYTE3MVwvZGcxcGtxMy1iNGI4ODBmZC05ODdkLTQ0ZTUtYjE1My01NmFmYjJhM2U5NjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.e-92_wnnY0SZpfEISAgVQb-Q3_hWBPj3W6l2Q8UZO0k'></img>
       <hr></hr>
       <audio src="https://services.brninfotech.com/tws/media2/songs/Saaho/05 - Saaho Bang.mp3" controls></audio>
       <hr></hr>
       <video src='https://services.brninfotech.com/tws/media2/trailers/Sye Raa.mp4' controls></video>
       <hr></hr>
       <h3>Goku public image,audio,video</h3>
       <img src="./images/goku.jpg"></img>
       <hr></hr>
       <audio src="./audio/publicgoku.mp3" controls></audio>
       <hr></hr>
       <video src='./video/gokupublicvideo.mp4' controls></video>
       <hr></hr>
       <h3>Goku src image,audio,video</h3>
       <img src={son}></img>
       <hr></hr>
       <audio src={goku} controls></audio>
       <hr></hr>
       <video src={san} controls></video>
       <hr></hr>
       </div>
       <div class="dragonDiv">
       <h2>VEGETA</h2>
       <h3>Vegeta internet image,audio,video</h3>
       <img src='https://fwmedia.fandomwire.com/wp-content/uploads/2023/10/10091158/super-saiyan-2-vegeta.png'></img>
       <hr></hr>
       <audio src="https://services.brninfotech.com/tws/media2/songs/JERSEY/05 - Needa Padadhani.mp3" controls></audio>
       <hr></hr>
       <video src='https://services.brninfotech.com/tws/media2/trailers/Khaidi.mp4' controls></video>
       <hr></hr>
       <h3>Vegeta public image,audio,video</h3>
       <img src="./images/vegeta.jpg"></img>
       <hr></hr>
       <audio src="./audio/publicvegeta.mp3" controls></audio>
       <hr></hr>
       <video src='./video/vegetapublicvideo.mp4' controls></video>
       <hr></hr>
       <h3>Vegeta src image,audio,video</h3>
       <img src={vson}></img>
       <hr></hr>
       <audio src={vegeta} controls></audio>
       <hr></hr>
       <video src={vsan} controls></video>
       <hr></hr>
       </div>
       <div class="dragonDiv">
       <h2>Gohan</h2>
       <h3>Gohan internet image,audio,video</h3>
       <img src='https://i.pinimg.com/originals/9d/ef/3f/9def3f29cdf1beeaad854bbf221f6f24.jpg'></img>
       <hr></hr>
       <audio src="https://services.brninfotech.com/tws/media2/songs/SyeRaa/01 - Sye Raa.mp3" controls></audio>
       <hr></hr>
       <video src='https://services.brninfotech.com/tws/media2/trailers/AlaVaikuntapuramloo.mp4' controls></video>
       <hr></hr>
       <h3>Gohan public image,audio,video</h3>
       <img src="./images/gohan.webp"></img>
       <hr></hr>
       <audio src="./audio/publicgohan.mp3" controls></audio>
       <hr></hr>
       <video src='./video/gohanpublicvideo.mp4' controls></video>
       <hr></hr>
       <h3>Gohan src image,audio,video</h3>
       <img src={gson}></img>
       <hr></hr>
       <audio src={gohan} controls></audio>
       <hr></hr>
       <video src={gsan} controls></video>
       <hr></hr>
       </div>
       
    </div>
  );
}

export default App;
