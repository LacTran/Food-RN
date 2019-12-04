import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer L7l_w6DMXya7dxJ_3TCbFIs82H8ObfpCJgWyhKur8gHnrBWtgqFn75bmTWRyZO53VdtdDUIUfSHqTYFXklJJtUW4owqzNJHboW8eaVErF3vujkhYKRv5rDzqy5neXXYx'
    }
});

