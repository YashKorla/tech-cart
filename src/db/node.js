const express = require("../../node_modules/express");
const bodyParser = require("../../node_modules/body-parser");
const mysql = require("../../node_modules/mysql");

// Setting up express js API
const app = express()
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

// MySQL Connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tech_cart',
    port: 3306
});
conn.connect((err) => {
    if(err) {
        throw err;
    }
});

// API Functions
app.post("/query", (req, res) => {
    const details = req.body;
    const query = "insert into queries values('" + details["username"] + "', '" + details["email"] + "', '" + details["query"] + "')";
    conn.query(query, (err) => {
        if(err) {
            console.log('Error in Getting All');
            res.write(err);
        }
        res.write("\
            <html>\
                <script>window.open('http://localhost:3000', '_self'); alert('Query Posted!');</script>\
            </html>\
        ")
    });
});

app.post("/login", (req, res) => {
    const user = req.body;
    const query = "select * from users";
    conn.query(query, (err, result) => {
        if(err) {
            console.log('Error in Getting All');
            res.write(err);
        }
        if(Object.keys(result).length === 0) {
            res.write("<html>\
                <script>window.open('http://localhost:3000/login', '_self'); alert('No Registered User Found!');</script>\
            </html>");
        }
        else {
            for(const users in result) {
                if(result[users]["username"] == user["username"] && result[users]["password"] == user["password"]) {
                    res.write("\
                    <html>\
                        <script>window.open('http://localhost:3000', '_self'); alert('Login Successful!');</script>\
                    </html>\
                    ")
                    return;
                }
            }
            res.write("<html>\
                <script>window.open('http://localhost:3000/login', '_self'); alert('No Registered User Found!');</script>\
            </html>");
        }
    });
});

app.post("/register", (req, res) => {
    const user = req.body;
    if(user["password"] == user["confirm"]) {
        let query = "select * from users";
        conn.query(query, (err, result) => {
            if(err) {
                res.write(err);
            }
            if(Object.keys(result).length === 0) {
                query = "insert into users values('" + user["username"] + "', '" + user["email"] + "', '" + user["password"] + "')";
                conn.query(query, (err, result) => {
                    if(err) {
                        res.write(err);
                    }
                    res.write("\
                        <html>\
                            <script>window.open('http://localhost:3000/login', '_self'); alert('User Registered!');</script>\
                        </html>\
                    ")
                });
            }
            else {
                for(const users in result) {
                    if(result[users]["username"] == user["username"]) {
                        res.write("Username taken!");
                        return;
                    }
                    query = "insert into users values('" + user["username"] + "', '" + user["email"] + "', '" + user["password"] + "')";
                    conn.query(query, (err, result) => {
                        if(err) {
                            res.write(err);
                        }
                        res.write("\
                            <html>\
                                <script>window.open('http://localhost:3000/', '_self'); alert('User Registered!');</script>\
                            </html>\
                        ")
                    });
                }
            }
        });
    }

});

// App listener
app.listen(4000);