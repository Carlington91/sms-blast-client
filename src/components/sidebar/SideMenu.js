import SidebarOption from './SidebarOption';
import {
  RiFileList3Line,
  RiDashboardLine,
  RiMessage2Line,
  RiMailLine,
} from 'react-icons/ri';
import { BiMessageAdd, BiMessageDetail, BiUserPlus } from 'react-icons/bi';
import { TiGroup } from 'react-icons/ti';
import { HiClipboardList } from 'react-icons/hi';

const SideMenu = () => {
  return (
    <nav>
      <ul className='nav flex-column'>
        <SidebarOption
          label='Dashboard'
          to='/dashboard'
          Icon={RiDashboardLine}
        />

        <div className='mt-3'>
          <span className='sidebar-label'>Messages</span>
          <SidebarOption
            label='Create Message'
            to='/message/new'
            Icon={BiMessageAdd}
          />
          <SidebarOption
            label='View Message'
            to='/messages'
            Icon={BiMessageDetail}
          />
        </div>

        <div className='mt-3'>
          <span className='sidebar-label'>Groups & Sender ID</span>
          <SidebarOption label='Groups' to='/groups' Icon={TiGroup} />
          <SidebarOption
            label='Sender IDs'
            to='/sender-ids'
            Icon={HiClipboardList}
          />
        </div>

        <div className='mt-3'>
          <span className='sidebar-label'>Contacts</span>
          <SidebarOption
            label='New Contact'
            to='/contact/new'
            Icon={BiUserPlus}
          />
          <SidebarOption
            label='Contact List'
            to='/contacts'
            Icon={RiFileList3Line}
          />
        </div>

        <div className='mt-3'>
          <span className='sidebar-label'>Send Message</span>
          <SidebarOption
            label='Group Message'
            to='/group/message'
            Icon={RiMessage2Line}
          />
          <SidebarOption
            label='Quick Message'
            to='/quick-message'
            Icon={RiMailLine}
          />
        </div>
      </ul>
    </nav>
  );
};

export default SideMenu;
