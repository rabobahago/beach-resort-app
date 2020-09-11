import React from 'react'
import Titles from './Titles'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: 'free cocktail',
          info:
            'lorem Ipsum is just dummy text of the printing and types library for English computer typesetting languages',
        },
        {
          icon: <FaHiking />,
          title: 'Endless hiking',
          info:
            'lorem Ipsum is just dummy text of the printing and types library for English computer typesetting languages',
        },
        {
          icon: <FaShuttleVan />,
          title: 'free shuttle',
          info:
            'lorem Ipsum is just dummy text of the printing and types library for English computer typesetting languages',
        },
        {
          icon: <FaBeer />,
          title: 'strongest beer',
          info:
            'lorem Ipsum is just dummy text of the printing and types library for English computer typesetting languages',
        },
      ],
    }
  }
  render() {
    return (
      <section className="services">
        <Titles title="Services" />
        <div className="services-center">
          {this.state.services.map(({ icon, title, info }, index) => (
            <article key={index} className="services">
              <span>{icon}</span>
              <h6>{title}</h6>
              <p>{info}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }
}
export default Services
