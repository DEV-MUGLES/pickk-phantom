import CrawlerController from './controllers/Crawl';

export const request = async (event, context, callback) => {
  const { url } = event.queryStringParameters;
  const items = await CrawlerController.request(url);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ data: items })
  });
};