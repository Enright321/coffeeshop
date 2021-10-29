import React from 'react';
// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
  return (
    <>
      <section id='sec-1' className='py-3'>
        <div className='container px-1'>
          <div className='row'>
            <img src='./images/coffee_hero.png' alt='' className='px-1' />
            <div className='col px-1'>
              <h1 className='py-1 text-align' style={{ fontSize: '2rem' }}>
                Fresh Taste With Every Sip.
              </h1>
              <LinkContainer to='/shop'>
                <button className='btn'>visit shop</button>
              </LinkContainer>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-2'>
        <div className='container py-3 px-1'>
          <div id='about' className='pyy-3'>
            <h2 className='text-align'>About Us</h2>
            <div className='row'>
              <div className='card px-1'>
                <div className='p-1 pyy-3'>
                  <div className='row py-1'>
                    <h2 style={{ paddingRight: '.5rem' }}>Ingredients</h2>
                    <i
                      style={{ color: 'green' }}
                      className='fas fa-2x fa-seedling'
                    ></i>
                  </div>
                  <img src='./images/cup.jpg' alt='' />
                  <p className='text-align'>
                    <strong>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni sapiente veniam obcaecati a molestias impedit. Natus
                      quisquam neque quam, laborum modi voluptatum repudiandae
                      maxime quis dolore perferendis totam quibusdam nulla.
                    </strong>
                  </p>
                </div>
              </div>
              <div className='card px-1'>
                <div className='p-1 pyy-3'>
                  <div className='row py-1'>
                    <h2 style={{ paddingRight: '.5rem' }}>Coffee Beans</h2>
                    <i
                      style={{ color: '#5C4033' }}
                      className='fas fa-2x fa-mug-hot'
                    ></i>
                  </div>
                  <img src='./images/beans.jpg' alt='' />
                  <p className='text-align'>
                    <strong>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni sapiente veniam obcaecati a molestias impedit. Natus
                      quisquam neque quam, laborum modi voluptatum repudiandae
                      maxime quis dolore perferendis totam quibusdam nulla.
                    </strong>
                  </p>
                </div>
              </div>
              <div className='card px-1'>
                <div className='p-1 pyy-3'>
                  <div className='row py-1'>
                    <h2 style={{ paddingRight: '.5rem' }}>The Shop</h2>
                    <i
                      style={{ color: '#DEC20B' }}
                      className='fas fa-2x fa-key'
                    ></i>
                  </div>
                  <img src='./images/shop.jpg' alt='' />
                  <p className='text-align'>
                    <strong>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni sapiente veniam obcaecati a molestias impedit. Natus
                      quisquam neque quam, laborum modi voluptatum repudiandae
                      maxime quis dolore perferendis totam quibusdam nulla.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-3' className='pyy-3'>
        <div id='locations'>
          <h2 className='text-align pyy-3'>Locations</h2>
          <div className='row'>
            <div className='col' style={{ alignItems: 'flex-start' }}>
              <img src='./images/loc1.jpg' alt=''></img>
            </div>
            <div className='col'>
              <div className='row'>
                <h3>1111 Main Road</h3>
              </div>
              <div className='row'>
                <h5>333-333-3333</h5>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='row'>
                <h3>2222 North Lane</h3>
              </div>
              <div className='row'>
                <h5>000-000-0000</h5>
              </div>
            </div>
            <div className='col' style={{ alignItems: 'flex-end' }}>
              <img src='./images/loc2.jpg' alt=''></img>
            </div>
          </div>
          <div className='row'>
            <div className='col' style={{ alignItems: 'flex-start' }}>
              <img src='./images/loc1.jpg' alt=''></img>
            </div>
            <div className='col'>
              <div className='row'>
                <h3>3333 South Street</h3>
              </div>
              <div className='row'>
                <h5>888-888-8888</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-4'>
        <div className='container py-3 px-1'>
          <div id='about' className='pyy-3'>
            <h2 className='text-align'>Testimonials</h2>
            <div className='row'>
              <div className='card px-1'>
                <div className='p-1 pyy-3'>
                  <div className='row py-1'>
                    <h2 style={{ paddingRight: '.5rem' }}>Jane Doe</h2>
                  </div>
                  <img src='./images/person1.jpg' alt='' />
                  <p className='text-align'>
                    <i>
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni sapiente veniam obcaecati a molestias impedit. Natus
                      quisquam neque quam, laborum modi voluptatum repudiandae
                      maxime quis dolore perferendis totam quibusdam nulla."
                    </i>
                  </p>
                </div>
              </div>
              <div className='card px-1'>
                <div className='p-1 pyy-3'>
                  <div className='row py-1'>
                    <h2 style={{ paddingRight: '.5rem' }}>Jim Doe</h2>
                  </div>
                  <img src='./images/person2.jpg' alt='' />
                  <p className='text-align'>
                    <i>
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni sapiente veniam obcaecati a molestias impedit. Natus
                      quisquam neque quam, laborum modi voluptatum repudiandae
                      maxime quis dolore perferendis totam quibusdam nulla."
                    </i>
                  </p>
                </div>
              </div>
              <div className='card px-1'>
                <div className='p-1 pyy-3'>
                  <div className='row py-1'>
                    <h2 style={{ paddingRight: '.5rem' }}>John Doe</h2>
                  </div>
                  <img src='./images/person3.jpg' alt='' />
                  <p className='text-align'>
                    <i>
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni sapiente veniam obcaecati a molestias impedit. Natus
                      quisquam neque quam, laborum modi voluptatum repudiandae
                      maxime quis dolore perferendis totam quibusdam nulla."
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
