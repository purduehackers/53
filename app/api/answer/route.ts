export async function POST(req: Request) {
  const acceptedAnswers = process.env.ACCEPTED_ANSWERS;
  const { answer } = await req.json();

  if (acceptedAnswers?.split(",").includes(`${answer}`.toLowerCase())) {
    return Response.json({ ok: true, answer, correct: true });
  } else {
    return Response.json({ ok: true, answer, correct: false });
  }
}
