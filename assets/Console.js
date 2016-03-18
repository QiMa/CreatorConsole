cc.Class({
    extends: cc.Component,

    properties: {
        scrollVeiw: {
            default: null,
            type: cc.ScrollView,
        },
        dragBar: {
            default: null,
            type: cc.Node,
        },
        resizeBtn: {
            default: null,
            type: cc.Node,
        },
        cmdEditBox: {
            default: null,
            type: cc.EditBox,
        },
    },

    onLoad: function () {
        var self = this;
        var content = self.scrollVeiw.content.getComponent('cc.Label');
        var log = cc.log;
        var warn = cc.warn;
        var error = cc.error;
        
        cc.log = function (str) {
            content.string += 'log: ' + str + '\n';
            //self.scrollVeiw.scrollToBottom(0.1, false);
        };
        
        cc.warn = function (str) {
            content.string += 'warn: ' + str + '\n';
        };
        
        cc.error = function (str) {
            content.string += 'error: ' + str + '\n';
        };
        
        this.dragBar.on('touchmove', function ( touch ) {
            this.parent.position = touch.getLocation();
        });
        
        this.resizeBtn.on('touchmove', function ( touch ) {
            var lastPos = touch.getPreviousLocation();
            this.parent.width += touch.getLocationX() - lastPos.x;
            this.parent.height += lastPos.y - touch.getLocationY();
        });
    },
    
    commandSubmit: function () {
        cc.log('cmd: ' + this.cmdEditBox.string);
        var cmds = this.cmdEditBox.string.split(' ');
        
        var fun = this[cmds[0]];
        if (!fun) {
            cc.log('Invalid command !');
        }
        else{
            fun(this, cmds);
        }
        this.cmdEditBox.string = '';
    },
    
    // Command
    Help: function () {
        var cmdList = [
            '\n -- cl : Clean the screen',
            '\n -- exe [script] : Execute the script',
            '\n -- q : Quit the console'
        ];
        cc.log('Command List:' + cmdList);
    },
    
    Cl: function (self) {
        var content = self.scrollVeiw.content.getComponent('cc.Label');
        content.string = '';
    },
    
    Exe: function (self, cmds) {
        var script = '';
        for (var i = 1; i < cmds.length; ++i) {
            script += cmds[i] + ' ';
        }
        eval(script);
    },
    
    Q: function (self) {
        self.node.destroy();  
    },
});
