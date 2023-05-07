/**
 * Transform an array of data into a JSON object with specific properties
 * @param {Array} arr - The array of data to transform
 * @returns {Object} - The JSON object with transformed data
 */
export function transformData(arr) {
  let result = {};

  arr.forEach(([type, ...args]) => {
    switch (type) {
      case 'about':
        result[type] = { img: args[0], content: args[1] };
        break;
      case 'gallery':
        result[type] = args.map((img) => img);
        break;
      case 'reviews':
        result[type] = [];
        for (let i = 0; i < args.length; i += 3) {
          const [content, author, role] = args.slice(i, i + 3);
          result[type].push({ content, author, role });
        }
        break;
      case 'video':
        result[type] = {
          'thumbnail-mobile': args[0],
          'thumbnail-desktop': args[1],
          description: args[2],
          link: args[3],
        };
        break;
      case 'articles':
        result[type] = [];
        for (let i = 0; i < args.length; i += 4) {
          const [image, description, date, link] = args.slice(i, i + 4);
          result[type].push({ image, description, date, link });
        }
        break;
      case 'contact':
        result[type] = [];
        for (let i = 0; i < args.length; i += 5) {
          const [name, description, address, phone, email] = args.slice(i, i + 5);
          result[type].push({ name, description, address, phone, email });
        }
        break;
      default:
        break;
    }
  });

  return result;
}
