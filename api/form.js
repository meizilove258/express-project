module.exports = (req, res) => {
    if (req.method === "OPTIONS") {
        res.status(204)
    } else {
        res.status(200).json({
            code: 1,
            msg: 'success',
            entry: '你拿到数据啦~'
        })
    }
}