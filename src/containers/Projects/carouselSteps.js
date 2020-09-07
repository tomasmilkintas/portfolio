import images from "../../assets/images";

const carouselSteps = [
    {
        label: "Burger Builder",
        imgPath: images[0],
        website: "https://react-my-burger-app-660cf.firebaseapp.com/",
        github: "https://github.com/tomasmilkintas/burger-app",
        tech: "React JS / Redux / Firebase",
        bulletPointOne: "Order a burger",
        bulletPointTwo: "Review your order",
    },
    {
        label: "Picture MasterPiece",
        imgPath: images[1],
        website: "https://picture-masterpiece.netlify.app/",
        github: "https://github.com/tomasmilkintas/pictureRender",
        tech: "React / React-Canvas-Draw",
        bulletPointOne: "Draw / Doodle",
        bulletPointTwo: "Save & Export your drawing",
    },
    {
        label: "To-do List App",
        imgPath: images[2],
        website: "https://magical-list.netlify.app/",
        github: "https://github.com/tomasmilkintas/Todo-List-App",
        tech: "React / Firebase / Storybook / Styled Components",
        bulletPointOne: "User Authentication",
        bulletPointTwo: "Task Manipulation",
    },
    {
        label: "Serverless Notes Storing App",
        imgPath: images[3],
        website: "https://serverless-stack-app.netlify.app/",
        github: "https://github.com/tomasmilkintas/serverless-stack-client",
        tech: "React / Serverless / Stripe",
        bulletPointOne: "User Authentication",
        bulletPointTwo: "Buying storage space for notes",
    },
];

export default carouselSteps;
