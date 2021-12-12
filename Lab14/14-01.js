const http = require("http");
const sql = require("mssql/msnodesqlv8");
const url = require("url");
const fs = require("fs");

const options = {
    server: "WIN-H4I3G26CFSU",
    database: "XYZ",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true,
    },
};

const pool = new sql.ConnectionPool(options);
const defineTable = (str) => {
    switch (str) {
        case "faculties":
            return "FACULTY";
        case "pulpits":
            return "PULPIT";
        case "subjects":
            return "SUBJECT";
        case "auditoriumstypes":
            return "AUDITORIUM_TYPE";
        case "auditorims":
            return "AUDITORIUM";
        default:
            break;
    }
};

const getHandler = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    res.writeHead(400, { "Content-Type": "application/json" });
    if (pathname.includes("/api/")) {
        const table = defineTable(pathname.split("/")[2]);
        pool
            .connect()
            .then((connection) => {
                return connection.query(`select * from ${table}`);
            })
            .then((result) => {
                console.log("Result: ", result.recordset);
                res.end(JSON.stringify(result.recordset));
            })
            .catch((err) => {
                console.log("Error: ", err.stack);
                res.end(
                    JSON.stringify({ id: 400, name: `Error: GET data from ${table}` })
                );
            })
            .finally(() => {
                pool.close();
            });
    } else if (pathname === "/") {
        fs.readFile("14-01.html", (err, data) => {
            if (err) {
                console.log("Error: ", err.stack);
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ id: 400, name: "File not found" }));
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
};
const postHandler = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname.includes("/api/")) {
        res.writeHead(200, { "Content-Type": "application/json" });
        const table = defineTable(pathname.split("/")[2]);
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        });
        req.on("end", () => {
            const item = JSON.parse(data);
            let keys = "";
            let values = "";
            let objKeysArr = Object.keys(item);
            for (let i = 0; i < objKeysArr.length; ++i) {
                let key = objKeysArr[i];
                if (i != 0) {
                    keys += ` , ${key} `;
                    values += ` , '${item[key]}' `;
                } else {
                    keys += ` ${key} `;
                    values += ` '${item[key]}' `;
                }
            }

            pool
                .connect()
                .then((connection) => {
                    console.log(`insert into ${table} (${keys}) values (${values})`);
                    return connection.query(
                        `insert into ${table} (${keys}) values (${values})`
                    );
                })
                .then((result) => {
                    console.log("New item: ", item);
                    res.end(JSON.stringify(item));
                })
                .catch((err) => {
                    console.log("Error: ", err.stack);
                    res.end(
                        JSON.stringify({
                            id: 400,
                            name: `Error: INSERT data into ${table}`,
                        })
                    );
                })
                .finally(() => {
                    pool.close();
                });
        });
    }
};
const putHandler = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname.includes("/api/")) {
        const table = defineTable(pathname.split("/")[2]);
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        });
        req.on("end", () => {
            const item = JSON.parse(data);
            let updateStr = "";
            let objKeysArr = Object.keys(item);
            for (let i = 0; i < objKeysArr.length; ++i) {
                let key = objKeysArr[i];
                if (i != 0) {
                    updateStr += `,${key}='${item[key]}'`;
                } else {
                    updateStr += `${key}='${item[key]}'`;
                }
            }

            pool
                .connect()
                .then((connection) => {
                    console.log(
                        `update ${table} set ${updateStr} where ${objKeysArr[0]}='${item[objKeysArr[0]]
                        }'`
                    );
                    return connection.query(
                        `update ${table} set ${updateStr} where ${objKeysArr[0]}='${item[objKeysArr[0]]
                        }'`
                    );
                })
                .then((result) => {
                    console.log("Updated item: ", item);
                    res.end(JSON.stringify(item));
                })
                .catch((err) => {
                    console.log("Error: ", err.stack);
                    res.end(
                        JSON.stringify({
                            id: 400,
                            name: `Error: UPDATE data from ${table}`,
                        })
                    );
                })
                .finally(() => {
                    pool.close();
                });
        });
    }
};
const deleteHandler = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    console.log(pathname);
    if (pathname.includes("/api/")) {
        const table = defineTable(pathname.split("/")[2]);
        const primaryKey = decodeURI(pathname).split("/")[3];
        pool
            .connect()
            .then((connection) => {
                console.log(`delete from ${table} where ${table}='${primaryKey}'`);
                return connection.query(
                    `delete from ${table} where ${table}='${primaryKey}'`
                );
            })
            .then((result) => {
                console.log("Deleted from ", table);
                res.end(`Deleted from ${table}`);
            })
            .catch((err) => {
                console.log("Error: ", err.stack);
                res.end(
                    JSON.stringify({ id: 400, name: `Error: DELETE data from ${table}` })
                );
            })
            .finally(() => {
                pool.close();
            });
    }
};

const server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            getHandler(req, res);
            break;
        case "POST":
            postHandler(req, res);
            break;
        case "PUT":
            putHandler(req, res);
            break;
        case "DELETE":
            deleteHandler(req, res);
            break;
        default:
            break;
    }
});

server.listen(3000);
