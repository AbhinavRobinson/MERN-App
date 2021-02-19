import PostMessage from "../models/postMessage";

export const getPosts = async (req: any, res: any) => {
  const body = req.body;

  try {
    const postMessages = await PostMessage.find();

    console.log(body);
    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req: any, res: any) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
