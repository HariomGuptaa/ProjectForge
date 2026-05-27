import env from "dotenv";

env.config({
    path: "./.env",
});

console.log(process.env.name);

console.log("Hello Penguins!");
