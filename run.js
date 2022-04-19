const pm2 = require("pm2");

pm2.connect(function (err) {
    if (err) {
        console.log(err);
        process.exit(2);
    }

    pm2.start(
        {
            script: "npm start",
            autorestart: true,
            name: "queenyekelsunrivaled",
        },
        (err, apps) => {
            if (err) {
                console.log(err);
                return pm2.disconnect();
            }

            return apps;
        }
    );
});
