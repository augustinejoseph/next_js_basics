import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const req = await request.json();
  const newComment = {
    id: comments.length +1,
    comment: req.comment,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "Application/Json",
    },
    status: 201,
  });
}
