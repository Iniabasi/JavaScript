const crypto = require("crypto")

let result = crypto.createHash("sha256")

        .update("testsomething")
        .digest("hex")
