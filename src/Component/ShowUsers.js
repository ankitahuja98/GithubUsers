import React from 'react'

const ShowUsers = () => {
  return (
    <div className='ShowUsers_Div'>

      <div className="row mx-5">
        {/* card start */}
        <div className="col-4 card_div g-5 d-flex ">

          <div className='card_img'>
            <img className='img-fluid' src="https://avatars.githubusercontent.com/u/1?v=4" alt="card_img"></img>
          </div>

          <div className="user_name align-item-center">
            <p> Ankit Ahuja</p>
          </div>
 
        </div>
        {/* card end */}




      </div>

    </div>


  )
}

export default ShowUsers
