import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <main className="card-content">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="card-image"
        />
        <h1 className="card-header">{props.Header}</h1>
        <p className="card-description">{props.Description}</p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  Description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Icon: '19725557-19fc-406f-91f9-9d5288b98e01',
  IconAlt: 'image',
  image_alt: 'image',
  Header: 'Patryk Ostern',
  image_src1: '/playground_assets/fotor_2023-3-30_22_35_1-200h.png',
  image_alt1: 'image',
}

Card.propTypes = {
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  Icon: PropTypes.string,
  IconAlt: PropTypes.string,
  image_alt: PropTypes.string,
  Header: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Card
