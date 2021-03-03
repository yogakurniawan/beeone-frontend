import { normalize, schema } from "normalizr";

const originalData = [{
  id: 'article_1',
  product: {
    name: "Godox",
    id: "godox1"
  },
  author: {
    name: "Yoga Kurniawan",
    id: "1"
  },
  comments: [
    {
      id: 'comment_1',
      commenter: {
        name: "Paul Simon",
        _id: "12"
      }
    }
  ]
}]

const tt = new schema.Entity('tts');
const user = new schema.Entity('users');
const article = new schema.Entity('articles', {
  author: user,
  product: user,
});

export const normalizedData = normalize(originalData, [user]);
