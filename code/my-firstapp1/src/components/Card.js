import React from 'react'

const Card = () => {
  return (
    <>
    <div className="container my-3">
    <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card shadow p-1">
      <img src="https://images.unsplash.com/photo-1677847240822-a420f69cb98f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <a href="" className='btn btn-primary'>View Details</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1661913022485-f5931b1f4d56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <a href="" className='btn btn-primary'>View Details</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://unsplash.com/photos/PjVB8R9Jm-8" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <a href="" className='btn btn-primary'>View Details</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://unsplash.com/photos/Z_LQcnGO7sM" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <a href="" className='btn btn-primary'>View Details</a>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card