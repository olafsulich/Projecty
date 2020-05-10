import { ReactComponent as TeamSVG } from '../assets/menu/Team.svg';
import { ReactComponent as AnnouncementsSVG } from '../assets/menu/Announcements.svg';
import { ReactComponent as StatisticsSVG } from '../assets/menu/Statistics.svg';
import { ReactComponent as BacklogSVG } from '../assets/menu/Backlog.svg';
import { ReactComponent as SprintsSVG } from '../assets/menu/Sprints.svg';

const menuItemsData = [
  {
    path: `team`,
    icon: TeamSVG,
    name: 'Team',
  },
  {
    path: `announcements`,
    icon: AnnouncementsSVG,
    name: 'Announcements',
  },
  {
    path: `statistics`,
    icon: StatisticsSVG,
    name: 'Statistics',
  },
  {
    path: `backlog`,
    icon: BacklogSVG,
    name: 'Backlog',
  },
  {
    path: `sprints`,
    icon: SprintsSVG,
    name: 'Sprints',
  },
];

export { menuItemsData };
