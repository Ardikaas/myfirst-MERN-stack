import Navbar from '../component/Navbar'
import Footer from '../component/Footer';
import Candidate from '../component/Candidate';
import img from '../component/assets/stock.png'

const Election = () => {
  const satu = 1;
  return (
    <div>
      <Navbar/>
      <div class="con-election">
        <div class="tit-election">
          <h1>
            Calon Ketua Himpunan
          </h1>
        </div>
        <div class="election">
          <Candidate image={img} num={satu}/>
          <Candidate image={img} num={satu}/>
          <Candidate image={img} num={satu}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Election;