import React,{useState} from 'react'

export default function About(props) {
 
  const [buttonStyle,setButtonStyle]=useState("Enable Dark Mode")

  const [btncolor,setBtncolor]=useState({
      color:'white',
      backgroundColor:'black',
      
  })
  const [myStyle,setMyStyle]= useState({
    color:'black',
    backgroundColor:'white',
    border:"1px solid black"
  });
  document.body.classList.add('bg-primary');
  const HandleTheme=()=>{
    if(myStyle.color=='black'){
      setMyStyle({
        color:'white',
        backgroundColor:'black',
        border:"1px solid white"
        
      })
      setButtonStyle("Enable Light Mode")
      setBtncolor({
        color:"black",
        backgroundColor:'white'
      })
      props.showAlert("Dark Mode Enabled!","success")
    }
    else{
      setMyStyle({
        color:'black',
        backgroundColor:'white',
        border:"1px solid black"
      })
      setButtonStyle("Enable Dark Mode")
      setBtncolor({
        color:"white",
        backgroundColor:'black'
      })
      props.showAlert("Dark Mode Enabled!","success")
    }
  }

  
  return (
    <div className="container my-3" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingThree">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <button type="button" style={btncolor} class="btn btn-dark my-5" onClick={HandleTheme}>{buttonStyle}</button>
    </div>
    </div>
  )
}

