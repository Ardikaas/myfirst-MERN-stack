import Navbar from '../component/Navbar'
import Footer from '../component/Footer';
import Candidate from '../component/Candidate';
import img from '../component/assets/stock.png'

const Election = () => {
  const satu = 1;
  return (
    <div class="con-election">
      <Navbar/>
      <div class="election">
        <Candidate image={img} num={satu}/>
        <Candidate image={img} num={satu}/>
        <Candidate image={img} num={satu}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Election;