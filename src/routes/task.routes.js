module.exports = app => {
    const tasks = require("../controllers/task.controller.js");
    var router = require("express").Router();
  
    // create new task
    router.post("/", tasks.create);
  
    // get all tasks
    router.get("/", tasks.findAll);
  
    // get single task by id
    router.get("/:id", tasks.findOne);
  
    // update  task by id
    router.put("/:id", tasks.update);
  
    // delete tasks by id
    router.delete("/:id", tasks.delete);
  
    app.use('/api/tasks', router);
  };
  