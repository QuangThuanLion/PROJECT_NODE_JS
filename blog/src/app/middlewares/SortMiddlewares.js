module.exports = function SortMiddlewares(req, res, next) {

    res.locals._sort = {
        enabled: false,
        type: 'default',
        column: 'defalut',
    };

    if (req.query.hasOwnProperty('_sort')) {
        // res.locals._sort.enabled = true;
        // res.locals._sort.type = req.query.type;
        // res.locals._sort.column = req.query.column;

        //hop nhat 2 object lai ghi de len nhau
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }

    next();

}