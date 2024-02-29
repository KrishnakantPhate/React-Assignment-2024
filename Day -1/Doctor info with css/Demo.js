import './Demo.css'

function  Demo()
{

    let  uesrsArray =  [
        {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg",a:"neroseargeon","star":2},
        {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg",a:"Cardiologist","star":4},
        {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg",a:"Surgeon","star":3},
        {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg",a:"Surgeon","star":3},
        {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg",a:"Cardiologist","star":3},
        {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg",a:"neroseargeon","star":3},
        {"id":7,"email":"rles.morris@reqres.in","first_name":"hes","last_name":"Mo","avatar":"https://reqres.in/img/faces/5-image.jpg",a:"Cardiologist","star":3},
        {"id":8,"email":"tcey.ramos@reqres.in","first_name":"acey","last_name":"Ros","avatar":"https://reqres.in/img/faces/6-image.jpg",a:"neroseargeon","star":3}
        
        ];

        const generatestar = (star)=>{
            const stars=[];
            for(let i=0;i<star;i++){
                stars.push(<span key={i} className='star'>&#9733;</span>)
            }
            return stars;
        }

        let  resultsArray = uesrsArray.map((item, index) => 
        {
            return <div  className='card' key={index}>                       
                        <img src={item.avatar}   /> <br/>
                        <span>{item.first_name + " " + item.last_name}</span>  <br/>
                        <span className='span'>{item.a}</span> <br/>
                        <span className="email">{item.email}</span>  <br/>
                        {generatestar(item.star)}<br/>
                        <button type='submit' className='btn'>book appointment</button>
                    </div>;
        });


    return (
        <>
			 <h3 style={  {color:"red", padding:"5px", textAlign:"center"}  }>Doctors Details</h3>
             <hr/>


            {resultsArray}    

            
        </>
    );
}

export default Demo;