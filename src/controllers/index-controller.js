class IndexController {
    index(req, res) {
        res.status(200).json({
            "msg": "Página Inicial"
        })
    }
}

// Export
export default new IndexController