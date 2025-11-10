import React from 'react';

const PromoSection = () => {
    return (
        <div className='flex justify-around mt-10'>
            <div style={{
                position: 'relative',
                width: '350px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <img
                    src="https://i.ibb.co.com/fV7fGjJb/alt.png"
                    alt="Fresh Products"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
                <div className='text-left' style={{
                    position: 'absolute',
                    top: 20,
                    color: 'white',
                    display: 'flex ',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    textAlign: 'center'
                }}>
                    <h3 className='text-left text-black' style={{ marginBottom: '15px' }}>
                        Everyday Fresh & <br />
                        Clean with Our <br />
                        Products
                    </h3>
                    <button style={{
                        backgroundColor: '#4caf50',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '500'
                    }}>
                        Shop Now →
                    </button>
                </div>
            </div>


            <div style={{
                position: 'relative',
                width: '350px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <img
                    src="https://i.ibb.co.com/PJx2rCb/alt-2.png"
                    alt="Fresh Products"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
                <div className='text-left' style={{
                    position: 'absolute',
                    top: 20,
                    color: 'white',
                    display: 'flex ',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    textAlign: 'center'
                }}>
                    <h3 className='text-left text-black' style={{ marginBottom: '15px' }}>
                        Everyday Fresh & <br />
                        Clean with Our <br />
                        Products
                    </h3>
                    <button style={{
                        backgroundColor: '#4caf50',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '500'
                    }}>
                        Shop Now →
                    </button>
                </div>
            </div>

            <div style={{
                position: 'relative',
                width: '350px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <img
                    src="https://i.ibb.co.com/tPNGsBfw/alt-3.png"
                    alt="Fresh Products"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
                <div className='text-left' style={{
                    position: 'absolute',
                    top: 20,
                    color: 'white',
                    display: 'flex ',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    textAlign: 'center'
                }}>
                    <h3 className='text-left text-black' style={{ marginBottom: '15px' }}>
                        Everyday Fresh & <br />
                        Clean with Our <br />
                        Products
                    </h3>
                    <button style={{
                        backgroundColor: '#4caf50',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '500'
                    }}>
                        Shop Now →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromoSection;
