import type { IBookmark } from "@components/Bookmarks/Bookmark";
import axios from "axios";
import { CONFIG } from "./config";

export const getBookmarks = async () => {
	const { data } = await axios.get(`${CONFIG.STORAGE_URL}/bookmark/all`);

	return data.data as IBookmark[];
};
