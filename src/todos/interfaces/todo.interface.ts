import mongoose from "mongoose";
export interface Todo{
    id: number;
    done: boolean;
    title: string;
    description: string;
}

