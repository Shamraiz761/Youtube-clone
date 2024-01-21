import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import History from '@material-ui/icons/History';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const data = [
    {
        id: 1,
        title: 'Home',
        icon: <Home className='mr-3'/>,
    },
    {
        id: 2,
        title: 'Trending',
        icon: <TrendingUpIcon className='mr-3'/>,
    },
    {
        id: 3,
        title: 'Subscriptions',
        icon: <SubscriptionsIcon className='mr-3'/>,
    },
    {
        id: 4,
        title: 'Library',
        icon: <LibraryBooksIcon className='mr-3'/>,
    },
    {
        id: 5,
        title: 'History',
        icon: <History className='mr-3'/>,
    },
    {
        id: 6,
        title: 'Your Videos',
        icon: <VideoLibraryIcon className='mr-3'/>,
    },
    {
        id: 7,
        title: 'Watch Later',
        icon: <WatchLaterIcon className='mr-3'/>,
    },
    {
        id: 8,
        title: 'Liked Videos',
        icon: <ThumbUpIcon className='mr-3'/>,
    },
    {
        id: 9,
        title: 'Show more',
        icon: <ArrowDropDownIcon className='mr-3'/>,
    },
    
]

export default data;