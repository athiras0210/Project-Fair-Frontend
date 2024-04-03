import React from 'react';
import Swal from 'sweetalert2';

function Profile() {
  const updateUser = () => {
    Swal.fire({
      title: 'Success',
      text: 'User Detail Updated',
      icon: 'success',
      confirmButtonText: 'Back',
      width: '25%', // Adjust the width of the SweetAlert modal
    });
  };

  return (
    <div className="container">
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='text-center'>
            <h3 className='mt-5'>My Profile</h3>

            <div className="mb-3">
              <label htmlFor="fileInput">
                <img src="https://dev.hamiltonaquatics.ae/uploads/optionbuilder/857308-08-2023_1226pmRegister-icon.png" alt="" style={{ maxWidth: '200px' }} />
              </label>
              <input id="fileInput" type="file" style={{ display: 'none' }} />
            </div>

            <div className="text-center">
              <div className='mb-2'>
                <input type="text" placeholder='Name' className='form-control' style={{ width: '100%' }} />
              </div>

              <div className='mb-2'>
                <input type="text" placeholder='Github' className='form-control' style={{ width: '100%' }} />
              </div>

              <div className='mb-2'>
                <input type="text" placeholder='Live Link' className='form-control' style={{ width: '100%' }} />
              </div>

              <div>
                <button className='btn btn-dark mt-2' onClick={updateUser}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
