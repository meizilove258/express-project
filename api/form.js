module.exports = (req, res) => {
    res.status(200).json({
        code: 1,
        msg: 'success',
        entry: '你拿到数据啦~'
    })
}