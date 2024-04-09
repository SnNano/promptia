import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const posts = await Prompt.find({
      creator: params.id,
    }).populate("creator");
    return new Response(JSON.stringify(posts), { status: 201 });
  } catch (error) {
    return new Response("Failed to get Prompts", { status: 500 });
  }
};
