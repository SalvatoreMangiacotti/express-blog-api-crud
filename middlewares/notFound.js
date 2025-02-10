const notFound = (req, res, next) => {

    res.status(404);

    res.json({

        error: "Not Found",
        
        message: "La pagina che stai cercando di raggiungere non è stata trovata"

    })

}

module.exports = notFound;