const app = require("express")();
const fs = require("fs");
const { createClient } = require("webdav");
const webDavClient = createClient("https://webdav.yandex.ru", {
    username: "yuliapochikovskaya",
    password: ""
});
let PORT = 3000;

app.post("/md/:directory", (req, res) => {
    let directory = req.params.directory;
    let dict = `/${directory}`;

    webDavClient
        .exists(dict)
        .then((exist) => {
            if (exist) {
                res.status(408);
                return { error: "Directory exists" };
            } else {
                return webDavClient
                    .createDirectory(dict)
                    .then(() => ({ message: `Directory '${directory}' created` }));
            }
        })
        .then((message) => res.json(message))
        .catch((err) => res.status(400).json({ error: err.message }));
});

app.post("/rd/:directory", (req, res) => {
    let directory = req.params.directory;
    let dict = `/${directory}`;

    webDavClient
        .exists(dict)
        .then((exist) => {
            if (exist) {
                return webDavClient
                    .deleteFile(dict)
                    .then(() => ({ message: `Directory '${directory}' removed` }));
            } else {
                res.status(404);
                return { error: "Directory is not exists" };
            }
        })
        .then((message) => res.json(message))
        .catch((err) => res.status(400).json({ custom: true, error: err.message }));
});

app.post("/up/:filename", (req, res) => {
    try {
        const filePath = "./" + req.params.filename;
        let rs = fs.createReadStream(filePath);
        let ws = webDavClient.createWriteStream(req.params.filename);
        rs.pipe(ws);

        res.json({ message: "File's been uploaded" });
    } catch (err) {
        res.status(408).json({ error: err.toString() });
    }
});

app.post("/down/:filename", (req, res) => {
    let path = `/${req.params.filename}`;

    let writeStream = fs.createWriteStream(`${req.params.filename}`);

    webDavClient
        .exists(path)
        .then((exist) => {
            if (exist) {
                webDavClient.createReadStream(path).pipe(writeStream);
                res.json({ message: "File was been downloaded" });
            } else {
                res.status(404);
                return { error: "File is not exists" };
            }
        })
        .then((message) => {
            return (message ? res.json(message) : null)
        })
        .catch((err) => res.status(400).json({ error: err.message }));
});

app.post("/del/:filename", (req, res) => {
    let filename = req.params.filename;
    let path = `/${filename}`;

    webDavClient
        .exists(path)
        .then((exist) => {
            if (exist) {
                return webDavClient
                    .deleteFile(path)
                    .then(() => ({ message: `File '${filename}' removed` }));
            } else {
                res.status(404);
                return { error: "File is not exists" };
            }
        })
        .then((message) => res.json(message))
        .catch((err) => res.status(400).json({ error: err.message }));
});

app.post("/copy/:filename1/:filename2", (req, res) => {
    let filename1 = req.params.filename1;
    let filename2 = req.params.filename2;

    let path = `/${filename1}`;
    let path2 = `/${filename2}`;

    webDavClient
        .exists(path)
        .then((exist) => {
            if (exist) {
                try {
                    return webDavClient
                        .copyFile(path, path2)
                        .then(() => ({ message: `File '${filename1}' copied to ${filename2}` }));
                } catch (err) {
                    res.status(404);
                    return { error: "File cannot be copied" };
                }
            } else {
                res.status(408);
                return { error: "File is not exists" };
            }
        })
        .then((message) => res.json(message))
        .catch((err) => res.status(400).json({ error: err.message }));
});
app.post("/move/:filename1/:filename2", (req, res) => {
    let filename1 = req.params.filename1;
    let filename2 = req.params.filename2;

    let path = `/${filename1}`;
    let path2 = `/${filename2}`;

    webDavClient
        .exists(path)
        .then((exist) => {
            if (exist) {
                try {
                    return webDavClient
                        .moveFile(path, path2)
                        .then(() => ({ message: `File '${filename1}' moved to ${filename2}` }));
                } catch (err) {
                    res.status(404);
                    return { error: "File cannot be moved" };
                }
            } else {
                res.status(408);
                return { error: "File is not exists" };
            }
        })
        .then((message) => res.json(message))
        .catch((err) => res.status(400).json({ error: err.message }));
});

app.use(function (request, response) {
    response.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});
