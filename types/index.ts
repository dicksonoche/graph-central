import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
}

export interface SearchProjectsProps {
    project: string;
    setProject: (project: string) => void;/* A function that takes in project as a string, returning nothing */
}
/* Interface specifies how a specific structure should look like. What variables and values it should have*/