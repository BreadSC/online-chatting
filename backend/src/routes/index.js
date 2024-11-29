import userRouter from "./user.js";
function route(app){
    app.use("/api/users", userRouter);
}
export default route;