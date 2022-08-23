/**
 * API endpoint as Nodejs serveless function.
 *
 * API routes can be dynamic just like regular pages.
 *
 * The API Route code will not be part of client bundle.
 *
 * We should **not** fetch an API Route
 * from _getStaticProps_ or _getStaticPaths_
 */
export default function handler(req, res) {
  res.status(200).json({
    text: 'hello world',
  })
}
