const Candidate = (props) => {
  return(
    <div class="election-card">
      <h1>Kandidat {props.num}</h1>
      <img src={props.image} alt=""/>
      <button>Vote</button>
    </div>
  )
}

export default  Candidate;