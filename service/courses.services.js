import Course from '../models/Course.js';

export async function getHomeCourses(query) {
    try {
        console.log(query);

        const filter = {};
        if (query.search) {
            filter.$text = { $search: `"${query.search}"` };
        }

        if (query.category) {
            filter.category = query.category;
        }

        if (Array.isArray(query['tags[]']) && query['tags[]'].length > 0) {
            filter.tags = { $in: query['tags[]'] };
        }

        console.log("ffffff", filter)

        let sort = { createdAt: -1 };

        if (query.sort === 'price_asc') {
            sort = { price: 1 };
        } else if (query.sort === 'price_desc') {
            sort = { price: -1 };
        } else if (query.sort === 'all') {
            sort
        }

        const courses = await Course.find(filter).sort(sort);

        console.log(courses.length)
        return {
            courses,
            success: true
        };
    } catch (error) {
        console.error('Something went wrong:', error);
        return {
            success: false,
            error: error.message || 'An error occurred'
        };
    }
}
