import { connect } from "mongoose";

export const startConnection = async () => {
  try {
    const db = await connect("mongodb+srv://dbHelberthMaster:dbContraFree@cluster0.xw2wj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
