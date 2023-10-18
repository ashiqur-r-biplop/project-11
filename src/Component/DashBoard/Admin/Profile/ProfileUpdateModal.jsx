// import React from 'react';

const ProfileUpdateModal = () => {
    return (
        <div>
            {/* The button to open modal */}
           
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-2xl text-blue-500 text-center font-bold">Update Profile!</h3>




                    
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default ProfileUpdateModal;