module.exports = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Allow-Credentials', 'true')
    // if (req.method === "OPTIONS") {
    //     return res.status(204)
    // } else {
        return res.status(200).json({
            code: 1,
            msg: 'success',
            entry: '你拿到数据啦~'
        })
    // }
}