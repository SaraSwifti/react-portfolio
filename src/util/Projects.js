import BalancePic from "../images/balance.JPG";
import PwGeneratorPic from "../images/password.JPG";
import NoteTakerPic from "../images/notetaker.JPG";
import BurgerLogPic from "../images/burgerlogger.JPG";
import Project2 from "../images/homemaint.JPG";

const projects = [
    {
      
        id: 1,
        img: BalancePic,
        name: "Looking for Balance",
        text: "This was my first project. I had the priviledge of being in a group with Hector Diaz {https://github.com/HectorDiazJr} and Jarrel Boone {https://github.com/JarellB4}. It was a pleasure to work with them and learn from one another",
        deploy: "https://jarellb4.github.io/Looking-for-balance/"
    },
    {
        //password generator
        id: 2,
        img: PwGeneratorPic,
        name: "My Random Password Generator",
        text: "This was one my first homework projects. It feel monumental at first to get this done. Little did I know what lie ahead",
        deploy: "https://saraswifti.github.io/password-generator/"
    },
    {
        //notetaker
        id: 3,
        img: NoteTakerPic,
        name: "Note Taker",
        text: "This was our first time using express",
        deploy: " https://saraswifti.github.io/notekeeper/"
    },
    {
        //burger logger
        id: 4,
        img: BurgerLogPic,
        name: "My Bugger Logger",
        text: "It was an assignment! Not that I have time in my life to actually use something like this. ",
        deploy: "https://sarataylormyburggerlogger.herokuapp.com/"
    },
    {

    //project two
        id: 5,
        img: Project2,
        name: "Home Maintenance - Project Two",
        text: "This was our project 2. From what I hear, Project two tests the spirits of all who are involved including lots of late nights and heart palipatations.  I would like to thank the brave men who joined me in this endvour: Tea! {www.github.com/Teangelo1}, Bobert{www.github.com/robertsunde} and Stever {www.github.com/SteveBecmpe}",
        deploy: "https://agile-gorge-53521.herokuapp.com/"
    },
    {
        id: 5,
        img: "",
        name: "",
        text: "",
        deploy: ""
    }
]

export default projects;