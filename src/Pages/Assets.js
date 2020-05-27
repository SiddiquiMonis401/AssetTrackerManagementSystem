import React from 'react';

//Components
import Divider from '../Components/Common/Divider'
import HOCNavAndSide from '../Components/Common/HOCForNavAndSideDrawer';
//styles 
import '../Styles/Assets.scss'
function Assets(props) {
    return (
        <div className="assets_page container-fluid">
            <div className="row">
                <div className="assets_header col-12 py-3 d-flex justify-content-between" >
                    <h1 className="my-auto">Assets Header</h1>
                    <div className="my-auto">
                        
                    <h6 className="mr-3 d-inline-block">Assets</h6>
                    <div className="d-inline-block mx-2">Home</div>
                    </div>

                </div>
                <Divider />
                <div className="col-12 container-fluid mt-4">
                    <div className="row">
                    <div className="assets_heading py-1 col-12 d-flex justify-content-between align-items-center">
                        <h6>S No</h6>
                        <h6>Asset Type</h6>
                        <h6>Options</h6>
                    </div>
                    <Divider />
                    {["Machines","Machines","Machines","Machines"].map(( index, items ) =>(
                        <div className="assets_list col-12 d-flex align-items-center justify-content-between py-4">
                         <div>00{items}</div>
                         <div>{index}</div>
                         <div>Assigned</div>

                        </div>
                    ))}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HOCNavAndSide(Assets);