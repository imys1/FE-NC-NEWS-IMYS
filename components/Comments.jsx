import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../src/api";

export default function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState({});
}
