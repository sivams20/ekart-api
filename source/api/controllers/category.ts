import Category from '../models/category';

const fetch_category = (req, res, next) => {
    Category.find()
        .select('name _id')
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export {fetch_category};
