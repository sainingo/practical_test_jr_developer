const db = require("../config/db");

async function showStatusAndPriorities() {
  try {
    const query = "SELECT status, priority FROM tasks WHERE tracking_date > NOW() - INTERVAL 6 MONTH";
    const result = await db.query(query);
    return result.rows;
    }
    catch(e) {
      console.log(e);
    }
}

module.exports = { showStatusAndPriorities };