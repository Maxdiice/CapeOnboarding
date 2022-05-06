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
import { ReactComponent as DV360 } from '../assets/360DV.svg';
import { ReactComponent as Facebook } from '../assets/Facebook.svg';
import { ReactComponent as GCM360 } from '../assets/gm360.svg';
import { ReactComponent as GoogleAds } from '../assets/google_ads.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as LinkedIN } from '../assets/LinkedIN.svg';
import { ReactComponent as Pinterest } from '../assets/Pinterest.svg';
import { ReactComponent as Snapchat } from '../assets/Snapchat.svg';
import { ReactComponent as TikTok } from '../assets/TikTok.svg';
import { ReactComponent as Twitter } from '../assets/Twitter.svg';
import { ReactComponent as YouTube } from '../assets/YouTube.svg';
import { ReactComponent as Meta } from '../assets/meta.svg';
import { ReactComponent as Question } from '../assets/question.svg';
import { ReactComponent as Briefcase } from '../assets/briefcase.svg';
import { ReactComponent as Car } from '../assets/car.svg';
import { ReactComponent as Coffee } from '../assets/coffee.svg';
import { ReactComponent as Desk } from '../assets/desk.svg';
import { ReactComponent as Display } from '../assets/display.svg';
import { ReactComponent as Drink } from '../assets/drink.svg';
import { ReactComponent as Ecommerce } from '../assets/ecommerce.svg';
import { ReactComponent as Gear } from '../assets/gear.svg';
import { ReactComponent as Globe } from '../assets/globe.svg';
import { ReactComponent as Grocery } from '../assets/grocery.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Sport } from '../assets/treadmill.svg';
import { ReactComponent as Internet } from '../assets/internet.svg';
import { ReactComponent as Lightning } from '../assets/lightning.svg';
import { ReactComponent as Megaphone } from '../assets/megaphone.svg';
import { ReactComponent as Paint } from '../assets/paint.svg';
import { ReactComponent as Pizza } from '../assets/pizza.svg';
import { ReactComponent as Profile } from '../assets/profile.svg';
import { ReactComponent as Plane } from '../assets/plane.svg';
import { ReactComponent as Realestate } from '../assets/realestate.svg';
import { ReactComponent as Scooter } from '../assets/scooter.svg';
import { ReactComponent as Shopping } from '../assets/shopping.svg';
import { ReactComponent as Socialmedia } from '../assets/socialmedia.svg';
import { ReactComponent as Star } from '../assets/star.svg';
import { ReactComponent as Target } from '../assets/target.svg';
import { ReactComponent as Text } from '../assets/text.svg';
import { ReactComponent as unknown } from '../assets/unknown.svg';
import { ReactComponent as Video } from '../assets/video.svg';
import { ReactComponent as Wok } from '../assets/wok.svg';
import { ReactComponent as Rocket } from '../assets/rocket.svg';
import { ReactComponent as Rockets } from '../assets/rockets.svg';
import { ReactComponent as Agency } from '../assets/agency.svg';
import { ReactComponent as Confetti } from '../assets/confetti.svg';

export default function getSVG(iconName) {
    switch (iconName) {
        case "confetti":
            return Confetti

        case "singleBrand":
            return Rocket

        case "multipleBrands":
            return Rockets

        case "agency":
            return Agency

        case "briefcase":
            return Briefcase

        case "automotive":
            return Car

        case "coffee":
            return Coffee

        case "display":
            return Display

        case "drink":
            return Drink

        case "ecommerce":
            return Ecommerce

        case "gear":
            return Gear

        case "travel":
            return Globe

        case "supermarket":
            return Grocery

        case "heart":
            return Heart

        case "telco":
            return Internet

        case "lightning":
            return Lightning

        case "megaphone":
            return Megaphone

        case "paint":
            return Paint

        case "foodBeverages":
            return Pizza

        case "plane":
            return Plane

        case "profile":
            return Profile

        case "realEstate":
            return Realestate
        case "delivery":
            return Scooter
        case "fashion":
            return Shopping
        case "socialmedia":
            return Socialmedia

        case "homeLifestyle":
            return Desk

        case "star":
            return Star

        case "target":
            return Target

        case "text":
            return Text

        case "unknown":
            return unknown

        case "video":
            return Video

        case "sport":
            return Sport

        case "wok":
            return Wok

        case "question":
            return Question

        case "DV360":
            return DV360

        case "Google Ads":
            return GoogleAds

        case "Campaign Manager 360":
            return GCM360

        case "Meta for Business":
            return Meta

        case "Facebook":
            return Facebook

        case "Instagram":
            return Instagram

        case "Snapchat":
            return Snapchat

        case "TikTok":
            return TikTok

        case "YouTube":
            return YouTube

        case "Twitter":
            return Twitter

        case "LinkedIN":
            return LinkedIN

        case "Pinterest":
            return Pinterest

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