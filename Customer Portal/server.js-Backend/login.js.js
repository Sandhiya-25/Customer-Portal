const express = require('express');
const unirest = require('unirest');
const cors = require('cors');
var xml2js = require("xml2js");
const bodyparser = require("body-parser");
const parser = new xml2js.Parser({ attrkey: "ATTR" });
const app = express();const port = 2000;
app.use(bodyparser.json());app.use(cors());
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
app.use(function (req, res, next) 
{
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin,X-Requested-with,Content-Type,Accept");
     next();
    });
    app.listen(port, () => { console.log("running at 2000");
})
//LOGIN    //LOGIN    //LOGIN     //LOGIN
app.post('/logi', (req, res) => { var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('GET', 'http://KTINDHNA02.kaartech.com:8000/sap/bc/srt/rfc/sap/zws_sandcustlog/100/zws_sandcustlog/zws_sandcustlog')
    .header({ 
        'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
        'Content-Type': 'application/soap+xml'
        })
    .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style"><soap:Header/><soap:Body><urn:ZfmLogincp><ImCustomerId>' +USERID+ '</ImCustomerId><ImPassword>' +PASSWORD+ '</ImPassword></urn:ZfmLogincp></soap:Body></soap:Envelope>')
    .end(function (result)
        { 
        if (result.error) 
        {
            console.log(result.error);
                
        }else
            { 
            USERID = result.body;
            var result;
            var parser = new xml2js.Parser({ explicitArray: false });
            parser.parseString(USERID, function (err, result) {
                if (err) 
                {
                    console.error('xml2js.parseString: Error occurred: ', err);
                 }
                    result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZfmLogincpResponse"]["Result"]);
                          // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));                    // 
                          //console.log(this.res);
                        });
                }
                    console.log(this.result1);
                    res.json(this.result1);
                    })
                }) 

app.post('/profile', (req, res) => { var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_customerpro/100/zws_customerpro/zws_customerpro')
    .header({ 
        'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
        'Content-Type': 'application/soap+xml'
        })
    .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style"><soap:Header/><soap:Body><urn:ZfmCpProfle><ImCustomerId>' +USERID+ '</ImCustomerId></urn:ZfmCpProfle></soap:Body></soap:Envelope>')
    .end(function (result)
        { 
        if (result.error) 
        {
            console.log(result.error);
                
        }else
            { 
            USERID = result.body;
            var result;
            var parser = new xml2js.Parser({ explicitArray: false });
            parser.parseString(USERID, function (err, result) {
                if (err) 
                {
                    console.error('xml2js.parseString: Error occurred: ', err);
                 }
                    result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZfmCpProfleResponse"]["ExCustomerDetails"]);
                          // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));                    // 
                          //console.log(this.res);
                        });
                }
                    console.log(this.result1);
                    res.json(this.result1);
                    })
                })  


app.post('/salesorder', (req, res) => { var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_custsalesorder/100/zws_custsalesorder/zws_custsalesorder')
    .header({ 
        'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
        'Content-Type': 'application/soap+xml'
        })
        .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style"><soap:Header/><soap:Body><urn:ZfmCpSalesorder><ImCustId>' +USERID+ '</ImCustId><ImPurorderNum></ImPurorderNum><ImSalesorg></ImSalesorg></urn:ZfmCpSalesorder></soap:Body></soap:Envelope>')
        .end(function (result)
            { 
                if (result.error) 
                    {
                    console.log(result.error);
                                
                }else
                    { 
                    USERID = result.body;
                    var result;
                    var parser = new xml2js.Parser({ explicitArray: false });
                    parser.parseString(USERID, function (err, result) {
                        if (err) 
                            {
                                console.error('xml2js.parseString: Error occurred: ', err);
                            }
                            result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZfmCpSalesorderResponse"]["ExSalesorder"]["item"]);
                                          // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));                    // 
                                          //console.log(this.res);
                                });
                        }
                            console.log(this.result1);
                            res.json(this.result1);
                            })
                        })
app.post('/invoicedata', (req, res) => { var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_cuinvoicedata/100/zws_cuinvoicedata/zws_cuinvoicedata')
    .header({ 
        'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
        'Content-Type': 'application/soap+xml'
        })
        .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style"><soap:Header/><soap:Body><urn:ZfmCpInvoicedata><ImCustId>' +USERID+ '</ImCustId><InvDet><!--Zero or more repetitions:--></InvDet><!--Optional:--><SalesDocNo>90000001</SalesDocNo></urn:ZfmCpInvoicedata></soap:Body></soap:Envelope>')
        .end(function (result)
        { 
            if (result.error) 
            {
                console.log(result.error);
                                                        
            }else
            { 
                USERID = result.body;
                var result;
                var parser = new xml2js.Parser({ explicitArray: false });
                parser.parseString(USERID, function (err, result) {
            if (err) 
            {
                console.error('xml2js.parseString: Error occurred: ', err);
            }
                result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZfmCpInvoicedataResponse"]["InvDet"]["item"]);
                // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));                    // 
                                                                  //console.log(this.res);
                });
            }
                    console.log(this.result1);
                    res.json(this.result1);
            })
        })                                             
