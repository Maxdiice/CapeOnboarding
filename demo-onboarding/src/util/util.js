import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GiteIcon from '@mui/icons-material/Gite';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import WeekendIcon from '@mui/icons-material/Weekend';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StyleIcon from '@mui/icons-material/Style';
import CampaignIcon from '@mui/icons-material/Campaign';
import DevicesIcon from '@mui/icons-material/Devices';
import ShareIcon from '@mui/icons-material/Share';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

export default function getSVG(iconName) {
    switch (iconName) {
        case "RocketLaunchIcon":
            return RocketLaunchIcon

        case "DirectionsCarIcon":
            return DirectionsCarIcon

        case "TravelExploreIcon":
            return TravelExploreIcon

        case "GiteIcon":
            return GiteIcon

        case "FastfoodIcon":
            return FastfoodIcon

        case "WeekendIcon":
            return WeekendIcon

        case "SportsSoccerIcon":
            return SportsSoccerIcon

        case "LeakAddIcon":
            return LeakAddIcon

        case "ShoppingBagIcon":
            return ShoppingBagIcon

        case "DeliveryDiningIcon":
            return DeliveryDiningIcon

        case "LocalGroceryStoreIcon":
            return LocalGroceryStoreIcon

        case "StyleIcon":
            return StyleIcon

        case "CampaignIcon":
            return CampaignIcon

        case "DevicesIcon":
            return DevicesIcon

        case "ShareIcon":
            return ShareIcon

        case "MovieFilterIcon":
            return MovieFilterIcon

        default:
            return RocketLaunchIcon
    }
}