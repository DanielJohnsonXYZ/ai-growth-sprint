export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname !== "humanapprovedai.com") {
    url.hostname = "humanapprovedai.com";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
