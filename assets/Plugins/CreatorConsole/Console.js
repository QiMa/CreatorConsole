cc.Class({
    extends: cc.Component,

    properties: {
        content: {
            default: null,
            type: cc.Label,
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
        /*
        var self = this;
        
        cc.log = function (str) {
            self.content.string += 'log: ' + str + '\n';
        };
        
        cc.warn = function (str) {
            self.content.string += 'warn: ' + str + '\n';
        };
        
        cc.error = function (str) {
            self.content.string += 'error: ' + str + '\n';
        };
        
        cc.sys = function (str) {
            self.content.string += str + '\n';
        };
        
        /*
        self.content.node.on('touchmove', function ( touch) {
            var y = touch.getPreviousLocation().y - touch.getLocationY();
            
            this.y += -y;
            if (this.y > 0 || -this.y > (this.height + this.parent.y))
                this.y += y;
        });
        
        self.dragBar.on('touchmove', function ( touch ) {
            var x = touch.getPreviousLocation().x - touch.getLocationX();
            var y = touch.getPreviousLocation().y - touch.getLocationY();
            this.parent.x += -x;
            this.parent.y += -y;
        });
        
        self.resizeBtn.on('touchmove', function ( touch ) {
            var lastPos = touch.getPreviousLocation();
            this.parent.width += touch.getLocationX() - lastPos.x;
            this.parent.height += lastPos.y - touch.getLocationY();
            self.content.node.width = this.parent.width - this.width;
        });
        */
    },
    
    commandSubmit: function () {
        /*
        var content = this.cmdEditBox.string;
        
        if (content === '')
            return;
            
        cc.sys('cmd: ' + content);
        var cmds = this.cmdEditBox.string.split(' ');
        
        var fun = this[cmds[0]];
        if (!fun) {
            cc.sys('Invalid command !');
        }
        else{
            fun(this, cmds);
        }
        this.cmdEditBox.string = '';
        */
    },
    
    // Command
    Help: function () {
        var cmdList = [
            '\n -- cl : Clean the screen',
            '\n -- e [script] : Execute the script',
            '\n -- q : Quit the console'
        ];
        cc.log('Command List:' + cmdList);
    },
    
    Cl: function (self) {
        var content = self.content;
        content.string = '';
    },
    
    E: function (self, cmds) {
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
