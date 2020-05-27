import React,{useState} from 'react';
import * as yup from 'yup';

import HOCSIDEANDNAV from '../Components/Common/HOCForNavAndSideDrawer'
//components
import Toolbar from '../Components/Toolbar';
import SideDrawer from '../Components/SideDrawer/SideDrawer'
import Backdrop from '../Components/Backdrops/Backdrops'
import FormikFormBuilder from '../Components/Common/FormikFormBuilder'

//styles
import '../Styles/ProfilePage.scss'

//image import
import image from '../Assets/images.jpg'

function Profile({location}) {

  const [openDrawer, setOpenDrawer] = useState(false)
  const handleToggle = () => {
    setOpenDrawer(prevState => !prevState)
  }
  const formikProps = {
      initialValues:{
      name:'Muhmmad Monis Mazhar',
      location:'Krachi, Pakistan A-180 Block 17 FB area karachi',
      email:'monisms15@gmail.com',
      CompanyName:'MM Group of tech Gurus',
      },
      validationSchema:yup.object({
         name:yup.string().required('is req'),
         location:yup.string(),
         email:yup.string().email().required('red'),
         CompanyName:yup.string()
      }),
      onSubmit(value, {setSubmitting} ){
          console.log(value)
      }
  };
  const fieldProps = [{name:'name',type:"text"},{name:'location',type:"text"},{name:'email',type:"text"},{name:'CompanyName',type:"text"}]
  

    return (
        <div>
            <div className="profile_page mx-auto container-fluid">
                <div className="row profile_header">
                  <div className="col-6"><h1>Profile Page</h1></div>
                  <div className="col-6 d-flex justify-content-end" ><h1>Logo</h1></div>
                </div>
                <div className="row profile_displayer">
                    <div className="col-lg-3 profile_image_with_bio">
                        <img height={25} width={20} src={image} alt="" />
                        <div>
                            <h1>Muhammad Monis Mazhar</h1>
                            <h6>Email:<span>monisms15@gmail.com</span></h6>
                            <h6>Contact No:<span>03112016704</span></h6>
                            <h6>Location:<span>Karachi, Pakistan Shahrah -e- Pakistan</span></h6>

                        </div>
                    </div>
                    <div className="col-lg-8 d-flex  mt-5 ">
                     <FormikFormBuilder formikInitialProps={formikProps} fieldProps={fieldProps} buttonTitle="Save" />                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HOCSIDEANDNAV(Profile);