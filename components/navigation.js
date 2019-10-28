import ScrollTo from 'react-scroll-into-view';

class Navigation extends React.Component {
  render() {
    const navList = ['photos', 'travel', 'RSVP', 'registry'];

    return (
      <nav className='nav'>
        <ul className='nav-list'>
          { navList.map(i => ( <li className='nav-list-item' key={i}><ScrollTo selector={`#${i}`}>{ i.charAt(0).toUpperCase() + i.slice(1) }</ScrollTo></li> ))}
        </ul>
        <style jsx global>{`
          .nav {
            width: 100%;
            z-index: 1;
          }

          .nav-list {
            display: flex;
            justify-content: space-around;
            padding: 0;
          }

          .nav-list-item {
            display: block;
            list-style: none;
            cursor: pointer;
            font-weight: 400;
            color: var(--color-coral);
          }

          @media (min-width: 992px) {

            .nav {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              min-height: 100px;
            }

            .nav-list {
              width: 400px;
            }

          }
        `}</style>
      </nav>
    )
  }

}

export default Navigation;
