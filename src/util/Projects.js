import BalancePic from "../images/balance.JPG";
import PwGeneratorPic from "../images/password.JPG";
import NoteTakerPic from "../images/notetaker.JPG";
import DTPic from "../images/dt1.JPG";
import Project2 from "../images/homemaint.JPG";
// import Hector from "https://github.com/HectorDiazJr";

const projects = [ 
    {
        //Dream Team Synthesizer
        id: 4,
        img: DTPic,
        name: "The Dream Team Synthesizer-Final Team Project",
        text: "This was our 3rd and final project. It was a privelege to work with Sarah DeMercurio Colin Mudie: (https://github.com/ColinMudie), Sarah DeMercurio: (https://github.com/sdemercurio) and Hector Diaz: (https://github.com/HectorDiazJr) ",
        deploy: "https://dt-01.herokuapp.com/"
    }, 
    {

    //project two
        id: 5,
        img: Project2,
        name: "Home Maintenance - Project Two",
        text: "This was our project 2. From what I hear, Project two tests the spirits of all who are involved including lots of late nights and heart palipatations.  I would like to thank the brave men who joined me in this endvour: Tea: (www.github.com/Teangelo1) , Robert: (www.github.com/robertsunde) and Steve: (www.github.com/SteveBecmpe)",
        deploy: "https://agile-gorge-53521.herokuapp.com/"
    },
    {
      
        id: 1,
        img: BalancePic,
        name: "Looking for Balance",
        text: "This was my first project. I had the priviledge of being in a group with Hector Diaz: (https://githu.com/HectorDiazJr) and Jarrel Boone: (https://github.com/JarellB4). It was a pleasure to work with them and learn from one another",
        deploy: "https://jarellb4.github.io/Looking-for-balance/"
    },
    {
        //password generator
        id: 2,
        img: PwGeneratorPic,
        name: "My Random Password Generator",
        text: "This was one of my first homework projects using JavaScript. It felt monumental to get this done. Little did I know what lied ahead.",
        deploy: "https://saraswifti.github.io/password-generator/"
    },
    {
        //notetakergit
        id: 3,
        img: NoteTakerPic,
        name: "Note Taker",
        text: "This was our first time using express.",
        deploy: " https://saraswifti.github.io/notekeeper/"
    },
   
   
]
export default projects;