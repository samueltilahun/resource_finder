export default function handler(req, res) {
    if (req.method === 'GET') {
      const categories = [
        {
          id: "trending-now",
          name: "Trending Now",
          description: "Stay ahead of the curve...",
          // other fields
        },
        {
          id: "languages-communication",
          name: "Languages & Communication",
          // ...
        }
      ];
      res.status(200).json(categories);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  