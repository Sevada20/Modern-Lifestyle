import axios from "axios";
import type { PostI } from "./types";

export const getPosts = async (): Promise<PostI[]> => {
  try {
    const response = await axios.get(
      "https://cloud.codesupply.co/endpoint/react/data.json",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
