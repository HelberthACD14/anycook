import app from "./app";
import { startConnection } from "./database";

app.set("port", process.env.PORT || 3000);

startConnection();
app.listen(app.get("port"), () => {
  console.log("Server is running in port", app.get("port"));
});
