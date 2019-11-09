import ScrollTo from 'react-scroll-into-view';

class Navigation extends React.Component {
  render() {
    const navList = ['photos', 'travel', 'registry', 'RSVP'];

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
            display: flex;
            align-items: center;
            justify-content: center;
            height: 60px;
          }

          .nav-list-item:nth-child(4) {
            background-color: var(--color-coral-light);
            border: 2px solid var(--color-coral-light);
            color: var(--color-white);
            text-rendering: optimizeLegibility;
            box-sizing: border-box;
            min-width: 120px;
            border-radius: 4px;
            position: relative;
            overflow: hidden;
          }

          .nav-list-item:nth-child(4):before,
          .nav-list-item:nth-child(4):after {
            background-color: var(--color-coral);
            content: '';
            position: absolute;
            z-index: -1;
          }

          .nav-list-item:nth-child(4):hover {
            border-color: var(--color-coral);
            cursor: pointer;
            z-index: 2;
          }

          .nav-list-item:nth-child(4):after {
            height: 100%;
            left: -55%;
            top: 0;
            transform: skew(50deg);
            transition-duration: 0.6s;
            transform-origin: top left;
            width: 0;
          }

          .nav-list-item:nth-child(4):hover:after {
            height: 100%;
            width: 155%;
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
