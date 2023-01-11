import './App.css';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import SubMenu from './SubMenu';

export const SideData = [
  {
      title: 'Subjects',
      path: '/subjects',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
            title: 'Science',
            path: '/subjects/science',
            icon: <IoIcons.IoIosPaper />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,

            subNav2: [
                {
                    title: 'Physics',
                    path: '/subjects/physics',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Chemistry',
                    path: '/subjects/chemistry',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Biology',
                    path: '/subjects/biology',
                    icon: <IoIcons.IoIosPaper />,
                },
            ]
        },
        {
            title: 'Mathematics',
            path: '/subjects/mathematics',
            icon: <IoIcons.IoIosPaper />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
        },
          {
              title: 'English',
              path: '/subjects/english',
              icon: <IoIcons.IoIosPaper />,
          },
          {
              title: 'Nepali',
              path: '/subjects/nepali',
              icon: <IoIcons.IoIosPaper />,
          },
      ]
  },
  {
      title: 'Item 1',
      path: '/item1',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
            title: 'English',
            path: '/subjects/english',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Nepali',
            path: '/subjects/nepali',
            icon: <IoIcons.IoIosPaper />,
        },
      ]
  },
  {
      title: 'Item2',
      path: '/item2',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  },
]

function App() {
  return (
    <div>
    <h1>oooooo</h1>
    <nav className="nav-style">
        <div className="list-items">
                {SideData.map((item,index) => {
                    return <SubMenu item={item} key={index}/>;
                })}
        </div>
    </nav>
    </div>
  );
}

export default App;
