// import React, { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip';

import data from "../githubusers.json";

const ShowUsers = () => {

  // if fetch the api through url

  // const [data, setdata] = useState([])

  // const getApi = async () => {
  //   const response = await fetch(Records);
  //   setdata(await response.json());
  // }

  // useEffect(() => {
  //   getApi();
  // }, [])

  return (
    <div className='ShowUsers_Div'>

      <div className="row mx-5">
        {/* card start */}

        {data.map((value, ind) => {
          const { id,login, avatar_url, html_url,followers_url,article,rating } = value;

          return (<div className="col-4 card_div g-5 d-flex" key={id}>

            <div className='left_section'>
              <div className='card_img'>
                <img className='img-fluid' src={avatar_url} alt="card_img"></img>
              </div>
            </div>

            <div className='rigth_section'>

              <div className="user_name align-item-center">
                <p>{login}</p>
              </div>

              <div className='third_section d-flex'>
                <div className='article mx-4'>
                  <p className='third_section_heading m-0'>Article</p>
                  <p className='third_section_body m-0'>{article}</p>
                </div>
                <div className='article mx-4'>
                  <p className='third_section_heading m-0'>Followers</p>
                  <p className='third_section_body m-0'>{followers_url}</p>
                </div>
                <div className='article mx-4'>
                  <p className='third_section_heading m-0'>Rating</p>
                  <p className='third_section_body m-0'>{rating}</p>
                </div>
              </div>

              <div className='fourth_section'>
                <Tooltip title="Go to profile">
                  <a href={html_url} target="_blank" rel="noreferrer noopener">
                    <button className='btn btn-primary'>
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>)
        })}

        {/* card end */}
      </div>
    </div>


  )
}

export default ShowUsers