app.post('/cdelivery', (req, res) => { var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_cdelivery/100/zws_cdelivery/zws_cdelivery')
    .header({ 
            'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
            'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style"><soap:Header/><soap:Body><urn:ZfmCpDeliverylistcust><ImCustId>12</ImCustId><!--Optional:--><ItDelivery><!--Zero or more repetitions:--></ItDelivery></urn:ZfmCpDeliverylistcust></soap:Body></soap:Envelope>')
            .end(function (result)
            { 
                if (result.error) 
                    {
                        console.log(result.error);
                                                                
                    }else
                    { 
                        USERID = result.body;
                        var result;
                        var parser = new xml2js.Parser({ explicitArray: false });
                        parser.parseString(USERID, function (err, result) {
                    if (err) 
                    {
                        console.error('xml2js.parseString: Error occurred: ', err);
                    }
                        result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZfmCpDeliverylistcustResponse"]["ItDelivery"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));                    // 
                                                                          //console.log(this.res);
                        });
                    }
                            console.log(this.result1);
                            res.json(this.result1);
                    })
                })
app.post('/credit', (req, res) => { var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_custcredit/100/zws_custcredit/zws_custcredit')
    .header({ 
        'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
        'Content-Type': 'application/soap+xml'
        })
        .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style"><soap:Header/><soap:Body><urn:ZfmCpCreditdebit><ImCustId>' +USERID+ '</ImCustId><ItCredit><!--Zero or more repetitions:--></ItCredit><ItDebit><!--Zero or more repetitions:--></ItDebit></urn:ZfmCpCreditdebit></soap:Body></soap:Envelope>')
        .end(function (result)
        { 
                if (result.error) 
                {
                        console.log(result.error);
                                                                                
                }else
                { 
                        USERID = result.body;
                        var result;
                        var parser = new xml2js.Parser({ explicitArray: false });
                        parser.parseString(USERID, function (err, result) {
                        if (err) 
                        {
                        console.error('xml2js.parseString: Error occurred: ', err);
                        }
                        result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZfmCpCreditdebitResponse"]["ItCredit"]["item"]);
                                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));                    // 
                                                                                          //console.log(this.res);
                        });
                        }
                                    console.log(this.result1);
                                    res.json(this.result1);
                                    })
                                }) 
app.post('/debit', (req, res) => { var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('GET', 'http://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_custcredit/100/zws_custcredit/zws_custcredit')
    .header({ 
            'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
            'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style"><soap:Header/><soap:Body><urn:ZfmCpCreditdebit><ImCustId>' +USERID+ '</ImCustId><ItCredit><!--Zero or more repetitions:--></ItCredit><ItDebit><!--Zero or more repetitions:--></ItDebit></urn:ZfmCpCreditdebit></soap:Body></soap:Envelope>')
            .end(function (result)
            { 
                if (result.error) 
                    {
                        console.log(result.error);
                                                                                                                
                    }else
                    { 
                        USERID = result.body;
                        var result;
                        var parser = new xml2js.Parser({ explicitArray: false });
                        parser.parseString(USERID, function (err, result) {
                        if (err) 
                            {
                                console.error('xml2js.parseString: Error occurred: ', err);
                            }
                                result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZfmCpCreditdebitResponse"]["ItDebit"]["item"]);
                                    // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));                    // 
                                                                                                                          //console.log(this.res);
                                });
                                    }
                                        console.log(this.result1);
                                        res.json(this.result1);
                                    })
                                })
app.post('/inquiry', (req, res) => { var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_inquirydatalist/100/zws_inquirydatalist/zws_inquirydatalist')
    .header({ 
            'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
            'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style"><soap:Header/><soap:Body><urn:ZfmCpInquirydatalist><ImCustId>12</ImCustId><!--Optional:--><InquiryDet><!--Zero or more repetitions:--></InquiryDet></urn:ZfmCpInquirydatalist></soap:Body> </soap:Envelope>')
            .end(function (result)
            { 
            if (result.error) 
            {
                console.log(result.error);
                                                                                                                                                
            }else
            { 
                USERID = result.body;
                var result;
                var parser = new xml2js.Parser({ explicitArray: false });
                parser.parseString(USERID, function (err, result) {
            if (err) 
                {
                    console.error('xml2js.parseString: Error occurred: ', err);
                }
                    result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZfmCpInquirydatalistResponse"]["InquiryDet"]["item"]);
                    // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));                    // 
                                                                                                                                                          //console.log(this.res);
                });
                    }
                console.log(this.result1);
                res.json(this.result1);
                    })
                })

app.post('/payage', (req, res) => { var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_custpayage/100/zws_custpayage/zws_custpayage')
        .header({ 
            'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
            'Content-Type': 'application/soap+xml'
                })
                .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style"><soap:Header/><soap:Body><urn:ZfmCpPayments><ImCompcode>0001</ImCompcode><ImCustId>' +USERID+ '</ImCustId><Output><!--Zero or more repetitions:--></Output></urn:ZfmCpPayments></soap:Body></soap:Envelope>')
                .end(function (result)
                    { 
                        if (result.error) 
                            {
                                console.log(result.error);
                                                                                                                                                                
                        }else
                            { 
                                USERID = result.body;
                                var result;
                                var parser = new xml2js.Parser({ explicitArray: false });
                                parser.parseString(USERID, function (err, result) {
                        if (err) 
                                {
                                    console.error('xml2js.parseString: Error occurred: ', err);
                                }
                                    result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZfmCpPaymentsResponse"]["Output"]["item"]);
                                    // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));                    // 
                                                                                                                                                                          //console.log(this.res);
                                });
                                    }
                                console.log(this.result1);
                                res.json(this.result1);
                                    })
                                })

    

                
