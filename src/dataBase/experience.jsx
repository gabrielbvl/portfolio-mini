import { SiJira, SiFigma, SiTrello } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { BsFillKanbanFill } from "react-icons/bs";

export const experiencesData = [
    { id: "figma", name: "Figma", icon: <SiFigma />, level: "Utilizado em mais de 10 projetos." },
    { id: "jira", name: "Jira", icon: <SiJira />, level: "Utilizado em 2 projetos em equipe." },
    {
        id: "trello",
        name: "Trello",
        icon: <SiTrello />,
        level: "Utilizado em mais de 10 projetos em equipe.",
    },
    {
        id: "scrum",
        name: "Scrum",
        icon: <DiScrum />,
        level: "Utilizado em mais de 10 projetos em equipe.",
    },
    {
        id: "kanban",
        name: "Kanban",
        icon: <BsFillKanbanFill />,
        level: "Utilizado em mais de 15 projetos.",
    },
];
