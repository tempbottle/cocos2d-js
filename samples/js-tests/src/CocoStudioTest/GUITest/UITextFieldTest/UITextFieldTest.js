/****************************************************************************
 Copyright (c) 2013 cocos2d-x.org

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var UITextFieldEditorTest = UIBaseLayer.extend({
    ctor: function () {
        this._super();
        var root = ccs.uiReader.widgetFromJsonFile("res/cocosui/UIEditorTest/UITextField_Editor/ui_textfield_editor_1.json");
        this._mainNode.addChild(root);

        var back_label =ccui.helper.seekWidgetByName(root, "back");
        back_label.addTouchEventListener(this.backEvent,this);

        var textField_normal = ccui.helper.seekWidgetByName(root, "TextField_1109");
        textField_normal.addEventListenerTextField(this.textFieldEvent,this);

        var textField_max_character = ccui.helper.seekWidgetByName(root, "TextField_1110");
        textField_max_character.addEventListenerTextField(this.textFieldEvent,this);

        var textField_password = ccui.helper.seekWidgetByName(root, "TextField_1107");
        textField_password.addEventListenerTextField(this.textFieldEvent,this);
    },
    textFieldEvent: function (sender, type) {
        switch (type) {
            case ccui.TextField. EVENT_ATTACH_WITH_ME:
                this._topDisplayText.setText("attach with IME");
                break;
            case ccui.TextField. EVENT_DETACH_WITH_ME:
                this._topDisplayText.setText("detach with IME");
                break;
            case ccui.TextField. EVENT_INSERT_TEXT:
                this._topDisplayText.setText("insert words");
                break;
            case ccui.TextField. EVENT_DELETE_BACKWARD:
                this._topDisplayText.setText("delete word");
                break;
            default:
                break;
        }
    }
});
