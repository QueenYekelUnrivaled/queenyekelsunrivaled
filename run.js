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

            // pm2.list((err, list) => {
            //     console.log(err, list);

            //     pm2.restart("queenyekelsunrivaled", (err, proc) => {
            //         // disconnect from pm2
            //         pm2.disconnect();
            //     });
            // });
        }
    );
});
