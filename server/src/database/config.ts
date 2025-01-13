import mongoose from "mongoose";

const connect = async () => {
  mongoose.set("strictQuery", true);

  let uri = (
    process.env.MONGO_URI_DEV
  ) as string;

  let res = await mongoose.connect(uri,{family:4});

  console.log(
    "🚀 ~ file: config.ts:17 ~ MongoDB connected ~ ",
    res.connection.host
  );
};

export default connect;
