const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const singleClaimsData = {
    meta: {
        sync_status: 'COMPLETE'
    },
    data: [{
        "claim_type": "Compensation",
        "claim_status": "UNDER REVIEW",
        "filing_date": "08/13/2021",
        "evss_id": "600118851",
        "updated_date": "10/01/2021"
    }]
}

const multipleClaimsData = {
    meta: {
        sync_status: 'COMPLETE'
    },
    data: [{
        "claim_type": "Compensation",
        "claim_status": "UNDER REVIEW",
        "filing_date": "08/13/2021",
        "evss_id": "600118851",
        "updated_date": "10/01/2021",
        "va_representative": "JESSE BROWN"
    },
    {
        "claim_type": "Compensation",
        "claim_status": "UNDER REVIEW",
        "filing_date": "07/21/2021",
        "evss_id": "600118850",
        "updated_date": "08/25/2021",
        "va_representative": "AMERICAN LEGION"
    },
    {
        "claim_type": "Compensation",
        "claim_status": "UNDER REVIEW",
        "filing_date": "04/04/2021",
        "evss_id": "600118849",
        "updated_date": "04/04/2021",
        "va_representative": "GUY PERSON"
    },
    ]
}

app.get('/', (req, res) => {
    res.send('Hello Node World!')
})

app.get('/claims', (request, response) => {
    //res.send('Hello Claims API!')

    var userId = request.headers['userid'];

    if (userId == 500) {
        response.status(500).send({ error: 'Claims api error' });
    }

    else if (userId == 404) {
        response.status(404).send({ error: "User Id not found" });
    }

    else if (userId == 204) {

    }

    else if (userId == 200) {
        response.status(200).send(multipleClaimsData);
    }

    else {
        response.status(200).send(singleClaimsData);
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})