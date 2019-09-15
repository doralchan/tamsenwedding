import ScrollTo from 'react-scroll-into-view';

class Navigation extends React.Component {
  render() {
    const navList = ['photos','registry', 'travel', 'RSVP'];

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
            color: var(--color-green-medium);
          }

          @media (min-width: 992px) {
            .nav {
              position: absolute;
              right: 0;
              top: 80px;
              width: auto;
            }
            .nav-list {
              flex-direction: column;
              text-align: right;
            }
          }
        `}</style>
      </nav>
    )
  }

}

export default Navigation;
