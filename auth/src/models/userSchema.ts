import mongoose from "mongoose";

// An interface taht describes the properties
// that are required to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

// an interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// an interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// use method build instead of new User for create new instance of User for apply typescript
userSchema.statics.build = (attrs: UserAttrs): UserDoc => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
