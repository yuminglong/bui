/**
 * @fileOverview 
 * 控件包含头部（head)、内容(content)和尾部（foot)
 * @ignore
 */
define('bui/component/uibase/stdmod',function () {

    var CLS_PREFIX = BUI.prefix + 'stdmod-';
        

    /**
    * 标准模块组织的视图类
    * @class BUI.Component.UIBase.StdModView
    * @private
    */
    function StdModView() {
    }

    StdModView.ATTRS = {
        header:{
        },
        body:{
        },
        footer:{
        },
        bodyStyle:{
        },
        footerStyle:{
        },
        headerStyle:{
        },
        headerContent:{
        },
        bodyContent:{
        },
        footerContent:{
        }
    };

    /*StdModView.HTML_PARSER = {
        header:function (el) {
            return el.one("." + CLS_PREFIX + "header");
        },
        body:function (el) {
            return el.one("." + CLS_PREFIX + "body");
        },
        footer:function (el) {
            return el.one("." + CLS_PREFIX + "footer");
        }
    };*/

    function createUI(self, part) {
        var el = self.get('contentEl'),
            partEl = self.get(part);
        if (!partEl) {
            partEl = $('<div class="' +
                CLS_PREFIX + part + '"' +
                ' ' +
                ' >' +
                '</div>');
            partEl.appendTo(el);
            self.setInternal(part, partEl);
        }
    }


    function _setStdModRenderContent(self, part, v) {
        part = self.get(part);
        if (BUI.isString(v)) {
            part.html(v);
        } else {
            part.html('')
                .append(v);
        }
    }

    StdModView.prototype = {

        __createDom:function () {
            createUI(this, 'header');
            createUI(this, 'body');
            createUI(this, 'footer');
        },

        _uiSetBodyStyle:function (v) {
            this.get('body').css(v);
        },

        _uiSetHeaderStyle:function (v) {
            this.get('header').css(v);
        },
        _uiSetFooterStyle:function (v) {
            this.get('footer').css(v);
        },

        _uiSetBodyContent:function (v) {
            _setStdModRenderContent(this, 'body', v);
        },

        _uiSetHeaderContent:function (v) {
            _setStdModRenderContent(this, 'header', v);
        },

        _uiSetFooterContent:function (v) {
            _setStdModRenderContent(this, 'footer', v);
        }
    };

   /**
     * @class BUI.Component.UIBase.StdMod
     * StdMod extension class.
     * Generate head, body, foot for component.
     */
    function StdMod() {
    }

    StdMod.ATTRS =
    /**
     * @lends BUI.Component.UIBase.StdMod#
     * @ignore
     */
    {
        /**
         * 控件的头部DOM. Readonly
         * @readOnly
         * @type {jQuery}
         */
        header:{
            view:1
        },
        /**
         * 控件的内容DOM. Readonly
         * @readOnly
         * @type {jQuery}
         */
        body:{
            view:1
        },
        /**
         * 控件的底部DOM. Readonly
         * @readOnly
         * @type {jQuery}
         */
        footer:{
            view:1
        },
        /**
         * 应用到控件内容的css属性，键值对形式
         * @cfg {Object} bodyStyle
         */
        /**
         * 应用到控件内容的css属性，键值对形式
         * @type {Object}
         */
        bodyStyle:{
            view:1
        },
        /**
         * 应用到控件底部的css属性，键值对形式
         * @cfg {Object} footerStyle
         */
        /**
         * 应用到控件底部的css属性，键值对形式
         * @type {Object}
         */
        footerStyle:{
            view:1
        },
        /**
         * 应用到控件头部的css属性，键值对形式
         * @cfg {Object} headerStyle
         */
        /**
         * 应用到控件头部的css属性，键值对形式
         * @type {Object}
         */
        headerStyle:{
            view:1
        },
        /**
         * 控件头部的html
         * @cfg {jQuery|String} headerContent
         */
        /**
         * 控件头部的html
         * @type {jQuery|String}
         */
        headerContent:{
            view:1
        },
        /**
         * 控件内容的html
         * @cfg {jQuery|String} bodyContent
         */
        /**
         * 控件内容的html
         * @type {jQuery|String}
         */
        bodyContent:{
            view:1
        },
        /**
         * 控件底部的html
         * @cfg {jQuery|String} footerContent
         */
        /**
         * 控件底部的html
         * @type {jQuery|String}
         */
        footerContent:{
            view:1
        }
    };

  StdMod.View = StdModView;
  return StdMod;
});