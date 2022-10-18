const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init("c753da034f9ecdc11d6b4920854f28c6");
Kakao.login('nohty0725@gmail.com', 'ted9872...');
var prefix = "!";
const rooms = ['test'];
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == prefix + "카링") {
        Kakao.send(room, {
            "link_ver": "4.0",
            "template_id": 50515,
            "template_args": {}
        }, "custom");

    }

}
