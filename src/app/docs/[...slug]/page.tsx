export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return <h1>Viewing Docs for {slug[0]} and {slug[1]}</h1>;
}
