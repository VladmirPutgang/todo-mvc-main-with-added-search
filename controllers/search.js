module.exports = {
    search: (req, res) => {
        // console.log(req)
        var search = req.query.search
        console.log(search)
        res.json(req.query)
    }
}