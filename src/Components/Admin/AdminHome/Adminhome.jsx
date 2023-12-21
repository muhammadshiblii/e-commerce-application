import React, { useEffect, useState } from 'react'
import './Adminhome.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import { HiSquaresPlus } from "react-icons/hi2";
import { BsAppIndicator } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

const AdminHome = () => {



    const navigate = useNavigate()
    const [msg, setMsg] = useState("")
    const [count,setCount]=useState(0)
    const value = JSON.parse(localStorage.getItem('admin_token'));
    const getName = async () => {
        const res = await axios.get("http://localhost:3005/wholewatch/home", {
            headers: { Authorization: `Bearer ${value}` },
        })
        setMsg(res.data.msg)
    }

    useEffect(() => {
        getName()
    }, [])



    const Logout = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            localStorage.clear();
            navigate("/Adminlogin")
        }
    }




    const [getEmp, setEmp] = useState([])
    const getEmployee = async () => {
        const res = await axios.get("http://localhost:3005/wholewatch/categorygetdata")
        setEmp(res.data)
    }

    useEffect(() => {
        getEmployee()
    })




    ////delete
    const deleteCategory = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this Category?");
     
        if (isConfirmed) {
        try {
        const res = await axios.delete(`http://localhost:3005/wholewatch/deletecategory/${id}`);
           console.log('Category deleted:', res.data);
           setTimeout(()=>{
               navigate("/adminhome");
           },1000);

          } catch (error) {
           console.error('Error deleting Category:', error);
          }
        } else {
        console.log('Deletion cancelled.');
        }
        setCount(count+1)
   }
     
     useEffect(()=>{
   },[count])


















    return (
        <div>
      <div className="navitem">
                <div className="maclogo">
                    <img src='/Realme-Logo.png' alt="" />

                </div>
                <div className="centernav">
                    <h4></h4>
                </div>

                <div className="serachbox" >
                    <h1><i className="fa fa-user" aria-hidden="true"><span>{msg}</span></i></h1>

                </div>





            </div>



            <div className="itemlist">
                <div className="item11">ENJOY MORE EXCLUSIVE BENEFITS </div>
                <div className="item1">NEW LAUNCH</div>
                <div className="item1">X-MAS SALE</div>
                <div className="item1">PHONE</div>
                <div className="item1">AUDIO</div>
                <div className="item1">TABLET & WEARABLE</div>
                <div className="item1">ACCESSORIES</div>
                <div className="item1">OFFER</div>
            </div>


            <div className="bottomline">

            </div>




           <div className="backandlogout">
           <div className="display-username">
                <span className='admin-home-btn-user'>Logout    
                    <button onClick={Logout}><TbLogout2 className='home-log-admi'/></button></span>
            </div>
            <div className="header-left">
                <Link to='/Adminlogin' className='back-btn'>BACK</Link>
            </div>
           </div>



            <div className='mainm'>


                <div className='bordertop'>
                    <div className='bordertop2'>
                        <img src="#" alt="" />
                    </div>
                </div>
                <div className='main1'>
                    <div className='borderleft'>




                        <div className='catogories'>
                        Categories
                        </div>




                        {getEmp.map((data, index) =>
                            <div key={index} className='catogoryname'>
                                <div className='categorynames-only'>
                                    {data.category_name}

                                </div>

                                <div onClick={() => deleteCategory(data._id)} className='delete-btn'>
                                    <MdDelete />
                                </div>
                                <div className='edit-btn'>
                                    <Link to={`/editcategory/${data._id}`} className='Linker-Admin'>
                                    
                                    <FaEdit />

                                    </Link>
                                </div>

                            </div>
                        )
                        }







                    </div>
                    <div className='main1content'>
                        <div className='main1content2'>

                            <Link to={'/Category'} className='link3'>
                                <div className='cardsm'>
                                    <div className='catogory'><HiSquaresPlus  /></div>
                                    <div>add  category</div>
                                </div>
                            </Link>
                            <Link to={'/products'} className='link3'>
                                <div className='cardsm'>
                                    <div className='products'><BsAppIndicator /></div>
                                    <div>add  products</div>
                                </div>
                            </Link>

                        </div>
                        <div className='main1contentborder1 '>

                        </div>

                    </div>


                </div>
            </div>













        </div>
    )
}

export default AdminHome
