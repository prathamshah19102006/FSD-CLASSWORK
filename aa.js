var u = require("url");

var addr = "https://example.com/profile?user=abc&age=30";

var q1 = u.parse(addr);


console.log(q1.query);

https://docs.google.com/forms/d/e/1FAIpQLScZnSTvV3a0Ox6YPiXT8whH5zDfH7BjB6jJL_FgZlm-vW18AA/viewscore?viewscore=AE0zAgA8crtbt9GHW0sxq37RcYy81q_BbUsZHgQdsHZyEH8jDtUahVWrGibVvl8rnamND2w