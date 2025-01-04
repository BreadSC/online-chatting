//import userRouter from "./user.js";
import authRouter from "./auth.js";
import messageRouter from "./message.js";
import userRouter from "./user.js";

function route(app) {
  //app.use("/api/users", userRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/message", messageRouter);
  app.use("/api/user", userRouter);
}
export default route;
