const Customers = require("../models/customersSchema");
const History = require("../models/historySchema");


const customer_customers_get = (req, res) => {
    Customers.find()
        .then((resultCustomer) => {
            History.find()
                .then((result) => {
                    res.render("index.ejs", { customers: resultCustomer, history: result });
                })
            
        })
        .catch((err) => {
            console.log(err);
        });
}


const customer_profile_get = (req, res) => {
    const id = req.params.id;
    Customers.findById(id)
        .then((result) => {
            Customers.find()
            .then((resultCustomer) => {
                res.render("transfer.ejs", {
                    customerObject: result,
                    customers:resultCustomer,
                });
            })
            
        })
        .catch((err) => {
            console.log(err);
        });
}

const customer_post = (req, res) => {
    if (req.body.from === req.body.to) {
        res.redirect('/index?error=' + encodeURIComponent('Incorrect_Credential'))
    } else {
        const history = new History(req.body);
        console.log(history)
        Customers.findById(history.from)
            .then((result) => {
                console.log(result)
                const down = result.balance - history.amount;
                if (result.balance < history.amount || history.amount < 0 || history.amount == 0 ) {
                    res.redirect('/index?error=' + encodeURIComponent('Invalid_Amount'))
                }
                else {
                    history
                        .save()
                        .then((result) => {
                            Customers.findById(history.to)
                                .then((result) => {
                                    const up = result.balance + history.amount;
                                    Customers.updateOne({ _id: history.to }, { balance: up }, (err, doc) => {
                                        if (err) { console.log(err) }
                                    })
                                })
                                .catch((err) => {
                                    console.log(err);
                                });

                            Customers.findById(history.from)
                                .then((result) => {

                                    const down = result.balance - history.amount;

                                    Customers.updateOne({ _id: history.from }, { balance: down }, (err, doc) => {
                                        if (err) { console.log(err) }
                                        else {
                                            res.redirect('/index?state=' +  encodeURIComponent('Successfully_Transfered') )
                                        }
                                    })
                                })
                                .catch((err) => {
                                    console.log(err);
                                });

                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }


              })
        }
    }

module.exports = {
    customer_customers_get,
    customer_profile_get,
    customer_post
}