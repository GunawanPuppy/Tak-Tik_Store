import { z } from "zod";
import { getMongoClientInstance } from "../config/mongo";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "@/interface/user";

export type UserModelInput = Omit<UserModel, "_id">;
//zod validation
const userSchema = z.object({
  email: z
    .string({
      message: "Email must be string",
    })
    .email(),
  password: z
    .string({
      message: "Password must be string",
    })
    .min(5),
});

class UserModel {
  static async create(newUser: User) {
    //melakukan validasi zod
    userSchema.parse(newUser);
    
    const DB = await getMongoClientInstance()
    //check unique email
    const user = await DB.collection("users").findOne({
      email: newUser.email,
    });
    //jika email ditemukan maka
    if (user) {
      throw new Error("Email already exists");
    }
    const modifiedUser: UserModelInput = {
      ...newUser,
      password: bcrypt.hashSync(newUser.password),
    };
    const result = DB.collection("users").insertOne(modifiedUser);
    return result;
  }

  static async login(userLogin: User) {
    userSchema.parse(userLogin);
    const user = await DB.collection<User>("users").findOne({
      email: userLogin.email,
    });
    if (!user) {
      throw new Error("Invalid email / password");
    }

    const access_token = jwt.sign(
      {
        email: user.email,
        _id: user._id,
      },
      process.env.JWT_SECRET as string,
    );
    return access_token;
  }
}

export default UserModel;
